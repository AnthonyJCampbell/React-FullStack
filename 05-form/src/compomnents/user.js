import React, { Component } from 'react'
import FormFields from '../widgets/forms/formFields'
import { firebaseDB } from '../firebase';
 
class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "Name",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name"
        },
        validation:{
          required:true,
          minLen: 5
        },
        valid:false,
        touch:false,
        validationMessage:'',
      },
      lastname:{
        element: "input",
        value: "",
        label: true,
        labelText: "LastName",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your last name"
        },
        validation:{
          required:false,
        },
        valid:true,
        touch:false,
        validationMessage:'',
      },
      message:{
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "message_input",
          rows: 4,
          cols:36
        }
      },
      age:{
        element: "select",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "age_input",
          options:[
            {val:'1',text:'10-19'},
            {val:'2',text:"20-29"},
            {val:'3',text:"30+"},
          ]
        }
      },
    }
  };

  updateForm = (newState) =>{
    // console.log(newState)
    this.setState({
      formData:newState
    })
  }

  submitForm = (e)=>{
    e.preventDefault();
    let dataToSubmit ={};
    let form = this.state.formData
    let validate = true
    for (let k in form){
      dataToSubmit[k] = form[k].value
      console.log(form[k])
      if(form[k].validation){
        validate = validate&&form[k].valid
      }
    }
    if(validate){
      // do submit
      firebaseDB.ref("users").push(dataToSubmit).then(()=>{
        console.log('save success')
      }).catch(e=>console.error(e))
    }else{
      console.log('validate false')
    }

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields 
            formData={this.state.formData}
            onblur={(newState)=>this.updateForm(newState)}
            change={(newState)=>this.updateForm(newState)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User
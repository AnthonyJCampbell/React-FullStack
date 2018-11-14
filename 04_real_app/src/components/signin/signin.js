import React, { Component } from 'react';
import styles from './signin.css';
import FormField from '../widgets/Formfields/formFields'
import { firebase } from '../../firebase'
class SignIn extends Component {
  state = {
    registerError: '',
    loading: false,
    formdata:{
      email:{
        element: 'input',
        value:'',
        config:{
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation:{
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage:""
      },
      password:{
        element: 'input',
        value:'',
        config:{
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation:{
          required: true,
          password: true,
        },
        valid: false,
        touched: false,
        validationMessage:""
      }
    }
  }
  validate = (el) =>{
    let error = [true, ''];
    el.value = el.value.trim() ;
    if(el.validation.required){
      const valid = (el.value!== '');
      error = !valid ?[valid,'required'] : error;
      
    }
    if(el.validation.email){
      const valid = /\S+@\S+\.\S+/.test(el.value);
      error = !valid ?[valid,'email format error'] : error;
    }
    if(el.validation.password){
      const valid = el.value.length > 5;
      error = !valid ?[valid,'password must greater then 5 letters'] : error;
    }
    return error
  }
  updateForm =(e)=>{
    const newFormdata = {...this.state.formdata}
    const newElement = {...newFormdata[e.id]}
    newElement.value = e.event.target.value;
    if(e.blur){
      let validData = this.validate(newElement)
      newElement.valid = validData[0]
      newElement.validationMessage = validData[1];
    }
    newElement.touched = e.blur;

    newFormdata[e.id] = newElement;
    this.setState({formdata:newFormdata})
  }

  submitForm = (e,type) => {
    e.preventDefault();
    if( type !== null) {
      let dataToSubmit = {};
      let formIsValid = true;
      for(let key in this.state.formdata){
        dataToSubmit[key] = this.state.formdata[key].value
      }

      for(let key in this.state.formdata){
        formIsValid = this.state.formdata[key].valid && formIsValid
      }
      if(formIsValid){
        this.setState({
          loading:true,
          registerError:''
        });
        if(type){
          // regist
          firebase.auth()
          .createUserWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password)
          .then(()=>{
            this.props.history.push('/')
          }).catch(e=>{
            this.setState({
              loading:false,
              registerError: e.message
            })
          })
        }else{
          // login

          firebase.auth()
          .signInWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password)
          .then(()=>{
            this.props.history.push('/')
          }).catch(e=>{
            this.setState({
              loading:false,
              registerError: e.message
            })
          })
        }
      }
      
    }
  }


  submitBtn=(e)=>{
    return (this.state.loading ? 'loading...':(
      <div>
        <button onClick={(e)=>this.submitForm(e,true)}>Register Now</button>
        <button onClick={(e)=>this.submitForm(e,false)}>Log in</button>
      </div>
    ))
  }

  render() {
    return (
      <div className={styles.authContainer}>
        <form>
          <h2>Sign In/Register</h2>
          <FormField 
            id={'email'} 
            formdata={this.state.formdata.email} 
            change={element=>this.updateForm(element)}/>

          <FormField 
            id={'password'} 
            formdata={this.state.formdata.password} 
            change={element=>this.updateForm(element)}/>
          {this.submitBtn()}
          {this.state.registerError?(
            <div className={styles.error}>
              <p>{this.state.registerError}</p>
            </div>
          ):null}
        </form>

      </div>
    );
  }
}

export default SignIn;
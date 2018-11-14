import React, { Component } from 'react'
import FormField from "../widgets/Formfields/formFields";
import styles from './dashboard.css'

import { firebaseTeams, firebaseArticles, firebase } from '../../firebase'
import { withRouter } from 'react-router-dom'
import Uploader from "../widgets/Fileuploader/uploader";

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';




class DashBoard extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    postError: "",
    loading: false,
    formdata: {
      author: {
        element: "input",
        value: "",
        config: {
          name: "author_input",
          type: "text",
          placeholder: "Enter Author Name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      title: {
        element: "input",
        value: "",
        config: {
          name: "title_input",
          type: "text",
          placeholder: "Enter Title Name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      body: {
        element: "texteditor",
        value: "",
        valid: true
      },
      image: {
        element: "image",
        value: "",
        valid: true
      },
      team: {
        element: "select",
        value: "",
        config: {
          name: "team_input",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };
  submitForm = (e, type) => {
    e.preventDefault();
    if (type !== null) {
      let dataToSubmit = {};
      let formIsValid = true;
      for (let key in this.state.formdata) {
        dataToSubmit[key] = this.state.formdata[key].value;
      }

      for (let key in this.state.formdata) {
        formIsValid = this.state.formdata[key].valid && formIsValid;
      }
      if (formIsValid) {
        this.setState({
          loading: true,
          registerError: ""
        });
        // do submit work for backend
        firebaseArticles.orderByChild("id").limitToLast(1).once('value')
        .then(snapshot =>{
          let articleId = null;
          snapshot.forEach(childSnapshot => {
            articleId = childSnapshot.val().id
          })
          dataToSubmit['date']=firebase.database.ServerValue.TIMESTAMP
          dataToSubmit['id'] = articleId+1;
          dataToSubmit['team'] = parseInt(dataToSubmit['team'],10);
          firebaseArticles.push(dataToSubmit).then(article => {
            this.props.history.push(`/articles/${article.key}`)
          }).catch(e=>{
            this.setState({
              postError:e.message
            })
          })
        })
        console.log(this.state.formdata);
      }
    }
  };
  updateForm = (e, content = "") => {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[e.id] };

    if (content === "") {
      newElement.value = e.event.target.value;
    } else {
      newElement.value = content;
    }

    if (e.blur) {
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = e.blur;

    newFormdata[e.id] = newElement;
    this.setState({ formdata: newFormdata });
  };

  validate = el => {
    let error = [true, ""];
    el.value = el.value.trim();
    if (el.validation.required) {
      const valid = el.value !== "";
      error = !valid ? [valid, "required"] : error;
    }
    if (el.validation.email) {
      const valid = /\S+@\S+\.\S+/.test(el.value);
      error = !valid ? [valid, "email format error"] : error;
    }
    if (el.validation.password) {
      const valid = el.value.length > 5;
      error = !valid ? [valid, "password must greater then 5 letters"] : error;
    }
    return error;
  };

  submitBtn = () => {
    return this.state.loading ? (
      "loading..."
    ) : (
      <div>
        <button onClick={e => this.submitForm(e, true)}>Create New Post</button>
      </div>
    );
  };
  onEditorStateChange = editorState => {
    let state = convertToRaw(editorState.getCurrentContent());
    let html = stateToHTML(editorState.getCurrentContent());

    this.updateForm({ id: "body" }, html);

    this.setState({ editorState });
  };

  loadTeams = () => {
    firebaseTeams.once("value").then(snap => {
      let teams = [];
      snap.forEach(child => {
        teams.push({
          id: child.val().teamId,
          name: child.val().city
        });
      });
      const newFormData = { ...this.state.formdata };
      const newElement = { ...newFormData["team"] };
      newElement.config.options = teams;
      newFormData["team"] = newElement;

      this.setState({ formdata: newFormData });
    });
  };
  componentDidMount() {
    this.loadTeams();
  }

  storeFileName = fileName => {
    this.updateForm({ id: "image" }, fileName);
  };
  render() {
    return (
      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>

          <Uploader filename={filename => this.storeFileName(filename)} />
          <FormField
            id={"author"}
            formdata={this.state.formdata.author}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={"title"}
            formdata={this.state.formdata.title}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={"team"}
            formdata={this.state.formdata.team}
            change={element => this.updateForm(element)}
          />

          <Editor
            editState={this.state.editorState}
            wrapperClassName="myEditor-wrapper"
            editorClassName="myEditor-editor"
            onEditorStateChange={this.onEditorStateChange}
          />

          {this.submitBtn()}
          {this.state.postError ? (
            <div className={styles.error}>
              <p>{this.state.postError}</p>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default withRouter(DashBoard)
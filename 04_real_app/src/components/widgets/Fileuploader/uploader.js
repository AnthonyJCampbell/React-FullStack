import React, { Component } from 'react'
import {firebase} from '../../../firebase'
import FileUploader from 'react-firebase-file-uploader'

class Uploader extends Component {
  state = {
    name:'',
    isUploading: false,
    progress:0,
    fileUrl:''
  };
  handleUploadStart=()=>{
    this.setState({isUploading:true,progress:0})
  }

  handleUploadProgress=(progress)=>{
    this.setState({
      progress
    })
  }

  handleUploadSuccess=(filename)=>{
    console.log(filename)
    this.setState({ isUploading: false, name:filename, progress: 100 });
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url=>this.setState({fileUrl:url}))
    this.props.filename(filename);
  }

  handleUploadError=()=>{
    this.setState({ isUploading: false, progress: 0 });
  }

  render() {
    return (<div>
          <FileUploader
            accept="image/*"
            name="images"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleUploadProgress}/>        
          {this.state.isUploading &&<p>Progress: {this.state.progress}</p>}
      {this.state.fileUrl!==''?<img style={{ width:'300px' }} src={this.state.fileUrl} />:null}
    </div>);
  }
}

export default Uploader;
import * as firebase from 'firebase';
import conf from './config.json';
var config = {
  apiKey: conf['firebase_api_key'],
  authDomain: "nba-project-61a9f.firebaseapp.com",
  databaseURL: "https://nba-project-61a9f.firebaseio.com",
  projectId: "nba-project-61a9f",
  storageBucket: "nba-project-61a9f.appspot.com",
  messagingSenderId: conf['firebase_sender_Id']
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLoop = (snapshot) =>{
  const data=[];
  snapshot.forEach((child)=>{
    data.push({
      ...child.val(),
      id: child.key
    }) 
  })
  return data;
}

export{
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLoop
}




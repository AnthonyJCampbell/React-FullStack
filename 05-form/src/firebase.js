import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAsgdYDoXcATWmY8wKCrylT0o4_wWtKzMA",
  authDomain: "form-test-be0d2.firebaseapp.com",
  databaseURL: "https://form-test-be0d2.firebaseio.com",
  projectId: "form-test-be0d2",
  storageBucket: "form-test-be0d2.appspot.com",
  messagingSenderId: "291979114997"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database()

// ref()将删除原来的所有东西
// ref("name")  ref("info/jobs")
// firebaseDB.ref("skills").set({
//   skill:['computer','python']
// })

// 设置key-value
// firebaseDB.ref('eyes').set('black').then(()=>{
//   console.log('data saved')
// }).catch(e=>console.log(e))

// 删除Key
// firebaseDB.ref('eyes').remove().then(()=>{
//   console.log('data remove')
// }).catch(e=>console.log(e))

// 清空数据并删除Key
// firebaseDB.ref('skills').set(null).then(()=>{
//   console.log('data remove')
// }).catch(e=>console.log(e))


// 更新数据
// firebaseDB.ref().update({
//   "car":"new car"
// }).then(()=>{
//   console.log("update success")
// }).catch(e=>console.log(e))


// ------------------------
// firebaseDB.ref()
//           .once('value')
//           .then(snapshot=>{
//             // snapshot.val() will return all data
//             console.log(snapshot.val())
//           })
//           .catch(e=>console.error(e))


// realtime change listen when data changed.
// firebaseDB.ref().on('value',snapshot=>{
//   console.log(snapshot.val())
// })

// setTimeout(()=>{
//   // off only turn off on value change event , not stop any connections
//   firebaseDB.ref().off()
// },10000)

// setInterval(()=>{
//   firebaseDB.ref('name').set('mike'+Math.random()*100)
// },2000)

// ------------------------


// firebaseDB.ref().on("child_removed",(snapshot)=>{
//   console.log(snapshot.val())
// })


// firebaseDB.ref().on("child_changed",(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// firebaseDB.ref().on("child_added",(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// ---------------------------

// firebaseDB.ref().set([{
//   id:'1',
//   name:'mike',
//   lastname:'zh'
// },{
//   id:'2',
//   name:'alice',
//   lastname:'ch'
// },{
//   id:'3',
//   name:'tom',
//   lastname:'di'
// },])

// if no id , firebase will create id for us 
// push will push new object 
// firebaseDB.ref('users').push({
//   name:'alice',
//   lastname:'dh'
// })

// firebaseDB.ref('users').once('value').then(snapshot=>{
//   const users = [];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()})
//   })
//   console.log(users)
// })

// firebaseDB.ref('users').orderByChild('name').once('value').then(snapshot=>{
//   const users = [];
//   snapshot.forEach((childSnapshot)=>{
//     users.push({
//       id: childSnapshot.key,
//       name:childSnapshot.val().name})
//   })
//   console.log(users)
// })


const googleAuth = new firebase.auth.GoogleAuthProvider();



export {
  firebase,
  firebaseDB,
  googleAuth
}
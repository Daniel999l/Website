
           // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsn2Pl7q4-rTNnFvlb-6ismZKCJVsv8Ig",
  authDomain: "daniel-lite.firebaseapp.com",
  databaseURL: "https://daniel-lite.firebaseio.com",
  projectId: "daniel-lite",
  storageBucket: "daniel-lite.appspot.com",
  messagingSenderId: "58304782358",
  appId: "1:58304782358:web:77d0f5528278851e97d537",
  measurementId: "G-5VP8CBT6JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
     //Get elements 
     const  txtEmail = document.getElementById('email'); 
     const  txtPassword = document.getElementById('password'); 
     const  btnLogin = document.getElementById('btnLogin'); 
     const  btnSignup = document.getElementById('btnSignup'); 
  
     //Add login Click event 
     btnLogin.addEventListener('click',e=>{ 
        //Get Email and Password 
         const email = txtEmail.value; 
         const pass = txtPassword.value; 
         const auth = firebase.auth(); 
         //Sign in 
         const promise = auth.signInWithEmailAndPassword(email, pass); 
         promise.catch(e=> console.log(e.message)); 
     }); 
  
     //Add signup event 
     btnSignup.addEventListener('click',e=>{ 
        //Get Email and Password 
         const email = txtEmail.value; 
         const pass = txtPassword.value; 
         const auth = firebase.auth(); 
         //Sign in 
         const promise = auth.createUserWithEmailAndPassword(email, pass); 
         promise.catch(e=> console.log(e.message)); 
     }); 
  
     //Add a realtime auth listener 
     firebase.auth().onAuthStateChanged(firebaseUser => { 
        if(firebaseUser){ 
            console.log(firebaseUser); 
        }  
         else{ 
             console.log('not logged in');  
         } 
     }); 
       </script> 
   </
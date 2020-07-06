//var firebase = require('firebase');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var signUpBtn = document.getElementById('signUpBtn');
  var signInBtn = document.getElementById('signInBtn')

  signUpBtn.addEventListener('click', function(){
        var emailField = document.getElementById('email').value;
        var passwordField = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
            alert('User created!');
        }).catch(function(error){
            if(error != null){
                console.log(error.message);
                return
            }
        });
  });

    signInBtn.addEventListener('click', function(){
        var emailField = document.getElementById('email').value;
        var passwordField = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
            document.location.href = 'zalogowano.html';
        }).catch(function(error){
            if(error != null){
                console.log(error.message);
                return;
            }
        });
  });
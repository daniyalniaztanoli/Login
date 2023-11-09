const firebaseConfig = {
    apiKey: "AIzaSyBWlHC0caIHFqPjXUTkcEtaMLW5naSRnzU",
    authDomain: "tech-vibe1.firebaseapp.com",
    projectId: "tech-vibe1",
    storageBucket: "tech-vibe1.appspot.com",
    messagingSenderId: "216804442087",
    appId: "1:216804442087:web:2cdbd7eb5c8cee3ebcc742"
  };

const app = firebase.initializeApp(firebaseConfig);
  
  // ***********************SignUp Auth*******************************

  function sign() {
    var email = document.getElementById("useremail");
    var password = document.getElementById("userpassword");
    

    console.log(email.value,password.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(email);
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            alert("Email sent Successfully..");
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  // ***********************Login Auth*******************************
  
  function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  // ***********************Forget Password section*******************************
  
  function forget() {
    var email = document.getElementById("email");
  
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        function JSalert(){

            swal("Congrats!", ", Password reset email sent...!", "success");
            
            }
        alert("Password Reset email Was Sent...");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  // ***********************Google Login Auth*******************************
  
  function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  
  // ***********************Github Login Auth*******************************
  
  function loginWithGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
  
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // IdP data available in result.additionalUserInfo.profile.
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  
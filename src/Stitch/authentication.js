import { app } from "./app.js";
 import { UserPasswordAuthProviderClient,UserPasswordCredential } from "mongodb-stitch-browser-sdk";
// const { UserPasswordAuthProviderClient } = Stitch;

const emailPasswordClient = app.auth
    .getProviderClient(UserPasswordAuthProviderClient.factory);


export async function registerUser(email,password,dealer) {
    //allow users to log in with email and password
    await emailPasswordClient.registerWithEmail(email, password)
        .then(() => window.location.href = '/login')
        .catch(err => alert("Error registering new user:", err));
}

export async function loginUser(email,password) {
    const credential = new UserPasswordCredential(email,password);
        //var curruser = getCurrentUser();
        //var result = await items.find({}).toArray();
    await app.auth.loginWithCredential(credential)    
    // Returns a promise that resolves to the authenticated user
    .then((user) => 
     {        
        // var curruser = getCurrentUser();
        // var ispresent = result.some(item => item.owner_id === curruser.id);
        //  if(ispresent){
        //     window.location.href = '/'
        //  }
        //  else{
        //     window.location.href = '/profile'
        // }
        window.location.href = '/home'
    })
    .catch(err => alert(`login failed with error: ${err}`));
}

export function hasLoggedInUser() {
  // Check if there is currently a logged in user  
  //console.log('from has logged in auth :-'+app.auth.isLoggedIn)
  return app.auth.isLoggedIn;
}

export function getCurrentUser() {
    // Return the user object of the currently logged in user
    return app.auth.isLoggedIn ? app.auth.user : null;
}

export async function logoutCurrentUser() {
    // Logout the currently logged in user
    
    const user = getCurrentUser();
    await app.auth.logoutUserWithId(user.id).then(
        () => window.location.href = '/register'
    );
}


import * as functions from "firebase-functions";
const admin = require('firebase-admin');
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

//
admin.initializeApp();
export const helloWorld = functions.https.onRequest((request, response) => {
    admin.auth().updateUser("Nhh0GrFjZsg2QfZ26YS1Q4FGU5y1", {emailVerified: true}).then((res:any)=>{
        console.log(res)
        response.send("Hello from Firebase!");
    })
    
});

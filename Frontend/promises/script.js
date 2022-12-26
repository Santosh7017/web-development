var userLoggedIn = true;
function checkUserLoggedIn(){
var promise = new Promise((resolve, reject)=>{
     setTimeout(()=>{
        // promie is resolved
        if(userLoggedIn){
        resolve("User Logged In");
        }else{
            // reject
            reject();
        }
     },1000);
});
return promise;
}

setTimeout(()=>{
userLoggedIn = false;

},500);

// promise.then(()=>{
//     console.log("Succesfull");
// }).catch(()=>{
//     console.log("User not Logged In");
// });
checkUserLoggedIn.then((succesMsg)=>{
    console.log(succesMsg);
}).catch(()=>{
    console.log();
});
//  checkUsserLoggedIn().then(fetchUserFeed).then(fetchUserFriends).then(fetchUserMessages)

/*
$.ajax({
    success:function(){
        $.ajax({
             success: function(){
                $.ajax({

                })
             }
        })
    }
})


*/

/*
promise1.then().then().then().then().catch();

*/



function fetchRandomDogImage(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
     var responseJSON = JSON.parse(xhrRequest.response);
     JSON.stringify  // convert json object into string
     var imageUrl = responseJSON.message;
     $('#dog-image').attr('src',imageUrl);
    };
    xhrRequest.onerror = function(){
        console.log("Request Failed");
    };
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);  // true for asynchronous and falst for synchronous
    xhrRequest.send();
    

    // using jquery
    // $.ajax({
    //     url:'https://dog.ceo/api/breeds/image/random',
    //     method:'GET',
    //     success: function(data){
         
    //          var imageUrl = data.message;
    //          $('#dog-image').attr('src',imageUrl);
    //     },
    // }).fail(function(){
    //     console.log('error');
    // });

// $.get('https://dog.ceo/api/breeds/image/random',function(data){
//     var imageUrl = data.message;
//     $('#dog-image').attr('src',imageUrl);
// }).fail(function(xhr,textStatus,errorThrown){
//     console.log("Request Failed");
// });
}





$('#fetch-dog-button').click(fetchRandomDogImage);
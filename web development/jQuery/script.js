


// var para1 = document.getElementById('para1');
// para1.innerHTML = "Welcome";

//  $('#para1').html('Welcome to web de');
/*
    function $(query){
        document.querySelector(query);
    }
*/
// $('#para1').hide();
// $('#para1').width(10);
// $('p').html("wecome");
$("p").css({
    fontSize:"30px",
    color: "red"
});

$('div').css({
    width: "100px",
    height: "100px",
    backgroundColor:"cyan"
})

// *  Event Listner

// $('div').click(function(){
//     alert("Div clicked");
// });

$('div').on('click',function(){
    var element = $(this);
    element.width(element.width()+10 +"px")
    alert("Div clicked");
});

$('a').on('click',function(event){
    event.preventDefault();
    alert("Anchor tag clikced");
});


// ! Jquery ui based on core jquery
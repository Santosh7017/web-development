function displayImage(data){
    // $('<img>',{
    //     src: data.url,
    //     height: '100%',
    //     width: '100%'
    // }).appendTo('#image-container');

    var img = $(document.createElement('img'));
    img.attr('src',data.url);
    img.appendTo('#image-container');

}

$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method: "GET",
    success: displayImage,
    data:{
      api_key: 'E9DKkpYOPeAJmf6d8U2OaSWxlrgPO7dYcY3pgHtw',
      date: '2019-06-05',

    }
})
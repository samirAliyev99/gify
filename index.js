$('.searched').click(function (e) {
   var clicked_div= e.target.className; // The id of the clicked element
   if(clicked_div!='col-6 searched')
   call(clicked_div)
});


$("#button").on("click",function(){

    call($("#wanted").val());
    
});


function call(searching){
    $('#din').empty();

        var wanted=searching;
        const settings = {
            "async": true,
            "url":'https://api.giphy.com/v1/gifs/search?api_key=aNxIlBjjShcnAEr0bD5ITpDXPrAAIntN&q='+wanted+'&limit=1&offset=0&rating=g&lang=en',
            "method": "GET",
            };

        $.ajax(settings).done(function (response) {
            let img=document.createElement('img');
            img.src=response.data[0].images.downsized.url;
            $('#din').append(img);
        
                let div=document.createElement('div');
                div.innerHTML=wanted;
                $( div ).addClass( wanted );
                $('.searched').append(div);
            
});

}

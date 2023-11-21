$(document).ready(function(){
    for(let i = 0; i < 5; i++) {
        $("#ForYou").append('<li><a href=\"bookinfo.html?bookName='+books[i].name+'\"><div class=\"bookcon\"><img src=\"'+books[i].img+'\" alt="'+books[i].name+'"><div class="bookcap"><div class="name"><p><b>'+books[i].name+'</b></p> <p>'+books[i].author+'</p></div> <p class="rate"><b>'+books[i].rate+'</b></p></div class="bookcap"></div class="bookcon"></a></li>');
    } 
    for(let i = 0; i < 7; i++) {
        $("#Popular").append('<li><a href=\"bookinfo.html?bookName='+books[i].name+'\"><div class=\"bookcon\"><img src=\"'+books[i].img+'\" alt="'+books[i].name+'"><div class="bookcap"><div class="name"><p><b>'+books[i].name+'</b></p> <p>'+books[i].author+'</p></div> <p class="rate"><b>'+books[i].rate+'</b></p></div class="bookcap"></div class="bookcon"></a></li>');
        $("#New").append('<li><a href=\"bookinfo.html?bookName='+books[i].name+'\"><div class=\"bookcon\"><img src=\"'+books[i].img+'\" alt="'+books[i].name+'"><div class="bookcap"><div class="name"><p><b>'+books[i].name+'</b></p> <p>'+books[i].author+'</p></div> <p class="rate"><b>'+books[i].rate+'</b></p></div class="bookcap"></div class="bookcon"></a></li>');
    } 
  });
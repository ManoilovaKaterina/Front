$(document).ready(function(){
    for(let i = 0; i < books.length; i++) {
        $("#BooksList").append('<li><a href=\"bookinfo.html?bookName='+books[i].name+'\"><div class=\"bookcon\"><img src=\"'+books[i].img+'\" alt="'+books[i].name+'"><div class="bookcap"><div class="name"><p><b>'+books[i].name+'</b></p> <p>'+books[i].author+'</p></div> <p class="rate"><b>'+books[i].rate+'</b></p></div class="bookcap"></div class="bookcon"></a></li>');
    } 
    if(window.location.search){
        $("#BooksList > li").hide();
        let str = window.location.search
        let s = decodeURI(str.slice(str.indexOf('=') + 1)).toLowerCase();
        $("#BooksList > li").filter(function() {
            return $(this).find("p").text().toLowerCase().includes(s);
          }).show();
    }
    $("#btnfil").click(function(){
        let checked = $('input[name="genre"]:checked');
        if(checked.length>0){
            $("#BooksList > li").hide();
            let thisbooks = []
            $(checked).each(function(){
                thisbooks = thisbooks.concat(books.filter(book => book.genre === this.value));
            })
            for(let i = 0; i < thisbooks.length; i++) {
                $("#BooksList > li").filter(function() {
                    return $(this).find("p").text().toLowerCase().includes(thisbooks[i].name.toLowerCase()+thisbooks[i].author.toLowerCase());
                  }).show();
            }
        }
        else{
            $("#BooksList > li").show();
        }
        return false;
      });
  });
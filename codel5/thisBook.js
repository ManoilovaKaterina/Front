$(document).ready(function(){
    let str = window.location.search
    let bookname = decodeURI(str.slice(str.indexOf('=') + 1));
    let thisbook = books.find(book => book.name === bookname);
    $("#bname").html(thisbook.name);
    $("#bauthor").html(thisbook.author);
    $("#brate").html(thisbook.rate);
    $("#bgenre").html(thisbook.genre);
    $("#bimg").attr("src", thisbook.img);
});
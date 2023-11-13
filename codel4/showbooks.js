class Book {
    constructor(name, author, img, genre, rate) {
    this.name = name;
    this.author = author;
    this.img = img;
    this.genre = genre;
    this.rate = rate;
    }
}

books = [new Book("Персі Джексон", "Рік Ріордан", "https://m.media-amazon.com/images/I/9128Paqy4-L._AC_UF1000,1000_QL80_.jpg", "Фантастика", 4.7),
new Book("Кобзар", "Тарас Шевченко", "https://vivat-book.com.ua/upload/iblock/8ce/8ce16dc939f20cc75db4659e52d27914.jpg", "Класика", 4.9),
new Book("Тіньовий раб", "Guiltythree", "https://world-novel.fr/wp-content/uploads/2023/01/Shadow-Slave.jpg", "Авторська", 4.6),
new Book("451 градус за Фаренгейтом", "Рей Бредбері", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/FAHRENHEIT_451_by_Ray_Bradbury%2C_Corgi_1957._160_pages._Cover_by_John_Richards.jpg/1200px-FAHRENHEIT_451_by_Ray_Bradbury%2C_Corgi_1957._160_pages._Cover_by_John_Richards.jpg", "Класика", 4.9),
new Book("Лісова пісня", "Леся Українка", "https://dspu.edu.ua/biblioteka/wp-content/uploads/2021/02/7ea220f367bf6a0c1e92d60d113bbe2e.jpg", "Класика", 4.8),
new Book("Гамлет", "Вільям Шекспір", "https://cdn.kobo.com/book-images/5fc4252b-1c4f-40ef-9975-22982c94f12c/1200/1200/False/hamlet-prince-of-denmark-23.jpg", "Класика", 4.5),
new Book("Ательє чаклунських капелюхів", "Камоме Шірахама", "https://geekach.com.ua/content/images/43/659x886l99br0/atelie-chaklunskikh-kapelukhiv.-tom-1-47781456463893.webp", "Фантастика", 4.7),
new Book("Маленький принц", "Антуан де Сент-Екзюпері", "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img899_4_17.jpg", "Класика", 4.9),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Класика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Фантастика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Класика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Фантастика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Фантастика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Фантастика", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0),
new Book("Book Name", "Author Name", "https://wallpapercave.com/wp/wp10532908.jpg", "Авторська", 0.0)]

function filter(){
    thisbooks = [];
    let checkboxes = document.querySelectorAll('input[name="genre"]:checked');
    let filters = [];
    checkboxes.forEach((checkbox) => {
    filters.push(checkbox.value);
    });
    if(filters.length > 0){
        for(var i = 0; i < filters.length; i++){
            thisbooks = thisbooks.concat(books.filter(book => book.genre === filters[i]));
        }
    }
    else{
        thisbooks = books;
    }
    displayAll('BooksList', thisbooks);
}

function display(b, ulname, thisbooks){
    var ul = document.getElementById(ulname);
    if(b === 0){
        b = thisbooks.length;
    }   
    for(var i = 0; i < b; i++) {
        var li = document.createElement("li");
        li.innerHTML = '<a href=\"bookinfo.html?bookName='+thisbooks[i].name+'\"><div class=\"bookcon\"><img src=\"'+thisbooks[i].img+'\" alt="'+thisbooks[i].name+'"><div class="bookcap"><div class="name"><p><b>'+thisbooks[i].name+'</b></p> <p>'+thisbooks[i].author+'</p></div> <p class="rate"><b>'+thisbooks[i].rate+'</b></p></div class="bookcap"></div class="bookcon"></a>';
        ul.appendChild(li);
    } 
}

function displayPart(ulname, b){
    Clear(ulname);
    thisbooks = books;
    display(b, ulname, thisbooks);
}

function displayAll(ulname, thisbooks = []){
    Clear(ulname);
    if(thisbooks.length<=0){
        thisbooks = books;
    }
    if(window.location.search){
        var str = window.location.search
        var s = decodeURI(str.slice(str.indexOf('=') + 1));
        thisbooks = thisbooks.filter(book => book.name.toLowerCase().includes(s.toLowerCase()));
    }
    
    display(0, ulname, thisbooks);
}

function Sort(){
    books.sort((a, b) => b.rate - a.rate);
    displayAll('BooksList');
}

function Clear(ulname) {
    const ul = document.getElementById(ulname);
    Array.from(ul.children).forEach(child => child.remove());
}

function BookInfo(){
    var str = window.location.search
    var bookname = decodeURI(str.slice(str.indexOf('=') + 1));
    let thisbook = books.find(book => book.name === bookname);
    document.getElementById("bname").innerHTML = thisbook.name;
    document.getElementById("bauthor").innerHTML = thisbook.author;
    document.getElementById("brate").innerHTML = thisbook.rate;
    document.getElementById("bgenre").innerHTML = thisbook.genre;
    document.getElementById("bimg").src = thisbook.img;
}
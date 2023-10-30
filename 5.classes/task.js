class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 100; // Приватное свойство состояния с начальным значением 100
     this.type = null;
   }
 
   fix() {
     this.state *= 1.5;
   }
 
   set state(newState) {
     if (newState < 0) {
       this._state = 0;
     } else if (newState < 100) {
       this._state = newState;
     } else {
      this._state = 100;
     }
   }
 
   get state() {
     return this._state;
   }
 }
 

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount); // Вызываем конструктор родительского класса
      this.type = "magazine"; // Устанавливаем тип как "magazine"
    }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = "book";
     this.author = author;
   }
 }
 
 class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = "novel";
   }
 }
 
 class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = "fantastic";
   }
 }
 
 class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = "detective";
   }
}

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30){
         this.books.push (book);
      }
   }

   findBookBy(type, value) {
      const findResult = this.books.find((item) => item[type] === value);
      return findResult || null; // Возвращаем null, если книга не найдена
    }

    giveBookByName(bookName){
      const book = this.findBookBy("name", bookName);
       if (!book) return null;
      this.books = this.books.filter((item) => item.name !== bookName);
      return book;
    }
}

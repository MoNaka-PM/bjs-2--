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
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount);
     this.type = "book";
     this.author = author;
   }
 }
 
 class NovelBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author);
     this.type = "novel";
   }
 }
 
 class FantasticBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author);
     this.type = "fantastic";
   }
 }
 
 class DetectiveBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author);
     this.type = "detective";
   }
}

class Library {
   constructor(name, books) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30){
         this.books.push (book);
      }
   }

   findBookBy(type, value) {
      for (const book of this.books) {
        if (type === 'author' && book.author === value) {
          return book;
        }
        if (type === 'name' && book.name === value) {
          return book;
        }
        if (type === 'releaseDate' && book.releaseDate === value) {
          return book;
        }
      }
      return null; // Возвращаем null, если книга не найдена
    }

    giveBookByName(bookName){
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
           const book = this.books[i];
           this.books.splice(i, 1); // Удаляем книгу из массива
           return book; // Возвращаем книгу
         }
       }
       return null; // Возвращаем null, если книга не найдена
    }
}

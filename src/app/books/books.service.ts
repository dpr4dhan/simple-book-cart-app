import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks (){
    return [
      {
        name: "Clean Code",
        author: "Robert C. Martin",
        imageUrl: "https://bci.kinokuniya.com/jsp/images/book-img/97801/97801370/9780137081073.JPG",
        amount: 700
      },
      {
        name: "Pragmatic Programmer",
        author: "David Thomas",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBpGY0pLzYhfyynD9rK1AiEeznsM6BXQ27g&usqp=CAU",
        amount: 800
      },
      {
        name: "Angular 15",
        author: "Dhiraj Pradhan",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBpGY0pLzYhfyynD9rK1AiEeznsM6BXQ27g&usqp=CAU",
        amount: 1500
      }
    ];
  }
}

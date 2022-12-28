import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../../types/Book";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  isInCart: boolean = false;
  constructor(private cartService : CartService) {}

  @Input() book: Book = {} as Book;
  // @Output() emitBook = new EventEmitter<Book>()

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}

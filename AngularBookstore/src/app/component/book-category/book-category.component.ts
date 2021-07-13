import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookCategory } from '../../common/book-category';
import { Book } from '../../common/book';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.scss']
})
export class BookCategoryComponent implements OnInit {
  bookCategories: BookCategory[];

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  this.listBookCategories();
  }

  listBookCategories() {
    this._bookService.getBookCategory().subscribe(
      data => {
      this.bookCategories = data;
        console.log("Book categories", data);
      }
    );
  }

}

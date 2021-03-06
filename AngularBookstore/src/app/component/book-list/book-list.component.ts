import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../common/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;
  searchMode: boolean;
//   pageOfItems: Array<Book>;
//   pageSize: number = 2;

//new properties for server side paging
currentPage: number =  1;
pageSize: number = 2;
totalRecords: number = 0;


  constructor(private _bookService: BookService,
  private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
          this.listBooks();
    });
  }

//   pageClick(pageOfItems: Array<Book>) {
//     // Update the current page of items
//     this.pageOfItems = pageOfItems;
//   }

  listBooks() {

    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      //do search work
      this.handleSearchBooks();
    } else {
      //display books based on category
      this.handleListBooks();
    }

  }

  handleListBooks() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

      this._bookService.getBooks(this.currentCategoryId, this.currentPage - 1, this.pageSize)
      .subscribe(this.processPaginate());
  }

  handleSearchBooks() {
    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');

    this._bookService.searchBooks(keyword).subscribe (
      data => {
        this.books = data;
      });
  }

  updatePageSize(pageSize: number) {
//     this.pageSize = pageSize;
    this.listBooks();
  }

  processPaginate() {
    return data => {
    this.books = data._embedded.books;

    // page number starts from 1 index
    this.currentPage = data.page.number + 1;
    this.totalRecords = data.page.totalElements;
    this.pageSize = data.page.size;
    }
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { BookCategoryComponent } from './component/book-category/book-category.component';
import { SearchComponent } from './component/search/search.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
// import { JwPaginationComponent } from 'jw-angular-pagination';
// import { JwPaginationModule } from 'jw-angular-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponentComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
//     JwPaginationModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

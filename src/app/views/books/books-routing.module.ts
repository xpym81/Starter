import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const booksRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  }
];

// const booksRoutes: Routes = [
//   {
//     path: '',
//     component: BookComponent,
//     data: {
//       title: 'Books'
//     },
//     children: [
//       {
//         path: 'book-details/:id',
//         component: BookDetailComponent,
//         data: { title: 'Book Details' }
//       },
//       {
//         path: 'book-create',
//         component: BookCreateComponent,
//         data: { title: 'Create Book' }
//       },
//       {
//         path: 'book-edit/:id',
//         component: BookEditComponent,
//         data: { title: 'Edit Book' }
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const appRoutes: Routes=[

  {path:"home", component: HomeComponent},
  {path:"books", component: BookListComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
   {path:"**",component :PagenotFoundComponent},

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }

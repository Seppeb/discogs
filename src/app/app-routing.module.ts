import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionComponent} from './pages/collection/collection.component';
import {WantlistComponent} from './pages/wantlist/wantlist.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent,
  },
  {
    path: 'wantlist',
    component: WantlistComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

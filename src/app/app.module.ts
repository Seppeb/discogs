import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { WantlistComponent } from './pages/wantlist/wantlist.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    WantlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';import { AppComponent } from './app.component';
import { CreationFlashcardComponent } from './creation-flashcard/creation-flashcard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListFlashcardComponent } from './list-flashcard/list-flashcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationFlashcardComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    ListFlashcardComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

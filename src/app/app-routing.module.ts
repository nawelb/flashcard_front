import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import{ RouterModule} from '@angular/router'
import { CreationFlashcardComponent } from './creation-flashcard/creation-flashcard.component';
import { ListFlashcardComponent } from './list-flashcard/list-flashcard.component';


const routes: Routes = [
    {path : "newflashcard" , component: CreationFlashcardComponent},
    {path :"", component:ListFlashcardComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule { }
export { RouterModule };


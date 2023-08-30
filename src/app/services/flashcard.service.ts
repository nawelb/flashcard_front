import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Flashcard } from '../model/flashcard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  baseUrl:string=environment.baseUrl;
  createNewFlashcardUrl:string="/newflashcard";
  readUpdateDeleteFlashcards:string="/flashcards";
  flashcardByCategoryUrl:string="/flashcards/category";
  makeQuizz:string="/flashcards/quiz";
  
  constructor(private _http:HttpClient) { }

createNewFlashcard(flashcard:Flashcard){
  console.log("ICI SERVICE FLASHCARD : "+this.baseUrl+this.createNewFlashcardUrl + JSON.stringify(flashcard));
  return this._http.post<Flashcard>(this.baseUrl+this.createNewFlashcardUrl, flashcard, {responseType:'text' as 'json'} );
}

getAllFlashcards():Observable<Flashcard[]>{
  return this._http.get<Flashcard[]>(this.baseUrl+this.readUpdateDeleteFlashcards);
}

getFlashcardById(id:number):Observable<Flashcard>{
  return this._http.get<Flashcard>(this.baseUrl+this.readUpdateDeleteFlashcards+"/"+id);
}

updateFlashcard(id:number, flashcardUpdated:Flashcard):Observable<Flashcard>{
  return this._http.put<Flashcard>(this.baseUrl+this.readUpdateDeleteFlashcards+"/"+id, flashcardUpdated)
}

deleteFlashcard(id:number){
  return this._http.delete(this.baseUrl+this.readUpdateDeleteFlashcards+"/"+id);
}

getAllFlashcardByCategory(id:number):Observable<Flashcard[]>{
  return this._http.get<Flashcard[]>(this.baseUrl+this.flashcardByCategoryUrl+"/"+id);
}
getAllFlashcardByName(name:string):Observable<Flashcard[]>{
  return this._http.get<Flashcard[]>(this.baseUrl+this.flashcardByCategoryUrl+"/"+name);
}

makeFlashcardQuiz(cards:Flashcard[]):Observable<Flashcard[]>{
  return this._http.get<Flashcard[]>(this.baseUrl+this.makeQuizz);
}
}

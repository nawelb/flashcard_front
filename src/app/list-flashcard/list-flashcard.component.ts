import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../services/flashcard.service';
import { Flashcard } from '../model/flashcard.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-flashcard',
  templateUrl: './list-flashcard.component.html',
  styleUrls: ['./list-flashcard.component.css']
})
export class ListFlashcardComponent implements OnInit {
  flashcards:Flashcard[]=[];
  categories!: Category[];
  selectedCategory!:string;
  fullListCards!:Flashcard[];
   
  valuee!:string;
  constructor(private _flashcardService:FlashcardService, private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllFlashcards();
    this.getAllCategories();
    window.addEventListener("scroll", scrollFunction);
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe(
     (data) => {
        this.categories=data;
        console.log("get all categories : "+JSON.stringify(this.categories));
      }
    );
  }

  getAllFlashcards(){
    this._flashcardService.getAllFlashcards().subscribe(
      (data) => {
        this.fullListCards=data;
      this.flashcards=data;
      
    });
  }

  onSelectChange(event: any) {
    this.selectedCategory = event.target.value;
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    this.flashcards=this.fullListCards;
    let categoriie = this.selectedCategory;
    console.log("selectedCategory : "+this.selectedCategory);
    console.log("listFlashcards : "+this.flashcards);
    if (this.selectedCategory === '') {
      return this.flashcards // Afficher toutes les cartes si aucune option n'est sélectionnée
    } else {
   

    //this._flashcardService.getAllFlashcardByName(this.selectedCategory.name).subscribe((data)=>{console.log(this.selectedCategory)}) 
     return this.flashcards = this.flashcards.filter(card => card.category.name.includes(this.selectedCategory));
  }}

    getSelectedCategory(event: any){
    var button= <HTMLButtonElement>event.target;
    this.valuee = button.value;
    //console.log("VALUEE : "+this.valuee);
    //this.getAllFlashcardsByCategory();
     return this.valuee;
    //
    //this._categoryService.getCategoryByItsName("java").subscribe((data)=>{console.log(data)})
    //this.valuee=valuee;
    
    //getCategoryByName(this.valuee);
   
    /* let java = "java";
    getCategoryByName("java", this._categoryService); */
    /* if(valuee!= undefined){
      this._categoryService.getCategoryByName(java);
    }else{
      console.log("ELSE UNDEFINED");
    } */
    /* .subscribe(
      (data) => {
      this.selectedCategory=data;
      console.log(JSON.stringify(this.selectedCategory));
    }); */
    
    
    
/* let categories:Category[]=[];
    let selectedCategory: Category;
      
    await this.getAllCategories();

    this.categories.forEach(element=>  {
      if(element.name == valuee){
        this.selectedCategory=element;
      }}
      ) */

    /* this._categoryService.getAllCategories().subscribe(
        (data) => {
           data.forEach(element => {
            if(element.name == valuee){
              this.selectedCategory=element;
            }});
          this._flashcardService.getAllFlashcardByCategory(selectedCategory.categoryId).subscribe(
            (data) => {
              this.flashcards=data;
            }
          )
          }  
    ); */
  }


  getAllFlashcardsByCategory(){ 
    let name = this.valuee;
    let flashcards: Flashcard[];
    this._flashcardService.getAllFlashcardByName(name).subscribe((data)=>{ flashcards= data; console.log(data); console.log("CARDS : "+flashcards)})
  }


  deleteFlashcard(id:number){
    console.log("DELETE FLASHCARD ID : "+id);
    this._flashcardService.deleteFlashcard(id).subscribe(
      
      (data)=> {console.log("DELETED :" +data);
      this.getAllFlashcards();
  });
  }

}

function scrollFunction() {
  if (window.scrollY > 40 ) {
    document.getElementById("filter")?.classList.add('small-filter');
  }   else /* if (window.scrollY < 20 ) */ {
    document.getElementById("filter")?.classList.remove('small-filter'); 
  }  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flashcard } from '../model/flashcard.model';
import { CategoryService } from '../services/category.service';
import { FlashcardService } from '../services/flashcard.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-creation-flashcard',
  templateUrl: './creation-flashcard.component.html',
  styleUrls: ['./creation-flashcard.component.css']
})
export class CreationFlashcardComponent implements OnInit {
  form:any ={};
  newFlashcard!:Flashcard;
  categories!:Category[];
  category!:Category;
  searchText="";
  textCategory: any;
  categoryToSave!:Category;
  style:any={};
  constructor(private _categoryService:CategoryService, private _flashcardService:FlashcardService) { }

  ngOnInit(): void {
    
    this.getAllCategories();
    document.querySelectorAll("li");
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe(
      data => {
        this.categories=[];
        data.forEach(element => {
        this.categories.push(element);
      });
      }
    );
  }

  addTextToInput(c: Category) {
    this.categoryToSave=c;
    let element= <HTMLInputElement>document.querySelector("#search-text");
    if(element!=null) {
      element.value=this.categoryToSave.name
    }
  }

  createFlashcard(form:NgForm) :Flashcard {
    let element= <HTMLInputElement>document.querySelector("#search-text");
    let data = form.value;
   if (this.categoryToSave==null) {
    if (element!=null){
      this.categoryToSave= new Category(0, element.value);
    }else{
      console.log("Category could not be null !");
    }
   } 
   this.newFlashcard = new Flashcard( 0,data.question, data.answer, this.categoryToSave);

    let datas= this._flashcardService.createNewFlashcard(this.newFlashcard);
    datas.subscribe((data)=>this.newFlashcard);
    form.reset();
    return this.newFlashcard;
   
}


 /*     getCategoryId(name:string):Category{
      //let newcategory=new Category(this.category.id, this.category.name, this.category.flashcards);
      
      let newcategory:Category;
    
       this._categoryService.getCategoryByName(name).subscribe(
       data=> {
         this.category = new Category(data.id, data.name, data.flashcards);
        newcategory=this.category;
      }
    )
        return newcategory; 
  } */

  /* getCategory(name:string){
    let data = this._categoryService.getCategoryByName(name).subscribe(
         data=> {
          return <Category>{
            id: data.id,
            name: data.name
          };        
      }
    )

    console.log("DATAAAA "+ JSON.stringify(data))
  } */





myFilter() {
  // var input, filter, ul, li, a, i, txtValue;
   var input = (<HTMLInputElement>document.getElementById("myInput"));
   var filter = input.value.toLowerCase();
   var ul = document.getElementById("myUL");
   if(ul!= null){
     var li = ul.getElementsByTagName("li");
     for (let i = 0; i < li.length; i++) {
         var a = li[i].getElementsByTagName("a")[0];
         var  txtValue = a.textContent || a.innerText;
         if (txtValue.toLowerCase().indexOf(filter) > -1) {
             li[i].style.display = "";
         } else {
             li[i].style.display = "none";
         }
     }
   }
}


}



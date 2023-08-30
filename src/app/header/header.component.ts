import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    //var header =document.getElementById('header');
    
    
      window.addEventListener("scroll", scrollFunction)
    
 
  }

 
  
 /*   onScroll() {
    var y = window.scrollY;
    if (y > 10) {
      document.getElementById('header')?.classList.add('small');
    } else if (y < 10) {
      document.getElementById('header')?.classList.remove('small');
    }
  }  */
  /* scrollFunction() {
    if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header")?.classList.add('small');
    } else if (window.scrollY < 50 || document.documentElement.scrollTop < 50)  {
      document.getElementById("header")?.classList.remove('small');
    }
  }  */
  
// When the user scrolls down 50px from the top of the document, resize the header's font size
}



function scrollFunction() {

  if (window.scrollY > 40 ) {
    document.getElementById("header")?.classList.add('small-header');
    document.getElementById("brand-box")?.classList.add('small-brand-box');
    document.getElementById("brand")?.classList.add('small-brand');
    document.getElementById("text-box")?.classList.add('small-text-box');
    document.getElementById("heading-primary-main")?.classList.add('heading-primary-main-small');
    document.getElementById("heading-primary-sub")?.classList.add('heading-primary-sub-small');
    

  }   else /* if (window.scrollY < 20 ) */ {
    document.getElementById("header")?.classList.remove('small-header');
    document.getElementById("brand-box")?.classList.remove('small-brand-box');
    document.getElementById("brand")?.classList.remove('small-brand');
    document.getElementById("text-box")?.classList.remove('small-text-box');
    document.getElementById("heading-primary-main")?.classList.remove('heading-primary-main-small');
    document.getElementById("heading-primary-sub")?.classList.remove('heading-primary-sub-small');
  }  
}


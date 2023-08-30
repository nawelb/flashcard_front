import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string=environment.baseUrl;
  createCategory:string="/newcategory";
  readUpdateDeleteCategories:string="/categories";
  readCategoryByName:string="/categories/name"; 


  constructor(private _http:HttpClient) { }

  
  createNewCategory(category:Category){
    return this._http.post<Category>(this.baseUrl+this.createCategory,category);
  }

  getAllCategories():Observable<Category[]>{
    return this._http.get<Category[]>(this.baseUrl+this.readUpdateDeleteCategories);
  }

  getCategoryById(id:Number){
    return this._http.get<Category>(this.baseUrl+this.readUpdateDeleteCategories+"/"+id);
  }

  getCategoryByItsName(name:string):Observable<Category>{
    console.log("Get category by name service !")
    return this._http.get<Category>(this.baseUrl+this.readCategoryByName+"/"+name);
  }

  updateCategory(id:Number,category:Category):Observable<Category>{
    return this._http.put<Category>(this.baseUrl+this.readUpdateDeleteCategories+"/"+id, category);
  }

  deleteCategory(id:Number){
    return this._http.delete(this.baseUrl+this.readUpdateDeleteCategories+"/"+id);
  }
}

import { Category } from "./category.model";

export class Flashcard {
       constructor(
        public id:number,
        public question:string,
        public answer:string,
        public category:Category){ }
}

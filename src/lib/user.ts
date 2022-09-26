import {Task} from "./task";

export class User {
  name: string|null = "";
  tasks:Task[] = new Array<Task>;
  constructor(){
    this.name = prompt("Hello! Please enter your name.","");
    this.tasks= new Array<Task>;
  }
}

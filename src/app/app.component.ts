import { Component } from '@angular/core';
import { Task } from "../lib/task";
import { User } from "../lib/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  user:User = new User();
  tasks: Task[] = new Array<Task>;
  userList:User[] =new Array<User>;
  newTask(){
    let task:Task = new Task();
    this.user.tasks.push(task);
    this.saveUsers();
  }
     
  ngOnInit(){
    this.user = new User();
    this.loadUsers();
    this.findUser();
  }

  findUser(){
    for (let i = 0;i<this.userList.length;i++){
      if (this.userList[i].name==this.user.name){
          this.user = this.userList[i];
          return;
      }
    }
    this.userList.push(this.user);
    return;
  }
  
  loadUsers(){
    console.log("loading users");
    
    let loadedUserList = window.localStorage.getItem('userList')||"[]";
    if(JSON.parse(loadedUserList).length>0){
      this.userList = JSON.parse(loadedUserList);
    }
    console.log(loadedUserList); 
  }

  saveUsers(){
    console.log("saving users");
    let stringifiedUserList = JSON.stringify(this.userList);
    console.log(stringifiedUserList);
    window.localStorage.setItem("userList", stringifiedUserList);
  }
}


import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/todo-data-service.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;


  // todos = [
  //  new Todo(1, 'Learn to code', false, new Date()),
  //  new Todo(2, 'become an expert in Angular', false, new Date()),
  //  new Todo(3, 'visit and stay in Singapore', false, new Date())
  // ];

   constructor(private todoservice: TodoDataService, private router: Router ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  // tslint:disable-next-line: typedef
  refreshTodos() {
    this.todoservice.retrieveAllTodos('laymui').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  // tslint:disable-next-line: typedef
  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoservice.deleteTodo('laymui', id).subscribe(
      response =>  {
        console.log(response);
        this.message = `Delete if Todo ${id} succcesful!`;
        this.refreshTodos();
      }
    );
  }

  // tslint:disable-next-line: typedef
  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  // tslint:disable-next-line: typedef
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}

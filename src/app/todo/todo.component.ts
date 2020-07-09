import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from './../service/todo-data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

    // After the ngOnInit, it will start loading the todo.componment.html
    // At that point, the todo object may still be null
    // that's why todo.compoment html is giving TypeError: cannot read property 'description'
    // To fix this, pass in a default Todo object
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // Default
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('laymui', this.id).subscribe(data => this.todo = data);
    }
  }


  // tslint:disable-next-line: typedef
  saveTodo() {
    if (this.id === -1)
    {
      this.todoService.createTodo('laymui', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
    else {
    this.todoService.updateTodo('laymui', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }
    )
    }
  }
}

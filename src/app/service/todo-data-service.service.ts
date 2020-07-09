import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  // tslint:disable-next-line: typedef
  deleteTodo(username, id) {
    console.log(`Delete todos ${id}`);
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  // tslint:disable-next-line: typedef
  retrieveTodo(username, id) {
    console.log(`Get todos ${id}`);
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo);
  }

  createTodo(username, todo) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo);
  }

}

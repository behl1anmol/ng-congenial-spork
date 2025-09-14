import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // means this service is a singleton and can be injected anywhere in the application
  // alternative is to provide it in a specific module by using providers array in specific component or module
  // this way, the service will be available only within that component or module

})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}

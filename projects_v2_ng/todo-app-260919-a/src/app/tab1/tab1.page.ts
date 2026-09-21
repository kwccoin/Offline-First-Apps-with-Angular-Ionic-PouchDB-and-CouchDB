import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  todos: String[] = ['Buy groceries', 'Walk the dog', 'Read a book'];
  constructor() {}
  onAddTodo(newTodo: string) {

    console.log('Adding new todo:', newTodo);
    if (newTodo.trim() !== '') {
      this.todos.push(newTodo);
    }
  }
  onDeleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

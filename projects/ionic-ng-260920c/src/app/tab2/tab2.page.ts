import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}

  todos: string[] = ['a', 'b', 'c' ];

   //first declare variable for your input.
task:any;
pri:any;

post3(){
   console.log('task',this.task);
   console.log('pri',this.pri)
       if (this.task.trim() !== '') {
      this.todos.push(this.task.toString() + ' - ' + this.pri.toString());
    }
   } 

  onAddTodo1(newTodo: string) {
    console.log('Adding new todo:', newTodo);
    if (newTodo.trim() !== '') {
      this.todos.push(newTodo);
    }
  }

  onAddTodo2(firstNumber: any, secondNumber: any) { // use any instead of string
    // Implementation for adding todo
    
    console.log('Adding new todo with numbers:', firstNumber, secondNumber);
    const fNumber = parseFloat(firstNumber);
    const sNumber = parseFloat(secondNumber);
    const sum = fNumber + sNumber;
    alert(`The sum of ${fNumber} and ${sNumber} is: ${sum}`);   
       console.log('sum:', sum); 
    this.todos.push(`Sum of ${fNumber} and ${sNumber} is: ${sum}`);
    
  } 

}

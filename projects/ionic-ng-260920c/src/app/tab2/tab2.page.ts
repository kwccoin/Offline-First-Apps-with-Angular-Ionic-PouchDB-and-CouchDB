import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}

  onAddTodo(firstNumber: string, secondNumber: string) {
    // Implementation for adding todo
    console.log('Adding new todo with numbers:', firstNumber, secondNumber);
    const fNumber = parseFloat(firstNumber);
    const sNumber = parseFloat(secondNumber);
    const sum = fNumber + sNumber;
    alert(`The sum of ${fNumber} and ${sNumber} is: ${sum}`);   
       console.log('sum:', sum); 
  } 

}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

  onAddTodo(firstNumber) { //}, secondNumber) { // }: HTMLIonInputElement, secondNumber: HTMLIonInputElement) {
    // Implementation for adding todo
    // const firstNumValue = firstNumber;
    // const secondNumValue = secondNumber;
    // const sum = parseFloat(firstNumValue) + parseFloat(secondNumValue);
    // alert(`The sum of ${firstNumValue} and ${secondNumValue} is: ${sum}`);
    // console.log('Adding new todo with numbers:', firstNumValue.toString(), secondNumValue.toString());
    console.log('Adding new todo with numbers:', firstNumber); // , secondNumber);
  }

}

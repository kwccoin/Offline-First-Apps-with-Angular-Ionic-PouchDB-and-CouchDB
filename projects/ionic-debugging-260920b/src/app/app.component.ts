import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonInput } from '@ionic/angular';

// import { Component } from '@angular/core';
//import { IonInput } from '@ionic/angular/standalone'; // For modern Ionic standalone packages
// OR if using an older version: import { IonicModule } from '@ionic/angular';
/*
@Component({
  selector: 'app-your-component',
  standalone: true,
  imports: [IonInput], // <-- Add IonInput or IonicModule here
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.scss']
})
export class YourComponent { }
*/

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}

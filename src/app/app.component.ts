import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = "Angular";
  name : any;

  msgFromChild(data : any) {
    console.log(data);
    this.name = data;
  }

}

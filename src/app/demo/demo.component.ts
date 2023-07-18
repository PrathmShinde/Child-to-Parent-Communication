import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  @Output() msgFromChild: EventEmitter<any> = new EventEmitter();

  sendData() {
    this.msgFromChild.emit('Hello Prathm');
  }
}

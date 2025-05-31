import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RhzInputComponent } from './rhz-input/rhz-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule, RhzInputComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'rohoz-ui';

  defaultValue = 1232331113;

  inputChange($event: any) {
    console.log($event);
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RhzInputComponent } from './rhz-input/rhz-input.component';
import { CommonModule } from '@angular/common';
import { catchError, filter, from, interval, switchMap, take, tap, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, FormsModule, RhzInputComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'rohoz-ui';

  value: any;

  defaultValue = 1232333;
  log: any

  inputChange($event: any) {
    console.log($event);
    this.log = $event;
  }

  constructor(private http: HttpClient) {

  }
}

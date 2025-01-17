import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhz-input',
  standalone: true,
  templateUrl: './rhz-input.component.html',
  styleUrl: './rhz-input.component.less'
})
export class RhzInputComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement> = this.elementRef;

  _defaultValue: string | number = '';

  @Input() validationText = ''
  @Input() label = ''

  @Input() set defaultValue(val: any) {
    this._defaultValue = val;
  }

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.input.nativeElement.addEventListener("input", (e: any) => {
      this.valueChange.emit(this.input.nativeElement.value);
    })
  }
}

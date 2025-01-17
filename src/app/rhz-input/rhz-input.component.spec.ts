import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhzInputComponent } from './rhz-input.component';

describe('ZInputComponent', () => {
  let component: RhzInputComponent;
  let fixture: ComponentFixture<RhzInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhzInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhzInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

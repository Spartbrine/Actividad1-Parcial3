import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqDosComponent } from './maq-dos.component';

describe('MaqDosComponent', () => {
  let component: MaqDosComponent;
  let fixture: ComponentFixture<MaqDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaqDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaqDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

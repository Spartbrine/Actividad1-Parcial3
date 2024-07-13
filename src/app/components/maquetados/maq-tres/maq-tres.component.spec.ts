import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqTresComponent } from './maq-tres.component';

describe('MaqTresComponent', () => {
  let component: MaqTresComponent;
  let fixture: ComponentFixture<MaqTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaqTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaqTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

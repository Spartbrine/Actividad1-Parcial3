import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqCuatroComponent } from './maq-cuatro.component';

describe('MaqCuatroComponent', () => {
  let component: MaqCuatroComponent;
  let fixture: ComponentFixture<MaqCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaqCuatroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaqCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

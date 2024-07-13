import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqUnoComponent } from './maq-uno.component';

describe('MaqUnoComponent', () => {
  let component: MaqUnoComponent;
  let fixture: ComponentFixture<MaqUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaqUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaqUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

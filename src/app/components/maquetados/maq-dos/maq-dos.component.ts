import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-maq-dos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './maq-dos.component.html',
  styleUrl: './maq-dos.component.scss'
})
export class MaqDosComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      url: [''],
      date: [''],
      time: [''],
      datetime: [''],
      month: [''],
      week: [''],
      number: [0],
      tel: [''],
      search: [''],
      color: ['#000000']
    });
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}

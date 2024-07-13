import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'maquetado-uno',
    loadComponent: ()=> import('./components/maquetados/maq-uno/maq-uno.component').then(m=>m.MaqUnoComponent)
  },
  {
    path:'maquetado-dos',
    loadComponent: ()=> import('./components/maquetados/maq-dos/maq-dos.component').then(m=>m.MaqDosComponent)
  },
  {
    path:'maquetado-tres',
    loadComponent: ()=> import('./components/maquetados/maq-tres/maq-tres.component').then(m=>m.MaqTresComponent)
  },
  {
    path:'maquetado-cuatro',
    loadComponent: ()=> import('./components/maquetados/maq-cuatro/maq-cuatro.component').then(m=>m.MaqCuatroComponent)
  }
];

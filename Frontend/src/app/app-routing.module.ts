import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'finalizados',
    component: FinalizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

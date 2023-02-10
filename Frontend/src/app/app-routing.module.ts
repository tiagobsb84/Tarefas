import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { SectionComponent } from './components/section/section.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'finalizados',
    component: FinalizadosComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

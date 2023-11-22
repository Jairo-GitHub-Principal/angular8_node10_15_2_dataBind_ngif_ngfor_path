import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

const routes: Routes = [
  {path: 'primeiro', component: PrimeiroComponent},
  {path: 'segundo', component: SegundoComponent},
  {path: 'forif', component: NgIfNgForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

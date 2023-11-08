import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
  {path: "SecondCompComponent", component: SecondCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

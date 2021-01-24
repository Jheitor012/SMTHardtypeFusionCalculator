import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../main-demons-page/main-demons-page.module').then(
            (e) => e.MainDemonsPageModule
          ),
      },
      {
        path: 'Details',
        loadChildren: () =>
          import('../detail/detail.module').then((e) => e.DetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

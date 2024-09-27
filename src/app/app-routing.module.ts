import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./Paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'imput',
    loadChildren: () => import('./Paginas/imput/imput.module').then( m => m.ImputPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./Paginas/carta/carta.module').then( m => m.CartaPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./Paginas/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./Paginas/selection/selection.module').then( m => m.SelectionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

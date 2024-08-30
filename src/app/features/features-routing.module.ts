import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
  },
  {
    path: '',
    // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}


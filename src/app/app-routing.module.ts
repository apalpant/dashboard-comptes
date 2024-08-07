import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from "./core/services/authentication-service/authentication.service";

export const AuthGuard = () => {
  const auth = inject(AuthenticationService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    console.log('go to login')
    router.navigateByUrl('/login', {skipLocationChange: true}).then(r => {
    })
    return false
  }
  return true
}

const routes: Routes = [

  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


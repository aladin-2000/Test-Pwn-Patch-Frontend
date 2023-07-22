import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminCRUDComponent } from './admin-crud/admin-crud.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';





const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin-crud', component: AdminCRUDComponent },
  { path: 'normal-user', component: NormalUserComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },  // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

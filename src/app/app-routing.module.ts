import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {
    path: "",
    component: TopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "help",
    component: HelpComponent
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

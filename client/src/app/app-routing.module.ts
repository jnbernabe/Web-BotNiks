import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './partials/table/table.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  //{ path:'',redirectTo:'/login', pathMatch:'full'},
  { path: 'admin', loadChildren:()=> import('./modules/admin/admin.module').then((m) =>m.AdminModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'table',
    component: TableComponent,
    data: { title: 'Incidents' },
    //canActivate: [AuthGuard],
  },
  {
    path: 'create-incident',
    canActivate:[AuthGuard],
    component: CreateIncidentComponent,
    data: { title: 'Create Incident' },
   
  },
  {
    path: 'create-incident/:id',
    component: CreateIncidentComponent,
    data: { title: 'Create Incident' },
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

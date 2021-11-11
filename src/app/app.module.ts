import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { FormComponent } from './partials/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './partials/table/table.component';
import { ModelModule } from './model/model.module';
import { BasePageComponent } from './partials/basepage/basepage.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    CreateIncidentComponent,
    BasePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

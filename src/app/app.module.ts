import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
import { AppComponent } from './app.component';  
import { HomeComponent } from './home/home.component';  
import { HeaderComponent } from './ui/header/header.component';  
import { FooterComponent } from './ui/footer/footer.component';  
import { LayoutComponent } from './ui/layout/layout.component';  
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';  
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';  
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';  
import { HttpClientModule } from '@angular/common/http';  
import { routes } from './router-config';  
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { EmployeeData } from './employee/employee-data';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    HomeComponent,  
    HeaderComponent,  
    FooterComponent,  
    LayoutComponent,  
    EmployeeListComponent,  
    EmployeeEditComponent,  
    EmployeeDetailComponent  
  ],  
  imports: [  
    BrowserModule,  
    ReactiveFormsModule,  
    FormsModule,  
    RouterModule,  
    HttpClientModule,  
    RouterModule.forRoot(routes),  
    InMemoryWebApiModule.forRoot(EmployeeData),   
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
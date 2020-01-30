import { Routes } from '@angular/router';  
import { HomeComponent } from './home/home.component';  
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';  
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';  
import { EmployeeEditGuard } from './employee/employee-edit.guard';  
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';  
  
export const routes: Routes = [  
    {  
        path: 'home',  
        component: HomeComponent  
    },  
    {  
        path: 'employees',  
        component: EmployeeListComponent  
    },  
    {  
        path: 'employees/:id',  
        component: EmployeeDetailComponent  
    },  
    {  
        path: 'employees/:id/edit',  
        canDeactivate: [EmployeeEditGuard],  
        component: EmployeeEditComponent  
    },  
    {  
        path: '',  
        redirectTo: 'home',  
        pathMatch: 'full'  
    },  
    {  
        path: '**',  
        redirectTo: 'home',  
        pathMatch: 'full'  
    }  
];
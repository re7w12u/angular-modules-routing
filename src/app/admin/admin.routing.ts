import { NgModule } from "@angular/core";
import {  Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { AdminComponent} from './admin/admin.component';
import { ManageUsersComponent } from "./manage-users/manage-users.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'manage-users', component: ManageUsersComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
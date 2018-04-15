import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, AdminComponent, ManageUsersComponent]
})
export class AdminModule { }

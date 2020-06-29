import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AuthComponent } from './auth/auth.component';
import { PanelGuard } from './guards/panel.guard';
import { AddNewComponent } from './panel/add-new/add-new.component';
import { ListAllComponent } from './panel/list-all/list-all.component';
import { EditRemoveComponent } from './panel/edit-remove/edit-remove.component';
import { ListOrdersComponent } from './panel/list-orders/list-orders.component';
import { AddCategoryComponent } from './panel/add-category/add-category.component';


const routes: Routes = [
  { path:'',component: AuthComponent },
  { path:'panel',component:PanelComponent,canActivate:[PanelGuard],children:[
    { path:'Add-New-Product',component:AddNewComponent },
    { path:'List-All-Products',component:ListAllComponent },
    { path:'products/:id',component:EditRemoveComponent },
    { path:'List-All-Orders',component:ListOrdersComponent },
    { path:'Add-New-Category',component:AddCategoryComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

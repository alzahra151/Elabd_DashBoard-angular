import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OrderComponent } from './components/order/order.component';
import { ProductChartComponent } from './components/product-chart/product-chart.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingProductComponent } from './components/setting-product/setting-product.component';
import { SideOffcanvasComponent } from './components/side-offcanvas/side-offcanvas.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {UpdateUserProfileComponent} from './components/update-user-profile/update-user-profile.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginGuard } from './gaurds/login.guard';

const routes: Routes = [
 
  {path:"" ,component:MainLayoutComponent,

  children:[
    {path:"" ,component:ProductChartComponent,canActivate:[AuthGuard]},
    {path:"home" ,component:ProductChartComponent, canActivate:[AuthGuard]},
    {path:"products" ,component:AddProductComponent, canActivate:[AuthGuard]},
    {path:"settingProduct" ,component:SettingProductComponent,  canActivate:[AuthGuard]},
    {path:"products Info" ,component:ProductsComponent, canActivate:[AuthGuard]},
    {path:"users" ,component:UsersComponent,  canActivate:[AuthGuard]},
    {path:"AddUser" ,component:AddUserComponent,  canActivate:[AuthGuard]},
     {path:"orders" ,component:OrderComponent,  canActivate:[AuthGuard]},
     {path:"userProfile" ,component:UserProfileComponent,  canActivate:[AuthGuard]},
    //  {path:"sideoff" ,component:SideOffcanvasComponent,  canActivate:[AuthGuard]},
    {path:"userinfo" ,component:UserStatusComponent,  canActivate:[AuthGuard]},
    {path:"updateProfile" ,component:UpdateUserProfileComponent,  canActivate:[AuthGuard]},
    {path:"productDetails" ,component:ProductDetailsComponent,  canActivate:[AuthGuard]},

  ]
},
 {path:"login" ,component:LoginComponent ,canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

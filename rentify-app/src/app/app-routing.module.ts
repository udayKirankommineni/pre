import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { PostPropertyComponent } from './post-property/post-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent },
  { path: 'buyer-dashboard', component: BuyerDashboardComponent },
  { path: 'post-property', component: PostPropertyComponent },
  { path: 'update-property/:id', component: UpdatePropertyComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

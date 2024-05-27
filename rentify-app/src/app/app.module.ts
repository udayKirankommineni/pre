import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { PostPropertyComponent } from './post-property/post-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    PostPropertyComponent,
    UpdatePropertyComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

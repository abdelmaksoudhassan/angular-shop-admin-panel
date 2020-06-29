import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { PanelComponent } from './panel/panel.component';
import { AuthComponent } from './auth/auth.component';
import { SideNavComponent } from './panel/side-nav/side-nav.component';
import { AddNewComponent } from './panel/add-new/add-new.component';
import { ListAllComponent } from './panel/list-all/list-all.component';
import { CardComponent } from './panel/card/card.component';
import { authInterceptor } from './interceptors/auth-interceptor';
import { EditRemoveComponent } from './panel/edit-remove/edit-remove.component';
import { ListOrdersComponent } from './panel/list-orders/list-orders.component';
import { OrderDetailsComponent } from './panel/list-orders/order-details/order-details.component';
import { AddCategoryComponent } from './panel/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PanelComponent,
    AuthComponent,
    SideNavComponent,
    AddNewComponent,
    ListAllComponent,
    CardComponent,
    EditRemoveComponent,
    ListOrdersComponent,
    OrderDetailsComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:authInterceptor , multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

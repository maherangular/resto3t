import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { UserService } from './services/user.service';
import { DishService } from './services/dish.service';
import { baseURL } from 'src/shared/baseURL';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    FlexLayoutModule ,
    MatToolbarModule ,
    MatButtonModule ,
    MatListModule,
    MatDialogModule,
    HttpClientModule ,
    FormsModule ,
    MatInputModule
  ],
  providers: [DishService, LeaderService, PromotionService, UserService ,
                {provide: 'baseURL' , useValue: baseURL }],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

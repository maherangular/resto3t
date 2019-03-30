import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { baseURL } from 'src/shared/baseURL';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { UserService } from './services/user.service';
import { DishdetailComponent } from './dishdetail/dishdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    DishdetailComponent

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
    MatInputModule ,
    MatProgressSpinnerModule ,
    MatCardModule ,
    MatGridListModule
  ],
  providers: [DishService, LeaderService, PromotionService, UserService ,
                {provide: 'baseURL' , useValue: baseURL }],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

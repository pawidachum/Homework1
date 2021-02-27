import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SearchBarComponent } from './SearchBar/searchBar.component';
import { TopBannerComponent } from './TopBanner/topBanner.component';
import { CategoryMenuComponent } from './CategoryMenu/categoryMenu.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    TopBannerComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

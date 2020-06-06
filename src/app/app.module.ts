import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //step1
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ColorDirective } from './color.directive';
import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

//step2 create different routes.
let routes : Routes= [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent,children:[
    {
      path:'forgotpassword',component:ForgotPasswordComponent
    }
  ]},
  {path: 'register', component: RegisterComponent},
  { path: 'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ColorDirective,
    AboutComponent,
    ForgotPasswordComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),   //step3 Relate routes with RouterModule by using method called forRoot
  FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

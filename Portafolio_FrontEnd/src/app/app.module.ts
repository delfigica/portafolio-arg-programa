import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { EducationComponent } from './views/education/education.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { LoginComponent } from './views/login/login.component';
import { ProyectComponent } from './views/proyect/proyect.component';
import { SkillComponent } from './views/skill/skill.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponentComponent } from './components/education-component/education-component.component';
import { ExperienceComponentComponent } from './components/experience-component/experience-component.component';
import { ProyectComponentComponent } from './components/proyect-component/proyect-component.component';
import { SkillComponentComponent } from './components/skill-component/skill-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EducationComponent,
    AboutMeComponent,
    ExperienceComponent,
    LoginComponent,
    ProyectComponent,
    SkillComponent,
    LoginFormComponent,
    NavbarComponent,
    EducationComponentComponent,
    ExperienceComponentComponent,
    ProyectComponentComponent,
    SkillComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'iniciar-sesion', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

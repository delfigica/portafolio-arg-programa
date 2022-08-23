import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { EditComponent } from './views/edit/edit.component';
import { AboutMeFormComponent } from './views/about-me-form/about-me-form.component';
import { ExperienceFormComponent } from './views/experience-form/experience-form.component';
import { EducationFormComponent } from './views/education-form/education-form.component';
import { SkillFormComponent } from './views/skill-form/skill-form.component';

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
    SkillComponentComponent,
    EditComponent,
    AboutMeFormComponent,
    ExperienceFormComponent,
    EducationFormComponent,
    SkillFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'iniciar-sesion', component: LoginComponent },
      { path: 'admin/edit', component: EditComponent },
      { path: 'admin/edit/about-me', component: AboutMeFormComponent },
      { path: 'admin/edit/add/experience', component: ExperienceFormComponent },
      {
        path: 'admin/edit/experience/:experienceId',
        component: ExperienceFormComponent,
      },
      { path: 'admin/edit/add/education', component: EducationFormComponent },
      {
        path: 'admin/edit/education/:educationId',
        component: EducationFormComponent,
      },
      { path: 'admin/edit/add/skill', component: SkillFormComponent },
      { path: 'admin/edit/skill/:skillId', component: SkillFormComponent }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { ProyectFormComponent } from './views/proyect-form/proyect-form.component';
import { TecnologyFormComponent } from './views/tecnology-form/tecnology-form.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';

export function playerFactory(): any {  
  return import('lottie-web');
}
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
    ProyectFormComponent,
    TecnologyFormComponent,
    NavbarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }), 
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        ...canActivate(() => redirectLoggedInTo(['admin/edit'])),
      },
      {
        path: 'iniciar-sesion',
        component: LoginComponent,
        ...canActivate(() => redirectLoggedInTo(['admin/edit'])),
      },
      {
        path: 'admin/edit',
        component: EditComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/about-me',
        component: AboutMeFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/add/experience',
        component: ExperienceFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/experience/:experienceId',
        component: ExperienceFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/add/education',
        component: EducationFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/education/:educationId',
        component: EducationFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/add/skill',
        component: SkillFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/skill/:skillId',
        component: SkillFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/add/proyect',
        component: ProyectFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
      {
        path: 'admin/edit/proyect/:proyectId',
        component: ProyectFormComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
      },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}

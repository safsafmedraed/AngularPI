import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {LoginentrepriseComponent} from '../../pages/loginentreprise/loginentreprise.component';
import {RedirecttologinComponent} from '../../pages/redirecttologin/redirecttologin.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    {path: 'loginE',          component: LoginentrepriseComponent},
    {path: 'choice',          component: RedirecttologinComponent},
];

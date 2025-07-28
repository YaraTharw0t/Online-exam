import { Routes } from '@angular/router';
import { LoginComponent } from '../core/pages/login/login.component';

export const routes: Routes = [

    {path:'',redirectTo:'authlayout',pathMatch:'full'},

    {
        path: 'authlayout', loadComponent:()=> import('../core/layout/authlayout/authlayout.component').then(c=> c.AuthlayoutComponent),
        children:[

            {
                path:'', redirectTo:'login' ,pathMatch:'full'
            },
            {
                path:'login', loadComponent:()=> import('../core/pages/login/login.component').then(c=> c.LoginComponent)
            },
            {
                path:'register', loadComponent:()=> import('../core/pages/register/register.component').then(c=> c.RegisterComponent)
            },
            {
                path:'revoverpassword', loadComponent:()=> import('../core/pages/recoverpassword/recoverpassword.component').then(c=> c.RecoverpasswordComponent)
            }
        ]
    }
];

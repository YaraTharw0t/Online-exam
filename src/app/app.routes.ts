import { Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [

    // {path:'', redirectTo:'blanklayout' ,pathMatch:'full'},

    //   {path:'blanklayout' , loadComponent:()=>import('../feature/layout/blanklayout/blanklayout.component').then(c=>c.BlanklayoutComponent),
    //     canActivate:[authGuard],
    //     title:'blanklayout',
    //     children :[
    //         {path:'', redirectTo:'dashboard', pathMatch:'full'}
    //         ,
            
    //         {
    //         path:'dashboard' , loadComponent:()=>import('../feature/pages/dashboard/dashboard.component').then(c=>c.DashboardComponent),
    //                 title:'Dashboard',

    //     },
    //         {
    //         path:'selectdiploma' , loadComponent:()=>import('../feature/pages/selectdiploma/selectdiploma.component').then(c=>c.SelectdiplomaComponent),
    //                 title:'Selectdiploma',

    //     },
    
    
    // ]

    // },

    {path:'',redirectTo:'authlayout',pathMatch:'full'},

    {
        path: 'authlayout', loadComponent:()=> import('../core/layout/authlayout/authlayout.component').then(c=> c.AuthlayoutComponent),
        children:[

            {
                path:'', redirectTo:'login' ,pathMatch:'full'
            },
            {
                path:'login', loadComponent:()=> import('../core/pages/login/login.component').then(c=> c.LoginComponent),
                title:'login'
            },
            {
                path:'register', loadComponent:()=> import('../core/pages/register/register.component').then(c=> c.RegisterComponent),
                title:'register'
            },
            {
                path:'recoverpassword', loadComponent:()=> import('../core/pages/recoverpassword/recoverpassword.component').then(c=> c.RecoverpasswordComponent),
                title:'recoverpassword'
            }
        ]
    },
  
];

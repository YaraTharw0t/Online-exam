import { Routes } from '@angular/router';
import { authGuard } from '../shared/Guards/auth.guard';

export const routes: Routes = [


    {path:'', redirectTo:'mainlayout',pathMatch:'full'},

      {path:'mainlayout' , loadComponent:()=>import('../feature/layouts/mainlayout/mainlayout.component').then(c=>c.MainlayoutComponent),
        canActivate:[authGuard],
        title:'mainlayout',
        children :[
            {path:'', redirectTo:'dashboard', pathMatch:'full'}
            ,
            
            {
            path:'dashboard' , loadComponent:()=>import('../feature/pages/dashboard/dashboard.component').then(c=>c.DashboardComponent),
                    title:'Dashboard/Subjects',

        },
            {
            path:'exams' , loadComponent:()=>import('../feature/pages/exams/exams.component').then(c=>c.ExamsComponent),
                    title:'exams',

        },
    
    
    ]

    },

    // {path:'',redirectTo:'authlayout',pathMatch:'full'},

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

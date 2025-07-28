import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimationsAsync}from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura'
import { BASE_URL } from '../../projects/auth/src/lib/baseurl';


export const appConfig: ApplicationConfig = {
  
  providers: [

     provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme:{
        preset :Aura
      }
    }),
    


    
    {
      provide:BASE_URL,
      useValue :'https://exam.elevateegy.com/'
    },
    
    
    
    
    
    
    
    
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 

   
   
  
  
  
  ]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimationsAsync}from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { myHTTPInterceptor } from '../shared/interceptors/my-http.interceptor';
import { BASE_URL } from 'auth';
import { env } from '../enviroment/env';




export const appConfig: ApplicationConfig = {
  
  providers: [ 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
        provideHttpClient(withFetch(),
      withInterceptors([myHTTPInterceptor])
    ),
     provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme:{
        preset :Aura
      }
    }),
    


    
    {
      provide:BASE_URL,
      useValue :env.apiurl
    },
    
    
  ]
};

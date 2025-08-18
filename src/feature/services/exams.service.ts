import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Exams } from '../../shared/interfaces/exams';
import { BASE_URL } from 'auth';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {


_httpClient = inject(HttpClient)

   _base_url =inject(BASE_URL)


GetAllExams():Observable<Exams>{

 return  this._httpClient.get<Exams>(this._base_url+'/exams').pipe(map(res=>res))
}


}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'auth';
import { map, Observable } from 'rxjs';
import { Subject, Subjects } from '../../shared/interfaces/subjects';
import { Exams } from '../../shared/interfaces/exams';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


 _httpClient = inject(HttpClient)
  _bASE_URL =inject(BASE_URL)




  Getallsub():Observable<Subjects>{

    return this._httpClient.get<Subjects>(this._bASE_URL+'/subjects').pipe(map(res=>res))

  }

  Subsuject(subjectId:string):Observable<Exams>{

    //Query Parameter

    const param = new HttpParams().set('subject',subjectId)

    return this._httpClient.get<Exams>(this._bASE_URL+ `/exams`,{params:param} ).pipe(map(res=>res))
  }

}





import { Observable } from "rxjs";

export abstract class autthapi{
        abstract signup(data:any):Observable<any>

    abstract Login(data:any):Observable<any>
}
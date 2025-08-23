import { Subject, Subjects } from './../../../shared/interfaces/subjects';
import { SubjectService } from './../../services/subject.service';
import { Component, inject } from '@angular/core';
import {ActivatedRoute, RouterLink  } from '@angular/router';
import { Exam } from '../../../shared/interfaces/exams';

@Component({
  selector: 'app-subsubject',
  imports: [RouterLink],
  templateUrl: './subsubject.component.html',
  styleUrl: './subsubject.component.scss'
})
export class SubsubjectComponent {




  exams :Exam[]=[]

  // object for save imges is empty bec in method to compelete
    private subjectsMap :{[key:string]:Subject} ={}

      _subjectService=inject(SubjectService)
      
    // to use id in url 
     _route= inject(ActivatedRoute)



ngOnInit(): void {
this.Getsubsubject()
  
}


  Getsubsubject(){
    // 
    this._subjectService.Getallsub().subscribe((res: Subjects) => {
      const arrysub :Subject[] = res.subjects
      for (const Subject of arrysub){
        this.subjectsMap[Subject._id] = Subject;

      }

      //use navigatedroute id from url
  const subjectId = this._route.snapshot.paramMap.get('subjectId')

    if(subjectId){
      this._subjectService.Subsuject(subjectId).subscribe({
        next:(res)=>{
          console.log(res)
          this.exams = res.exams

        }
      })
    }



    })







  }


//funtion for use imges not use html
 
  getSubImg (subjectId:string){


    const Subject  =this.subjectsMap[subjectId]

    if(Subject.icon ){

        return Subject.icon
    }

    else{
      return '../../../../public/front-end.jpg'

    }


  }

}

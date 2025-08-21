import { Subjects } from './../../../shared/interfaces/subjects';
import { SubjectService } from './../../services/subject.service';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Subject } from '../../../shared/interfaces/subjects';
import { SlicePipe } from '@angular/common';
import { Exam } from '../../../shared/interfaces/exams';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SlicePipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



  _subjectService= inject(SubjectService)

  _changeDetectorRef =inject(ChangeDetectorRef)

  Subjects: Subject[]=[]
 initlimit :number = 6
 limit :number = this.initlimit

  ngOnInit(): void {
  this. getallSubject()
  }




  getallSubject(){
    this._subjectService.Getallsub().subscribe({
      next:(res)=>{
          console.log(res)
          this.Subjects = res.subjects

        
      },

      error:(err)=>{
        console.log(err)

      }
    })

  }




  ViewAll (){
    if(this.limit=== this.initlimit){
    this.limit = this.Subjects.length

    }
    else{
      this.limit = this.initlimit
    }
    console.log(this.limit)
    this._changeDetectorRef.detectChanges()

  }




}

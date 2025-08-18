import { SubjectService } from './../../services/subject.service';
import { ExamsService } from './../../services/exams.service';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Subject } from '../../../shared/interfaces/subjects';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [SlicePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  _examsService = inject(ExamsService)

  _subjectService= inject(SubjectService)

  _changeDetectorRef =inject(ChangeDetectorRef)

  subject: Subject[]=[]
 initlimit :number = 6
 limit :number = this.initlimit

  ngOnInit(): void {
  this. getallSubject()
  }




  getallSubject(){
    this._subjectService.Getallsub().subscribe({
      next:(res)=>{
          console.log(res)
          this.subject = res.subjects

        
      },

      error:(err)=>{
        console.log(err)

      }
    })

  }




  ViewAll (){
    if(this.limit=== this.initlimit){
    this.limit = this.subject.length

    }
    else{
      this.limit = this.initlimit
    }
    console.log(this.limit)
    this._changeDetectorRef.detectChanges()

  }
}

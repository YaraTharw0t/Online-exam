import { Component, input, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';


@Component({
  selector: 'app-err-msg',
  imports: [Message],
  templateUrl: './err-msg.component.html',
  styleUrl: './err-msg.component.scss'
})
export class ErrMsgComponent {


  @Input() control:AbstractControl | null = null;
  @Input() patternmsg :string ='incorrect format'
}

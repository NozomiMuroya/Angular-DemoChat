import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @ViewChild(FormGroupDirective) myForm;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private snackBer:  MatSnackBar
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(20),
      ]]
    });
  }

  createRoom() {
    if (this.form.valid) {
      this.chatService.createRoom(this.form.value.name).then(() => {
        this.form.reset();
        this.myForm.resetForm();
        this.snackBer.open('ルームを作成しました', null, {
          duration: 2000
        });
      });
    }
  }
}

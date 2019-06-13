import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  name = '';
  status = '';
  @Output() accountCreated = new EventEmitter<{name:string,status:string}>();
  constructor() { }

  ngOnInit() {
  }

  createAccount(){
    this.accountCreated.emit({
      name:this.name,
      status:this.status
    })
  }
}

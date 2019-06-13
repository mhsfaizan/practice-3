import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account:{name:string,status:string}
  @Input() id:number;
  @Output() updateAccount = new EventEmitter<{id:number,status:string}>();
  constructor() { }

  ngOnInit() {
  }
  setTo(status){
    this.updateAccount.emit({
      id:this.id,
      status:status
    });
  }
}

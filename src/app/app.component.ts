import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { AccountService } from './account.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [LogService,AccountService]
})
export class AppComponent implements OnInit {
	accounts = [];
	logs = [];
	ngOnInit(){
		this.accounts = this._accountSer.getAccounts();
	}
	constructor(private _logSer: LogService,private _accountSer:AccountService) {}
	accountCreated(data: { name: string, status: string }) {
		if (data.name != "" || data.status != "") {
			this._logSer.loggAccounts("accounts is created with " + data.status + " status");
			this._accountSer.createAccount(data);
		}
	}
	update(data) {
		this._logSer.loggAccounts("accounts is updated with " + data.status + " status");
		this._accountSer.update(data);
	}
	getLogs() {
		this.logs = this._logSer.getLogs();
	}
	clearLog(){
		this.logs = [];
	}
}

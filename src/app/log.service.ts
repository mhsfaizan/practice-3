export class LogService {
    logs = [];
    loggAccounts(status: string) {
        this.logs.push(status);
    }
    getLogs() {
        return this.logs;
    }
}
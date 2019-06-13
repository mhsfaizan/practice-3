export class AccountService {
    accounts = [
        {
            name: 'account1',
            status: 'active'
        },
        {
            name: 'account2',
            status: 'inactive'
        }
    ];
    createAccount(data: { name: string, status: string }) {
        this.accounts.push(data);
    }
    update(data){
        this.accounts[data.id].status = data.status;
    }
    getAccounts(){
        return this.accounts;
    }
}
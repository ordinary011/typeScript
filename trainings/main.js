// створитти масив імен
// створити масив прикметників
// створити функцію яка буде з даних масивів вибирати радномні значення
// конкатинуватиме і повертатиме це значення (Golden Rick, Big Rom...)
var Bank = /** @class */ (function () {
    function Bank(bankName, Cash, Clients) {
        this.bankName = bankName;
        this.Cash = Cash;
        this.Clients = Clients;
    }
    Bank.prototype.addCash = function (num) {
        this.Cash += num;
    };
    Bank.prototype.subtractCash = function (num) {
        this.Cash -= num;
    };
    Bank.prototype.addUser = function (user) {
        this.Clients.push(user);
    };
    Bank.prototype.findUser = function (clientName) {
        return this.Clients.find(function (user) { return user.name === clientName; });
    };
    return Bank;
}());
var privat = new Bank('privat', 100000, []);
privat.addCash(1);
privat.subtractCash(1000);
privat.addUser({ name: 'bob', surname: 'jiji', age: 20, cash: 5000 });
privat.addUser({ name: 'mimi', surname: 'bibi', age: 30, cash: 10000 });
privat.findUser('bob');

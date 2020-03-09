// створитти масив імен
// створити масив прикметників
// створити функцію яка буде з даних масивів вибирати радномні значення
// конкатинуватиме і повертатиме це значення (Golden Rick, Big Rom...)

// let names: string[] = ['Johnny', 'Billy', 'Bobby', 'King', 'Lion'];
// let adjectives: string[] = ['Fast', 'Strong', 'Yellow', 'Tricky', 'Beautiful'];

// function concat(names: string[], adjectives: string[]):string{
//     let random = Math.floor(Math.random() * names.length);
//     return `${adjectives[random]} ${names[random]}`
// }

// console.log(concat(names, adjectives));

// ! =============================================
// ! =============================================

// створити інтерфейс Client(name,surname,age,cash)

// створити клас Bank
// з приватними полями полями Cash, Name, Clients

// добавити методи:
//   -addCash(number) -> добавлятиме гроші в поле cash
//   -minusCash(number) -> відніматиме гроші з поля cash
//   -addUser(client) добавлятиме користувача в Clients
//   -minusUser(clientName) видалятиме користувача з масиву
//   -findUser(clientName) знаходитиме користувача в масиві Clients і повертатиме його
//   -addUserMoney(clientName, sum) добавлятиме в поле користувача cash гроші і відніматиме їх з банку
//   -minusUserMoney(clientName, sum) відніматиме з поля користувача cash гроші і відніматиме їх з банку

interface Client {
	name: string;
	surname: string;
	age: number;
	cash: number;
}

class Bank implements Client {
	name: string;
	surname: string;
	age: number;
	cash: number;
	constructor(private bankName: string, private Cash: number, private Clients: Array<Client>) {}
	addCash(num: number): void {
		this.Cash += num;
	}
	subtractCash(num: number): void {
		this.Cash -= num;
	}
	addUser(user: Client): void {
		this.Clients.push(user);
    }
    findUser(clientName: string): any{
        return this.Clients.find(user => user.name === clientName);
    }
}

let privat = new Bank('privat', 100000, []);
privat.

privat.addCash(1);
privat.subtractCash(1000);

privat.addUser({ name: 'bob', surname: 'jiji', age: 20, cash: 5000 });
privat.addUser({ name: 'mimi', surname: 'bibi', age: 30, cash: 10000 });


privat.findUser('bob')

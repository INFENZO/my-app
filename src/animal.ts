export class Animal {
    name: string = 'Sobaka';

    saySomething(): string {
        const message = `Hello My name ${this.name}`;
        console.log(message);
        return message;
    }
}
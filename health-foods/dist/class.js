"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        // インスタンスを作らなければPersonを先頭につける
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}.I am ${this.age} years old`);
        this.explainJob();
    }
}
Person.species = 'Homo sapoens';
// 継承
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and i teach ${this.subject}`);
    }
    // ゲッター
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    // セッター
    set subject(value) {
        this._subject = value;
    }
}
const teacher = new Teacher('hiroki', 21, 'English');
teacher.greeting();
// console.log(Person.species)
// console.log(Person.isAdult(21))
// const teacher = new Teacher('Hiroki',21,"English");
// teacher.subject = 'Math';
// console.log(teacher.subject)
// teacher.greeting();

abstract class Person{
  readonly id:number = 32;
  static species = 'Homo sapoens';
  static isAdult(age:number){
    if (age > 17) return true;
    return false;
  }
  constructor(public readonly name : string,protected age : number){ 
  }
  incrementAge(){
    // インスタンスを作らなければPersonを先頭につける
    this.age += 1
  }
  greeting(this:Person){
    console.log(`Hello! My name is ${this.name}.I am ${this.age} years old`)
    this.explainJob();
  }
  abstract explainJob():void;
}
// 継承
class Teacher extends Person{
  explainJob(){
    console.log(`I am a teacher and i teach ${this.subject}`)
  }
  // ゲッター
  get subject(){
    if (!this._subject) {
      throw new Error('There is no subject')
    }
    return this._subject
  }
  // セッター
  set subject(value){
    this._subject = value
  }
  private constructor(name:string,age:number,private _subject:string){
    super(name,age);
  }
  static getInstance(){
    return new Teacher('hiroki',21,'English');
  }
  // greeting(){
  //   console.log(`Hello! My name is ${this.name}.I am ${this.age} I teach ${this.subject}`)
  // }
}
const teacher = new Teacher('hiroki',21,'English')
teacher.greeting();
// console.log(Person.species)
// console.log(Person.isAdult(21))
// const teacher = new Teacher('Hiroki',21,"English");
// teacher.subject = 'Math';
// console.log(teacher.subject)
// teacher.greeting();
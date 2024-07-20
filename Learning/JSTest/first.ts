// Q14. Emp Class
class Emp {
  id: number = 101;
  name: string = "Ram";
  salary: number = 99000;
  address: string = "Borivali";

  displayInfo() {
    console.log(this.id, this.name, this.salary, this.address);
  }
}

const emp = new Emp();
emp.displayInfo();

// Q15. class with static and non-static members

class A {
  id: number = 101;
  name: string = "RAM";
  static company: string = "SDAC";

  getValue() {
    console.log(this.id, this.name);
  }

  static getComp() {
    console.log(A.company);
  }
}

const a = new A();
a.getValue();
A.getComp();

// Q16 Parameterized constructor
class E {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getValue() {
    console.log(this.id, this.name);
  }
}

const e = new E(202, "RAAAM");
e.getValue();

// Q17 Abstarct Class
abstract class abs {
  abstract meth(): void;

  meth1() {
    console.log("Non-Static");
  }

  static meth2() {
    console.log("Static Method");
  }
}

class B extends abs {
  meth() {
    console.log("Abstract Method");
  }
}

const b = new B();
b.meth();
b.meth1();
B.meth2();

// Q19 interface
interface I {
  meth(): void;
}

class J implements I {
  meth() {
    console.log("Using Interface");
  }
}

const j = new J();
j.meth();

// Q20 Generic Example

function method<Any>(id: Any): Any {
  return id;
}
console.log(method<string>("TOM"));
console.log(method<number>(99));
console.log(method<boolean>(true));

export {};

let obj = {id: 101, name: "sapana", salary: 60000, class: 12, Rollno: 4, Classname: bachelor};
console.log(obj);

let emp = new Object();
emp.id= 10;
emp.name=sapana;
emp.salary=20000;
Comment.log(emp);

/*this is third objective*/
function Emp(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
const e = new Emp(189, "Sapana", 20000);
console.log(e);
 

let emp={
    id: 102,
    name:'samkar',
    salary:30000,
    age: 21
};
let keys = Object.keys(emp);
console.log(keys);


let values = Object.keys(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);


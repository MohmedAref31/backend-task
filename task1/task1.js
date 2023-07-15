const { listenerCount } = require("events");
const fs = require("fs");

const person ={
    fname:"ahmed",
    lname:"hossam",
    age:"20",
    city:"alex"
}

const personJson = JSON.stringify(person);
// console.log(personJson)

fs.writeFileSync("store.json", personJson);

const personReaded = fs.readFileSync("store.json").toString();
// console.log(personReaded);

let  personObj = JSON.parse(personReaded);
// console.log(personObj)
    personObj={
        fname:"ahmed",
        lname:"adel",
        age:"40",
        city:"cairo"
    }
    // console.log(personObj)

    fs.writeFileSync("store.json",JSON.stringify(personObj))
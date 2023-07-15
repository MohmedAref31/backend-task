const yargs = require("yargs");

const allData = require("./allData")



yargs.command({
    command:"add",
    describe:"add data to file",
    builder:{
        fname:{
            describe:"add fname",
            demandOption:true,
            type:"string",
        },
        lname:{
            describe:"add lname",
            demandOption:true,
            type:"string"
        },
        id:{
            describe:"add id",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"add city",
            demandOption:true,
            type:"string",
        },
        age:{
            describe:"add age",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        console.log("data added",x)
        // add.addData(x.fname , x.lname, x.id)
        allData.addData(x.id,x.fname,x.lname,x.age,x.city)
    }
})

yargs.command({
    command:"delete",
    describe:"delete ids 4,6 ",
    handler:()=>{
        allData.deletee();
    }
})

yargs.command({
    command:"list",
    describe:"list all data",
    handler:()=>{
        allData.list()
    }
})
yargs.command({
    command:"read",
    describe:"read all data about person",
   
    handler:()=>{
        allData.read()
    }
})

console.log(yargs.argv)

const fs = require("fs");


const addData = (id,fname, lname, age,city)=>{
    const getData = loadData();

            getData.push({
                id:id,
                fname:fname,
                lname:lname,
                age:age,
                city:city
            })
    
            saveData(getData);
}

const loadData = ()=>{
    try{
        const data = fs.readFileSync("data.json").toString();
        return JSON.parse(data);
    }catch{
        return []
    }
}

const saveData = (data)=>{
    const dataJson = JSON.stringify(data);

    fs.writeFileSync("data.json",dataJson)
}

const deletee = ()=>{
    const allData = loadData();
    // console.log(allData)
    const dataFiltered = allData.filter(e => e.id != 4 && e.id != 6)
    // console.log(dataFiltered)
    saveData(dataFiltered);
}
// deletee()

const list = ()=>{
    const allData = loadData();

    allData.forEach(e=>{
        console.log(e.id,e.fname,e.lname,e.age,e.city)
    })
}

//  read by dynamic way
// const read = (id)=>{
//     const allData = loadData();

//     try{
//         const finded = allData.find(e => e.id == id);

//         console.log(finded.id, finded.fname, finded.lname,finded.age,finded.city);

//     }catch{
//         console.log("there is no person with this id")
//     }

// }

//  read 5th person only
const read = ()=>{
    const allData = loadData();

    try{
        const finded = allData.find(e => e.id == 5);

        console.log(finded.id, finded.fname, finded.lname,finded.age,finded.city);

    }catch{
        console.log("there is no person with this id")
    }

}
module.exports={
    addData,
    deletee,
    list,
    read
}
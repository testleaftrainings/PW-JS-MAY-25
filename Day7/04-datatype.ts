//any datatype

let name1 : any = "Ravi";
name1=123

//unknown datatype

let value : unknown = "123"

if ( typeof value === "number"){
    console.log(value); 
}

//never datatype

function infiniteLoop() : never {
while(true){

    console.log("Looping forever");
    
}
}

infiniteLoop()

//tuple 

let user1 : [string,number,boolean] =["Testleaf",123,true];

console.log(user1);



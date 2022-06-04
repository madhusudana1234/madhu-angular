
function fullName(name1,name2,name3) {
    console.log(typeof name1);
     console.log(name2)
     console.log(name3)

    console.log(name1.color && name2.color1);

    if(name1.color==="yellow" && name2.color1==="red") {
        console.log(name1.color + " " + name2.color1);

        var y = name1.color + " " + name2.color1

    }
    else if(name1.brand==="amaron" && name2.brand ==="samsumg") {

        console.log(name1.brand + " " + name2.brand);

        var y = name1.brand + " " + name2.brand

    }
    
    else {
        console.log(name1 +" "+name2 +" "+name3)
        var y=name1 +" "+name2 +" "+name3
    }

   
    return y;

}
var x=fullName({
    color:"yellow",
    brand:"amaron",
    comburtionChambur:"11000c",
    torque :"5000",
    transmition:"Automatic"

},{
    color1:"red",
    brand:"samsung",
    comburtionChambur:"3000",
    torque :"8005",
    transmition:"both"
},{
    color2:"green",
    brand:"honda",
    comburtionChambur:"2500cc",
    torque :"8000",
    transmition:"Manual"
});
let d=fullName(2,4,3);
console.log(x);
console.log(d);
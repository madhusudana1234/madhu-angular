
function fullName(name1,name2,name3) {
    console.log(typeof name1);
     console.log(name2)
     console.log(name3)

    console.log(name1.color && name2.color1);

    if(name1.color==="Black" && name2.color1==="Silver") {
        console.log(name1.color + " " + name2.color1);

        var y = name1.color + " " + name2.color1

    }
    else if(name1.brand==="Maruthi" && name2.brand ==="Hero") {

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
    color:"Black",
    brand:"Maruthi",
    comburtionChambur:"1500cc",
    torque :"4000",
    transmition:"Automatic"

},{
    color1:"white",
    brand:"Lamborgini",
    comburtionChambur:"3000cc",
    torque :"8000",
    transmition:"both"
},{
    color2:"red",
    brand:"tata",
    comburtionChambur:"2500cc",
    torque :"6500",
    transmition:"Manual"
});
let d=fullName(2,4,3);
console.log(x);
console.log(d);
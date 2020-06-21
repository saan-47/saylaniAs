// var arr = new Array("Anonymouse", "farhan","faizan", "Saad", "Samrah", "Khizer","Faiza", "Maryam", "Bakhtawar");

// for(var i = 0; i<arr.length; i++){
//     alert(arr[i]);
// }

// var s = "hello"
// console.log(s);
// //  var d = new Date();
// //  console.log(d);
// // var v = new Date();
// // // v.getDate();
// // // v.getSeconds();
// var dob = new Date("Aug 18, 1997");
// var min = dob.getMinutes();
// console.log(min);

// function greeting(greet){
//     alert(greet);
// }
// greeting("bella ciao");





//1-
//  var fname = prompt("First Name: " );
//  var Lname = prompt("Last Name: " );
//  var fullname = fname + " " +Lname;
//  alert("Hello: " +fullname);

// //2-
//  var mobModel = prompt("Please tell us your favourite mobile phone no: " );
//  var lenofstr = mobModel.length;
//  alert(mobModel);

//  //3-
//   alert("Length of the provided string is: " + lenofstr);

// //4-
// var nationality = "Pakistani";

// var n = nationality.indexOf("n");
// alert(`Index of n is: ${n}`);

// //5-
//  var lindex = "Hello World";
//  alert("Last index of l is: "+lindex.lastIndexOf("l"));

//  alert(`Third index inword Pakistani is: ${nationality.charAt(3)}`);

//  //6-
// alert("Hello "+ fname.concat(Lname));

// //7-
//  var city = "Hyderabad";
//  var changeCity = city.replace("Hyder", "Islam");
//  alert(changeCity);

 
// // var andto = "Ali and Sami are the best friends, They play Cricker and Football together";
// // alert(andto.replace(/and/gi,"&"));

// // var k = "472";
// // alert(k + " data type of k is: " + typeof(k));
// // var t = Number(k);
// // alert(t+" Its data type is: " + typeof(t));

// // var usrin = prompt("Your Input: ");

// // alert(usrin.toUpperCase());

//  function titleCase(usrin){
//      usrin = usrin.toLowerCase();

//      usrin = usrin.split(' ');

//      for (var i = 0; i<usrin.length; i++){
//          usrin[i] = usrin[i].charAt(0).toUpperCase() + usrin[i].slice(1); 
//          return usrin.join(' ');
//     }
// }
// titleCase(usrin);

// // var num = 35.36;
// // var res = num.toString();
// // alert(typeof(res));

// // alert(res)
// // var r = res.replace(".","");
// // alert(r);

// // function error(){
    
// // var usrname = prompt("User Name: " );

// // for(var v = 0; v<=usrname.length;v++){
// //     if(usrname[v] == "$" || usrname[v] == "!"|| usrname[v] == ","|| usrname[v] == "."|| usrname[v] == "@"){
// //         alert("Enter a valid user name");
// //     }
// // }
// // }
// // error();

// // function arr(sea){

// //     var a = ["cake", "apple pie", "cookie", "chips", "patties"];    
// //     for(var s = 0; s<=a.length;s++){
// //         if(a[s].toUpperCase().match(sea.toUpperCase())){
// //             alert(sea+" is present");
// //         }
        
// //         else
// //         {
// //             alert(sea+" is not present");
            
// //         }
// //         break;
// //     }
// // }
// // var search = prompt("Search your stuff: " );
// // arr(search);

// // var pass = prompt("Enter Password: ");
// // var reg = /[A-z]/g;
// // var nu = /[0-9]/g;
// //         if(pass.match(reg)){
// //             if(pass.charAt(0)==nu){
// //                 if(pass.length <= 6){                
// //                 }
// //                 else{
// //                     alert("Pass must me 6 char long")
// //                 }
// //             }
// //             else{
// //                 alert("Pass must not start from a number")
               
// //             }
            
// //             alert("password is ok")
// //         }
// //         else{
// //             alert("password is not ok");
// //         }
//         var county = 0;
// var uni = "University of Karachi"
//     // unique = uni.split(",", uni.length);
//     // alert(unique);
//     var unique = uni.split(" "+"\n");
//     for(var v = 0; v<=uni.length;v++){
//         console.log(chars[v]);
//     }
    
//     var lastChar = prompt("Enter any sentence or word: ");
//     alert(lastChar.charAt(lastChar.length-1));
    
    
    
    // function Count(sent){
    //     var sp = sent.split();
    //     var spe = sp.split();
    //     // for(var v = 0; v <= spe.length; v++){
    //     //     alert(spe[v]+" yes");
    //     // }
    //     alert(spe);
        
    // }
//     var sentence = "The quick brown fox jumps over the lazy dog";
// Count(sentence);
// alert("Bella ciao");




//Second assignment

function one(){
    var posinum = prompt("Enter a positive number: ");
    console.log("Number: "+posinum);
    console.log("Round Value "+Math.round(posinum));
    console.log("Floor Value "+Math.floor(posinum));
    console.log("Ceil Value "+Math.ceil(posinum));
}

function two(){
    
    var posinum = prompt("Enter a negative number: ");
    console.log("Number: "+posinum);
    console.log("Round Value "+Math.round(posinum));
    console.log("Floor Value "+Math.floor(posinum));
    console.log("Ceil Value "+Math.ceil(posinum));
}

function three(){
    var posinum = prompt("Enter a number: ");
    console.log("Absolute value "+Math.abs(posinum));
}

function four(){
    var v = Math.floor((Math.random()*6)+1);
   console.log("Your dice no is "+v);
}
function five(){
    var toss = Math.floor((Math.random()*2)+1);
    if(toss == 1){
        console.log("Heads")
    }
    else if(toss == 2){
        console.log("Tails");
    }
}

function six(){
    var rand = Math.floor((Math.random()*100)+1);
    console.log(rand);
}

function seven(){
    var weight = prompt("Enter Your Weight: ")
    var par = parseInt(weight);
    console.log("The weight of user is "+par+" kilograms");
}
function eight(){
    var rand = Math.floor((Math.random()*10)+1);
    var usrin = prompt("Enter a no between 1 to 10: ")
    if(usrin == rand){
    alert("Congrats you will");    
    }
    else{
        alert("Better luck next time");    
    }
    
}

// one();
// two();
// three();
// seven();
// eight();


//Third


function first(){
    var d =new Date();
    alert(d); 
}
function sec(){
    var d =new Date();
    alert("Current month is: "+d.getMonth()); 
}
function thrd(){
    var d =new Date();
    var ar = ["mon", "tue", "wed", "thur","fri", "sat", "sun"];
    
    if(d.getDay() === 1){
        alert("Current day is: "+ar[0]); 
    }
    else if(d.getDay() === 2){
        alert("Current day is: "+ar[1]); 
    }
    else if(d.getDay() === 3){
        alert("Current day is: "+ar[2]); 
    }
    else if(d.getDay() === 4){
        alert("Current day is: "+ar[3]); 
    }
    else if(d.getDay() === 5){
        alert("Current day is: "+ar[4]); 
    }
    else if(d.getDay() === 6){
        alert("Current day is: "+ar[5]); 
    }
    else if(d.getDay() === 7){
        alert("Current day is: "+ar[6]); 
    }
    else{
        alert("Something wrong")
    }
}
function forth(){
    var d =new Date();
    var ar = ["mon", "tue", "wed", "thur","fri", "sat", "sun"];
    
    if(d.getDay() === 1){
        alert("Current day is: "+ar[0]); 
    }
    else if(d.getDay() === 2){
        alert("Current day is: "+ar[1]); 
    }
    else if(d.getDay() === 3){
        alert("Current day is: "+ar[2]); 
    }
    else if(d.getDay() === 4){
        alert("Current day is: "+ar[3]); 
    }
    else if(d.getDay() === 5){
        alert("Current day is: "+ar[4]); 
    }
    else if(d.getDay() === 6){
        alert("It is fun day"); 
    }
    else if(d.getDay() === 7){
        alert("It is fun day"); 
    }
    else{
        alert("Something wrong")
    }
}

function fifth(){
    var d =new Date();
    
    
    if(d.getDate() <= 15){
        alert("First fifteen days of themonth"); 
    }   
    else{
        alert("Last days of the month")
    }
}

function sixth(){
    var d =new Date();
 
    alert("Current date"+d+"\n"+ "Elapsed miliseconds since"+d+":"+d.getTime()+"\n"+ "Elapsed minutes since"+d+":"+d.getMinutes() );

}

function seventh(){
    var d =new Date();
    var currn = d.getHours();

    
    if(currn < 12){
        alert(d.getHours()+" am" );

    }
    else if(currn > 12)
    {
        alert(d.getHours()+" pm" );
    }
}

function eighth(){
    var d =new Date(2020,11,31,00,00,00);
    alert(d);
    
}
function ninth(){
    var d = new Date(2020,3, 24,0,0,0);
    
    var FRD = d.getMonth() - 1;
   
    FRD = FRD * 30;
    FRD = FRD + d.getDate();
   
    var currd = new Date();
    var currentday = currd.getMonth() - 1;
    currentday = currentday * 30;
    currentday = currentday + currd.getDate();
    var totaldays = currentday - FRD;
    alert("Total days after the 1st Ramzam till now is = "+ totaldays);
}

function tenth(){
    var d = new Date(2015,12, 05,22,50,16);
    var d1 = new Date();
    alert(d1.getMilliseconds())
    alert(d);
}
function eleventh(){
    var da = new Date();
    alert("Current Date:" +da)
    
    da.setHours(da.getHours()-1);    
     
    alert("one hour ago date was: "+ da);
}

function twelth(){
    var da = new Date();
    alert("Current Date:" +da);

    da.setFullYear(da.getFullYear() - 100);

    alert("100 years back it was " +da)
}


function thirt(){
    var d = new Date();
    var age = prompt("Enter your age in number: ");

    d.setFullYear(d.getFullYear() - age);

    alert("Your date of birth year is "+ d.getFullYear());

}

function forthe(){
    var name = prompt("Enter Customer Name: ");
    var Month = prompt("Month ");
    var units = prompt("Number of Unite: ");
    var chargeperunit = prompt("Charger per unit: ");
    var Late_Payment_Surcharge = 350;

    var Net_Amount_payable = units * chargeperunit;
    var Gross_Amount_Payable = Net_Amount_payable +Late_Payment_Surcharge;

    
    

    alert("K-Electric Bill\n "+"Name "+name+"\n"+"Month "+Month+"\n"+"Units "+units+"\n"+"Charge Per Unit "+chargeperunit+"\n\n\n"+"Net_Amount_payable "+Net_Amount_payable+"\n"+"Gross_Amount_Payable "+Gross_Amount_Payable);

}





// first();
// sec();
// thrd();
// forth();
// fifth();
// sixth();
// seventh();
// eighth();
// ninth();
// tenth();
//eleventh();
//twelth();
// thirt();
// forthe();


//4rth

function fone(){
    var d = new Date();
    alert(d);
}

function ftwo(name, lname){
    alert("hello"+name+lname);
}

function fthree(){
    
    var a = prompt("Num1: ")
    var b = prompt("Num2: ")
    var c = parseInt(a)+parseInt(b);
    alert(c);
}

function fforth(){
    var a = prompt("Num1: ")
    var b = prompt("Num2: ")
    var c = prompt("operator: ")
    a = parseInt(a);
    b = parseInt(b);
    
    switch (c){
        case "+":
            alert(a+b);
            break;
        case "-":
            alert(a-b);
            break;

        case "*":
            alert(a*b);
            break;
        
        case "/":
            alert(a/b);
            break;
        default:
            alert("Invalid input");
    }
}

function ffirth(){
    var i = prompt("Enter a number: ")
    i = parseInt(i);
    i = i*i;
    alert(i);
}

function fsixth(){
    var num = prompt("Enter number: ");
    num = parseInt(num);
    var n =1;

    for(var i = 1; i<=num; i++){
        n = n*i;
    }
    alert("Factorial of "+num+" is: "+n); 
}

function fseventh(){
    var num = prompt("Starting number: ");
    num = parseInt(num);
    
    var num2 = prompt("End number: ");
    num2 = parseInt(num2);

    for(var i = num; i<=num2; i++){
        console.log (i);     
    }
    
}

function feight(){
    var base = prompt("Base = ")
    var Perpendicular = prompt("Perpendicular = ")
    function square(){
        base = base * base;
        Perpendicular = Perpendicular * Perpendicular;
        var res = base + Perpendicular;
        return res;
    }

    var hypotenus = Math.sqrt(square());
    alert("Hypotenus = "+hypotenus);
}


function ftenth(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   

function fthirteen(str, cha){
    var count = 0;

    for(var i = 0; i<str.length; i++){
        console.log(str[i]);
        if(str[i] === cha){
            count++;
        }
        
    }
    alert(cha+" occured "+count+ " times");

}

function ffourteen(radius){
    var pi = 3.142;
    radius = parseInt(radius);
    var r = radius *radius;
    var Circumference = 2*pi*r;
    alert("The Circumference is "+ Circumference);

}

function calcArea(radius){
    var pi = 3.142;
    radius = parseInt(radius);
    var r = radius *radius;
    var area = pi*r;
    alert("The Area is "+ area);

}
// fone();
// ftwo("Hassam", "Ibrahim");
// fthree();
// fforth();
//ffirth();
//fsixth();
//fseventh();
//feight();
//ftenth("A man, a plan, a canal. Panama");
fthirteen("Hassan", "s");

ffourteen(50);
calcArea(20);

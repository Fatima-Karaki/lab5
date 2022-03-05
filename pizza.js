function getSize(){
   return document.getElementById("myRange").value;
}

function getMeet(){
    meat=[];
    x=document.getElementsByClassName("meat");
    for(var i in x){
        if(x[i].checked){
            meat.push(x[i].value)
        }
    }
    return meat;  
}


function getVeg(){
    veg=[];
    x=document.getElementsByClassName("veg");
    for(var i in x){
        if(x[i].checked){
            veg.push(x[i].value)
        }
    }
    return veg;  
}

function getCheese(){
    var x;
    // return document.querySelector("cheese").checked.value;


    if(document.getElementById('r').checked == true) {   
       x=1;  
    } 
    else if (document.getElementById('n').checked == true){  
        x=2;  
    }  
    else if (document.getElementById('e').checked == true){
       x=3; 
    }
    else{
        x=1;
    }
    return x;
}

function ChangePizzaSize(){
    if (document.getElementById("myRange").value==1){
        document.getElementById("price").innerHTML = "6$";
        document.getElementById("PizzaSize").innerHTML = "Small";
        document.getElementById("pizzaimg").width = "100px";

    }
    else if (document.getElementById("myRange").value==2){
        document.getElementById("price").innerHTML = "10$";
        document.getElementById("PizzaSize").innerHTML = "Medium";
        document.getElementById("pizzaimg").style.width = "150px";

    }
    else if (document.getElementById("myRange").value==3){
        document.getElementById("price").innerHTML = "14$";
        document.getElementById("PizzaSize").innerHTML = "Large";
        document.getElementById("pizzaimg").style.width = "200px";

    }
    else if (document.getElementById("myRange").value==4){
        document.getElementById("price").innerHTML = "16$";
        document.getElementById("PizzaSize").innerHTML = "X-Large";
        document.getElementById("pizzaimg").style.width = "250px";

    }
}


function calculateTotal(){
    var total=0;
    if (getSize()==1) total+=6;
    else if (getSize()==2) total+=10;
    else if (getSize()==3) total+=14;
    else if (getSize()==4) total+=16;
    meat=getMeet().length;
    veg=getVeg().length;
    total+= 2*meat;
    total+=1*veg;
    if(document.getElementById('e').checked){
        total+=3;
    }
    return total;
}

function fillSummary(){
    var first=document.getElementById("fname").value;
    var last=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    


    var city=document.getElementById("city").selectedOptions[0].value;
    
    var address=document.getElementById("address").value;

    document.getElementById("dlvrTo").innerHTML= first.concat(" ", last, " ", email, " ", phone, " ", city , " ", address);

   
    document.getElementById("total").innerHTML= "Total " + calculateTotal()+ "$";
//make sure if there is another way
    var cheese;
    if (getCheese()==2) cheese="No Cheese";
    else if(getCheese==3) cheese="Extra Cheese";
    else cheese="Regular Cheese";
    
    var size= document.getElementById("PizzaSize").innerHTML + " size";
    var order= [[size], [cheese], getMeet(), getVeg()];
    
    var m="" ;

    for (i = 0; i < order.length; i++){
        for( j=0; j<order[i].length; j++){
            m= m+ '<li>' + order[i][j] + '</li>';
        }
       
    }

    document.getElementById('orderList').innerHTML =  m ;
}


function test(){
    // console.log(getSize());
    // console.log(getMeet());
    // console.log(getVeg());
    // console.log(getCheese());
    // console.log(calculateTotal());
    // (fillSummary());
    // gotoPage(3);
    
}

function gotoPage(value){
    if(value==1){
        window.location.href = "#section1";
        document.getElementById("section1").style.display="block";
        document.getElementById("section2").style.display="none" ;
        document.getElementById("section3").style.display="none";
        document.body.style.background="#01dddd";
    }
    else if(value==2){
        window.location.href = "#section2";
        document.getElementById("section2").style.display="block";
        document.getElementById("section1").style.display="none" ;
        document.getElementById("section3").style.display="none";
        document.body.style.background="#e93a57";
    }
    else if(value==3){
        fillSummary();
        window.location.href = "#Section3";
        document.getElementById("section3").style.display="block";
        document.getElementById("section1").style.display="none" ;
        document.getElementById("section2").style.display="none";
        document.body.style.background="#3fc38e";
        
    }
   
}

function checkInfo(){
    if ( document.getElementById("fname").value == ""
    | document.getElementById("lname").value == ""
    | document.getElementById("email").value == ""
    | document.getElementById("phone").value == ""
    | document.getElementById("city").value == ""
    |document.getElementById("address").value == "")
    {
        alert ("Please fill in the missing boxes.");
       
    }
    else{
        gotoPage(3);
    }
}
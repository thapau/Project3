var e = document.getElementById("name").focus();
document.form1.onsubmit=function(){

    return validate();
};
var validate = function(){
    var isValid=true;
    
     var name= document.getElementById("name").value;
     var msg1=document.getElementById("errormsg1");
          
     if(name==""){  
         msg1.innerHTML="This is required" ;            
         msg1.style.color="Blue";
        isValid=false;
    }
    else if(name.length<6 || name.length > 12){
         msg1.innerHTML= "Length must be between 6 and 12";
         msg1.style.color="Blue";
        isValid=false;
    }else{
         msg1.innerHTML="";
    }
      
    var password= document.getElementById("password").value;
    var msg2=document.getElementById("errormsg2");
     
    if(password==""){  
        msg2.innerHTML="This is required" ;            
        msg2.style.color="Blue";
        isValid=false;
    }
    else if(password.length<6){
        msg2.innerHTML= "Length must be more than 6";
        msg2.style.color="Blue";
        isValid=false;
     }else{
        msg2.innerHTML="";
    }
    var cpassword= document.getElementById("cpassword").value;
    var msg3=document.getElementById("errormsg3");

    if(cpassword==""){  
        msg3.innerHTML="This is required" ;            
        msg3.style.color="Blue";
        isValid=false;
    }else if(cpassword !=password){  
        msg3.innerHTML="Password mismatch" ;            
        msg3.style.color="Blue";
        isValid=false;     
     }else{
        msg3.innerHTML="";
    }
     var address= document.getElementById("address").value;
     var msg4=document.getElementById("errormsg4");
          
     if(address==""){  
        msg4.innerHTML="This is required" ;            
        msg4.style.color="Blue";
        isValid=false;
    }else{
        msg4.innerHTML="";
    }
    var city = document.getElementById("city").value;
    var msg5 = document.getElementById("errormsg5");

    if(city == "-1"){
        msg5.innerHTML = "Select one option";
        msg5.style.color = "Blue";
        isValid = false;
    }else{
        msg5.innerHTML="";
    }

    
    
 var lang1 = document.getElementById("lang1").checked; 
 var lang2 = document.getElementById("lang2").checked;
 var msg6 = document.getElementById("errormsg6"); 

 if(!lang1 && !lang2){
     msg6.innerHTML = "Select one option";
     msg6.style.color="Blue";
     isValid=false;
    }else{
        msg6.innerHTML="";
    }

    return isValid;
};

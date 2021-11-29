
var username = document.getElementById("exampleInputName")
var useremail = document.getElementById("exampleInputEmail")
var userphone = document.getElementById("exampleInputNum")
var usermessage = document.getElementById("textAreaExample")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var numPattern = /^[a-zA-Z\s]*$/
var emailPattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

var validate = 0

$("#submit-form").submit((e)=>{
    validate = 0
    e.preventDefault()
    checkNum()
    checkEmail()
    checkPhone()
    checkMessage()

    if(validate == 4){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwxESa9PYvm6W-faiOlSjFAwxLCJBmsAeyN18eXFA/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    }
    
})

function checkNum(){
   if(username.value == ""){
       one.innerHTML = "fill this feild"
   }else if(username.value.trim() == ""){
       one.innerHTML = "space not allowded"
   }else if(numPattern.test(username.value) == false){
       one.innerHTML = "only char allowded"
   }else{
       one.innerHTML = ""
       validate = validate + 1
      // console.log(validate)
   }
}
function checkEmail(){


    if(useremail.value == ""){
        two.innerHTML = "fill the email"
    
    
    }else if(!useremail.value.match(emailPattern)){
        //console.log("Ok")
        two.innerHTML = "email invalid"
    }
    
    else{
        two.innerHTML = ""
        validate = validate+1
        
        
    }
}
function checkPhone(){
    if(!userphone.value.match(phonePattern)){
        three.innerHTML = "Enter valid phone number"
        
    }
    else if(userphone.value == ""){
        three.innerHTML = "Enter number"
        
    }
    else if(userphone.value.trim() == ""){
        three.innerHTML = "space not allowded"
    }
    
    else{
        three.innerHTML = ""
        validate = validate+1
        //console.log(validate)
    }
}
function checkMessage(){
   if(usermessage.value.length <= 10){
       four.innerHTML = "Enter atleast 10 charector"
   }
   else{
       four.innerHTML = ""
       validate = validate+1
   }
}



const names=document.getElementById('name')
const email=document.getElementById('email')
const phoneNumber=document.getElementById('phoneNumber')
const gender=document.getElementById('gender')
const password=document.getElementById('password')
let EError=document.getElementsByClassName('EmailError')[0]
const empty=""

// to test the email format as it is being typed
email.addEventListener("input",(e)=>{
    const emailInput=e.target.value
    const emailInputRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    inputRegexTest=emailInputRegex.test(emailInput)
    if (inputRegexTest){
        
    
            EError.style.display='none'
            email.style.border="solid 2px green"
        }else{
            EError.style.display='block'
        
        
    }

    


})

const submit=document.getElementsByTagName('button')[0]
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    inputCheck()
    
} )

function inputCheck(){
const namesValue=names.value.trim() 
  
// const emailValue=email.value.trim()   
const phoneNumberValue=phoneNumber.value.trim()    
const genderValue=gender.value.trim() 
   
const passwordValue=password.value.trim()    

// regex test for name
// let nError=document.getElementsByClassName('nameError')[0]
// let nameRegex=/[A-Za-z]/
// let validName=nameRegex.test(namesValue)
let namesCorrect=namesValue!=empty
if(namesCorrect){
    names.style.border='solid 2px green'

}else{
    
    names.style.border='solid 2px red'
}

// regex to test email

// let emailRegex=/[A-Za-z]/
// let validEmail=emailRegex.test(emailValue)

// if (validEmail){
    
//     EError.style.display='none'
// }else{
//     EError.style.display='block'
// }

//regex to test phonenumber
// let pError=document.getElementsByClassName('phoneError')[0]
// let phoneRegex=/[0-9]/
// let validPhone=phoneRegex.test(phoneNumberValue)
let phoneNumberGood=(phoneNumberValue!=empty)

if(phoneNumberGood){
    phoneNumber.style.border='solid 2px green'
    
    }else{
       

        phoneNumber.style.border='solid 2px red'
    }
    

// regex to test gender
let gError=document.getElementsByClassName('genderError')[0]
let correctGender=(genderValue=='Male' || genderValue=='Female')
if (correctGender!=empty){
   
    gError.style.display='none'
}else{
    gError.style.display='block'
    
}

// let passError=document.getElementsByClassName('passwordError')[0]
// let passRegex=/[A-Za-z]/
// let validPass=passRegex.test(passwordValue)
let passwordGood=passwordValue!=empty
if (passwordGood){
    // passError.style.display='block'
    password.style.border="solid 2px green"

}else{

    // passError.style.display='none'
    

    password.style.border="solid 2px red"
}


//Submission success message
let submission=document.getElementsByClassName('Submission')[0]
if(passwordGood && phoneNumberGood && namesCorrect && correctGender){
    submission.style.display='block'
    console.log('yes')
}else{
    submission.style.display='none'
    console.log('kilode')
}

}


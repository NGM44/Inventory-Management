import memory from "../memory.js";

let data= [];
async function callData()
{
    try
    {
        //let promise= await fetch("./InventoryDB_Server/data/signin.json",{
        let promise= await fetch("https://inventoryapp-90f3.restdb.io/rest/administrator",{
            headers:
            { 
                "x-apikey": "603a2c3f10f29b640ed97b6a",
                "content-type": "application/json",
            },
        });
        if(!promise.ok)
        {
            alert("Problem");
        }
        else
        {
            data=  await promise.json();
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
callData();

let signin= document.getElementById("signinbtn");
signin.addEventListener('click',validate);

function validate()
{
    let username= document.getElementById("username").value.toString();
    let password= document.getElementById("password").value.toString();
    let flag= 0;
    for(let items of data) 
    {
        if(username === items.name && password === items.password) flag=1;
    }
    if(flag===1)
    {
        window.location.href = "../app.html";
        window.sessionStorage.setItem("loginid",true);
    }
    else
    {
        let err= document.querySelectorAll(".err");
        for(let i of err)
        {
            i.style.display= "block";
        }
    }
}

let signup= document.getElementById("signup");
signup.addEventListener('click',createUser);

let signinContainer= document.querySelector(".signin");
let signupContainer= document.querySelector(".newUser");

function createUser()
{
    let cancelSignup= document.getElementById("cancelAccount");
    cancelSignup.addEventListener('click',cancelUser);
    
    signinContainer.style.display= "none";
    signupContainer.style.display= "flex";

    let addUser= document.getElementById("createAccount");
    addUser.addEventListener('click', verifyUser);
}

function cancelUser()
{   event.preventDefault();
    let signupContainer= document.querySelector(".newUser");
    signinContainer.style.display= "flex";
    signupContainer.style.display= "none";

    let err= document.querySelectorAll(".serr");
    for(let i of err)
    {
        i.style.display= "none";
    }
    let unmatchedPassword= document.querySelector(".unmatched-password");
    unmatchedPassword.style.display= "none";
 
}

function verifyUser(event)
{
    event.preventDefault();
    let username= document.getElementById("usernameSignup").value;
    let password= document.getElementById("passwordSignup").value;
    let cpassword= document.getElementById("cpasswordSignup").value;
   
    const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&@? "]).*$/;
    
    
    if((username==="" || password==="" || cpassword===""))
    {
         
        let err= document.querySelectorAll(".serr");
         for(let i of err)
         {
             i.style.display= "block";
             
        }
    }
    
    else if (regex.test(password) == false)
    {
        let err= document.querySelector(".regex"); 
        err.style.display= "block";
    }
    else if(password!=cpassword)
    {
        let unmatchedPassword= document.querySelector(".unmatched-password");
        unmatchedPassword.style.display= "flex";
    }
    
    else{

        let newUserObj= {
            name: username,
            password: password
        }
        data.push(newUserObj);
        let signinContainer= document.querySelector(".signin");
        let signupContainer= document.querySelector(".newUser");
        signinContainer.style.display= "flex";
        signupContainer.style.display= "none";
        event.preventDefault();
        $.ajax({

            //url: "./InventoryDB_Server/data/units.json"
            url: 'https://inventoryapp-90f3.restdb.io/rest/administrator',
            data: newUserObj,
            type: 'POST',
            headers: {
                "x-apikey": "603a2c3f10f29b640ed97b6a",
            },
        });
    }
   
}
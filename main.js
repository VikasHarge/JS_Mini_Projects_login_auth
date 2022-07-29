// ================ toggle between singup login =========== //

const singup_togg = document.getElementById('singUp-togg');
const login_togg = document.getElementById('logIn-togg');
const dashboard = document.getElementById('login_dashboard');
const welcome_page_1 = document.getElementById('welcome_page_1');
const welcome_greeting = document.getElementById('welcome_greeting');





function loginChange(){
    login_togg.style.display = 'none';
    singup_togg.style.display = 'flex';
    document.getElementById('error_msg_1').style.display = 'none';
}

function pageChange(){
    login_togg.style.display = 'flex';
    singup_togg.style.display = 'none';
}


//==================== sing up ==============  //

// function singup(){

//     // ========= data from from ========== //

//     var firstName_s = document.getElementById('firstName').value;
//     var lastName_s = document.getElementById('lastName').value;
//     var email_s = document.getElementById('email').value;
//     var password_s = document.getElementById('password').value;
//     var password2_s = document.getElementById('password2').value;


//     // ============= store to local storage ========//

//     if(firstName_s === "" || lastName_s === "" || email_s === "" || password_s === "" || password2_s === "" ){
//         alert("❌ Please fill, all the fields");
//     }  
//     else if (password_s !== password2_s) {
//         document.getElementById('password2').style.border = "1px solid red";

//     } 
//     else if (password_s === password2_s){
//         alert("✔️ account created sucessfully !, redirecting to login");
//         localStorage.setItem('firstName_local', firstName_s);
//         localStorage.setItem('lastName_local', lastName_s);
//         localStorage.setItem('email_local', email_s);
//         localStorage.setItem('pass_local', password_s);
//         localStorage.setItem('pass2_local', password2_s);
//         loginChange();
//         pageChange();
//     }
// }



// ====================== login ======================= //

// ========= welcome greetings ========== //



// function login(){
    
//     var email_l = document.getElementById('email_L').value;
//     var password2_l = document.getElementById('password_L').value;

//     var email_local = localStorage.getItem("email_local");
//     var pass_local = localStorage.getItem("pass2_local");

//     if(email_l === email_local && password2_l === pass_local){
//         login_togg.style.display = 'none';
//         singup_togg.style.display = 'none';
//         dashboard.style.display = "flex"
//         greetingFn();
//     } else if(email_l !== email_local || password2_l !== pass_local) {
//         const err_msg = document.getElementById('error_msg_1');
//         err_msg.classList.toggle('msg_style');
//         err_msg.innerHTML=" ❌ Wrong Email and password";
//     } 

// }


// ======================== logOut ================== //

function logOut (){
    window.location.reload();
}































// ====================== save login data and check for user =================== //


// let submit = document.getElementById('submit');

// submit.addEventListener('click', singup)

let arr=JSON.parse(localStorage.getItem("person")) || [];

function singup(event){
    event.preventDefault();
    
    let obj = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        Email : document.getElementById('email').value,
        pass1 : document.getElementById('password').value,
        pass2 : document.getElementById('password2').value
    }

    
    if (obj.pass1 !== obj.pass2){
        alert("❌ pass not match")
    } else if(check(obj.Email)===true){
        arr.push(obj);
        localStorage.setItem("person", JSON.stringify(arr));
        alert("✔️ account created sucessfully !, redirecting to login");
        login_togg.style.display = 'flex';
        singup_togg.style.display = 'none';

    } else {
        alert("account already exist");
    }    
}



// ========== check for existing account ============ //


function check(email){
    let filter = arr.filter(function(ele){
        return email === ele.Email;
    })


    if(filter.length > 0){
        return false;
    } else {
        return true;
    }
}


// ================================= log in ================================== //




function login(){

    var counter = 0;

    const email_id = document.getElementById('email_L');
    const pass_id = document.getElementById('password_L');


    const Email_input = email_id.value;
    const Pass_input = pass_id.value;


    if(Email_input === ""){
        email_id.style.borderBottomColor = '1px solid red'
        alert('⚠️ please fill Email..!!')
    } 
    if (Pass_input === "") {
        email_id.style.borderBottomColor = '1px solid red'
        alert('⚠️ please fill Password..!!')
    }

  

    for(let i in arr){

        if(arr[i].Email === Email_input && arr[i].pass1 === Pass_input){ 
            counter = 1;
            greetingFn(arr[i].firstName, arr[i].lastName);
        }
        else if (arr[i].Email === Email_input && arr[i].pass1 !== Pass_input){      
            counter = 3;
        }
        else if (arr[i].Email !== Email_input && counter !== 1 && counter !== 3 && counter !== 2 ){
            counter = 2;   
        } 
            
    }

    if(counter === 1){
        login_togg.style.display = 'none';
        singup_togg.style.display = 'none';
        dashboard.style.display = "flex"
        alert("✔️ Welcome, log in sucessfully !,");    
    } 
    else if (counter === 2){
        alert("❌ Account not found");     
    }
    else if(counter === 3){
        alert("❌ pass incorrect")        
    }
}


function greetingFn(fName, lName){

    var fullName = fName + " " + lName;
    welcome_greeting.innerText = fullName;
    welcome_greeting.style.fontSize = "1.5rem"
}

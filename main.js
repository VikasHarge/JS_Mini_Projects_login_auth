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


// ====================== save login data and check for user =================== //


let submit = document.getElementById('submit');

submit.addEventListener('click', singup)

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


// ======================== logOut ================== //

function logOut (){
    window.location.reload();
}


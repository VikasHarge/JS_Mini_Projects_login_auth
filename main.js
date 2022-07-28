// ================ toggle singup login =========== //

const singup_togg = document.getElementById('singUp-togg');
const login_togg = document.getElementById('logIn-togg');
const dashboard = document.getElementById('login_dashboard');

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

function singup(){

    // ========= data from from ========== //

    var firstName_s = document.getElementById('firstName').value;
    var lastName_s = document.getElementById('lastName').value;
    var email_s = document.getElementById('email').value;
    var password_s = document.getElementById('password').value;
    var password2_s = document.getElementById('password2').value;


    // ============= store to local storage ========//

    if(firstName_s === "" || lastName_s === "" || email_s === "" || password_s === "" || password2_s === "" ){
        alert("❌ Please fill, all the fields");
    }  
    else if (password_s !== password2_s) {
        document.getElementById('password2').style.border = "1px solid red";

    } 
    else if (password_s === password2_s){
        alert("✔️ account created sucessfully !, redirecting to login");
        localStorage.setItem('firstName_local', firstName_s);
        localStorage.setItem('lastName-local', lastName_s);
        localStorage.setItem('email_local', email_s);
        localStorage.setItem('pass_local', password_s);
        localStorage.setItem('pass2_local', password2_s);
        loginChange();
        pageChange();
    }


    
}



// ====================== login ======================= //

function login(){
    
    var email_l = document.getElementById('email_L').value;
    var password2_l = document.getElementById('password_L').value;

    var email_local = localStorage.getItem("email_local");
    var pass_local = localStorage.getItem("pass2_local");

    if(email_l === email_local && password2_l === pass_local){
        login_togg.style.display = 'none';
        singup_togg.style.display = 'none';
        dashboard.style.display = "flex"
    } else if(email_l !== email_local || password2_l !== pass_local) {
        const err_msg = document.getElementById('error_msg_1');
        err_msg.classList.toggle('msg_style');
        err_msg.innerHTML=" ❌ Wrong Email and password";
    } 

}
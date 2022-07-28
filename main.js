
// ================ toggle singup login =========== //

const singup = document.getElementById('singUp-togg');
 login = document.getElementById('logIn-togg')





function loginChange(){
    login.style.display = 'none';
    singup.style.display = 'flex';
}

function pageChange(){
    login.style.display = 'flex';
    singup.style.display = 'none';
}
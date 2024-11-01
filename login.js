let client = {
    'isLogged': false,
    'username':'',
    'password':'',
    'email':'',
    'avatar':'',
    'status':''
};

let root = document.getElementById('root');
let emailInput = document.getElementById('loginEmail');

let passwordInput = document.getElementById('loginPassword');
let loginButton = document.getElementById('loginButton');
let loginCont = document.querySelector('.login-container'); 

let urlPre = `http://127.0.0.1:5000`
    urlPre = `https://mysite.boxcar.site/`;


async function getAllUsers() {
    let data = await fetch(`${urlPre}/users`);
    let result = await data.json();
    result.forEach(r => {
        emailInput.innerHTML += `<option value="${r.displayName}">${r.displayName}</option>`
    });
}

getAllUsers()
async function handleLoginClick(id) {
    let e = emailInput.value;
    let p = passwordInput.value;

    if (p == '' || e == '') { 
        client.status = 'empty';
        root.innerHTML += alertClient(client);
        return; 
    };
    
    let data = await fetch(`${urlPre}/users/${e}`);
    let result = await data.json();

// login success
    if (result.user_password == passwordInput.value) {
        client = {
            'isLogged': true,
            'username': result.displayName,
            'email': result.email,
            'password': result.password,
            'avatar': result.avatar,
            'status': 'success'
        }
        root.innerHTML = alertClient(client);
        loginCont.style.display = 'none';
        setTimeout(closeAlert, 1500)
        setTimeout(dashboard, 1500)
    }
    else { 
        client.status = 'invalid';
        root.innerHTML = alertClient(client);
        setTimeout(closeAlert, 2000)
        passwordInput.value = ''
        emailInput.value = '';
    } 
}
function dashboard() {
    root.innerHTML = `<h1 class="bg-dark text-light m-0">Welcome ${client.username}</h1>
                        <img src='${client.avatar}' class='mx-auto rounded-circle bg-secondary' width="120" height="120" />`
}
function closeAlert() {
    document.querySelector('.login-alert').style.display = 'none';
}

function alertClient(client){
let html;

if (client.status == 'invalid') {

html = `

    <div class="login-alert alert alert-danger m-0 position-fixed top-0 w-100">
        <a href="#" class="close" onclick="closeAlert()" data-dismiss="login-success" aria-label="close">
        <span class="material-symbols-outlined float-end unlisted-style text-dark">
            close
        </span>    
        </a>
        <strong>Incorrect password!</strong> You have entered an invalid password!
    </div>

    `;
}

if (client.status == 'success') {
html = `

 <div class="login-alert alert alert-success m-0 position-fixed top-0 w-100">
    <a href="#" class="close" onclick="closeAlert()" data-dismiss="login-success" aria-label="close">
     <span class="material-symbols-outlined float-end unlisted-style text-dark">
        close
    </span>   
    </a>
    <strong>Success!</strong>Welcome ${client.username}! You are now logged in
  </div>

`;
}

if (client.status == 'error') {
html = `

 <div class="login-alert alert alert-info m-0 position-fixed top-0 w-100">
    <a href="#" class="close" onclick="closeAlert()" data-dismiss="login-success" aria-label="close">
    <span class="material-symbols-outlined float-end unlisted-style text-dark">
        close
    </span>
    </a>
    <strong>Error!</strong> Please enter valid credentials
  </div>

`;
}

if (client.status == 'empty') {
    html = `
    
     <<div class="login-alert alert alert-dark m-0 position-fixed top-0 w-100">
        <a href="#" class="close" onclick="closeAlert()" data-dismiss="login-success" aria-label="close">
        <span class="material-symbols-outlined float-end unlisted-style text-dark">
            close
        </span>
        </a>
        <strong>Error!</strong> Please enter valid credentials
      </div>>
    
    `;
    }

return html;
}


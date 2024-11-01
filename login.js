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
        setTimeout(closeAlert, 500)
        setTimeout(dashboard, 500)
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


    root.innerHTML = `<h1 class="bg-dark m-0 mb-2">Welcome </h1>
                 
                        
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
<section class="blog-listing gray-bg">
        <div class="container">
            <div class="row align-items-start">
               
            





 <div class="col-lg-8 m-15px-tb">
                    <div class="row">
                        
                        
                     
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <a href="#">
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.woLDWOAKygs7PJ8AL0u2VwHaEJ&pid=Api&P=0&h" title="" alt="" class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-info">
                                    <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <a href="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                            <i class="arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <a href="#">
                                        <img class="img-fluid" src="https://image.cnbcfm.com/api/v1/image/108029615-17255396102024-09-04t233804z_605513800_rc2vt9a21usv_rtrmadp_0_usa-economy.jpeg" title="" alt="">
                                    </a>
                                </div>
                                <div class="blog-info">
                                    <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <a href="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                            <i class="arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>











                <div class="col-lg-4 m-15px-tb blog-aside">
                    <!-- Author -->
                    <div class="widget widget-author">
                        <div class="widget-title">
                            <h3>${client.username}</h3>
                        </div>
                        <div class="widget-body">
                            <div class="media align-items-center">
                                <div class="avatar">
                                    <img src="${client.avatar}" title="" alt="" width="200" height="200" class="rounded-circle">
                                </div>
                                <div class="media-body">
                                    <h6>Hello, I'm<br> ${client.username}</h6>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <!-- End Author -->

                    <!-- Trending Post -->
                    <div class="widget widget-post">
                        <div class="widget-title">
                            <h3>Trending Now</h3>
                        </div>
                        <div class="widget-body">

                        </div>
                    </div>
                    <!-- End Trending Post -->

                    <!-- Latest Post -->
                    <div class="widget widget-latest-post">
                        <div class="widget-title">
                            <h3>Latest Post</h3>
                        </div>
                        <div class="widget-body">
                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/BF9F/production/_108855094_gettyimages-1163654178.jpg.webp" class="img-fluid" title="" alt="">
                                    </a>
                                </div>
                            </div>

                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img src="https://cdn.mos.cms.futurecdn.net/rfxSqdye9LWXXwRAwDpDNQ-650-80.jpg.webp" class="img-fluid" title="" alt="">
                                    </a>
                                </div>
                            </div>

                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img class="img-fluid" src="https://images.hdqwalls.com/download/fortnite-battle-royale-hd-wz-1920x1080.jpg" title="" alt="">
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Latest Post -->

                    <!-- widget Tags -->
                    <div class="widget widget-tags">
                        <div class="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div class="widget-body">
                            <div class="nav tag-cloud">
                                <a href="#">Design</a>
                                <a href="#">Development</a>
                                <a href="#">Travel</a>
                                <a href="#">Web Design</a>
                                <a href="#">Marketing</a>
                                <a href="#">Research</a>
                                <a href="#">Managment</a>
                            </div>
                        </div>
                    </div>
                    <!-- End widget Tags -->
                </div>
            </div>
        </div>
    </section> 
                        
                        
                        
                        
                        `;


                        
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


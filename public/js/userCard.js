let userRoot = document.getElementById('userRoot');
let userQuery = "Guest"
let userUrl = `https://mysite.boxcar.site/users/${userQuery}`;

const navbarRoot = document.getElementById('navbarRoot');
const friendsRoot = document.getElementById('friendsRoot')
const photosRoot = document.getElementById('photosRoot');
const aboutRoot = document.getElementById('aboutRoot');
const modalsRoot = document.getElementById('modalsRoot');
const shareRoot = document.getElementById('shareRoot');
const root = document.getElementById('root');
const bg = [`public/assets/bg/fighter.jpg`, `public/assets/bg/lowrider-orange.jpg`, `public/assets/bg/lowrider.jpg`, `public/assets/bg/beach.jpg`, `public/assets/bg/blue-tech.jpg`, `public/assets/bg/waterfall.jpg`, `women-ai.jpg` ];



function setUserId(val){
    let url = `https://mysite.boxcar.site/users/${val}`;

    fetchUserData(url); 
}
function convertDate(date){

  let y =  date.slice(0,4);
  let d = date.slice(5, 7);
  
  let m = date.slice(8, 10);
  let h = date.slice(11, 13) - 12;
  let min = date.slice (14, 16);
  let ap = 'AM'
  let hour;

  
  if (Number(h) > 12) {
      hour = h ; 
   } else { 
      hour =Number(h) - 5; 
      ap = 'PM';
   }

  date = `${d}-${m}-${y}  <span class="ps-2">${hour}:${min}${ap}</span>`;
  return date;

}

function randomBg(b){
    let num = Math.floor(Math.random() * b.length - 1 );
    return bg[num];
}
function userCard(user) {
    let html = 
    `

  <div class="user-card card mx-auto" style="" id='userCard' data-userId="${user.userId}">
    
    <div class="h-200px rounded-top" id="bgHero" style="background-image:url(${user.hero}); background-position: center; background-size: cover; background-repeat: no-repeat;">
    </div>
      
    <div class="card-body py-0">
        <div class="d-sm-flex align-items-start text-center text-sm-start">
          <div>

            <div class="avatar avatar-xxl mt-n5 mb-3">
              <img class="avatar-img rounded-circle border border-white border-3" src=" ${user.avatar} " alt="">
            </div>

          </div>
          <div class="ms-sm-4 mt-sm-3">
            
            <h1 class="mb-0 h5"> ${user.displayName} <i class="bi bi-patch-check-fill text-success small"></i></h1>
            <p>250 connections</p>

          </div>
          
          <div class="d-flex mt-3 justify-content-center ms-sm-auto">
            
            <button class="btn btn-danger-soft me-2 btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#modalEditUserInfo">
             <i class="fa fa-address-card" aria-hidden="true"></i>
             </button>
            <div class="dropdown">
              
              <button class="icon-md btn btn-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</a></li>
                <li><a class="dropdown-item" href="#"> <i class="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</a></li>
                <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"> <i class="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
          <li class="list-inline-item"><i class="bi bi-briefcase me-1"></i> Lead Developer</li>
          <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> New Hampshire</li>
          <li class="list-inline-item"><i class="bi bi-calendar2-plus me-1"></i> Joined on ${convertDate(user.date)}</li>
        </ul>
      </div>
      
      <div class="card-footer mt-3 pt-2 pb-0">
        
        <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
          <li class="nav-item"> <a class="nav-link active" href="#!"> Posts </a> </li>
          <li class="nav-item"> <a class="nav-link" href="#!"> About </a> </li>
          <li class="nav-item"> <a class="nav-link" href="#!"> Connections <span class="badge bg-success bg-opacity-10 text-success small">${user.userId}</span> </a> </li>

        </ul>
      </div>
  </div>    
    
    `;
    return html;
}

async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        try {
            const data = await response.json();
            let userInfo = {  'userId': data.userId, 
                              'avatar': data.avatar, 
                              'displayName': data.displayName, 
                              'email': data.email, 
                              'hero': data.hero,
                              'feeling' : data.feeling,
                              'date': data.date                 
                             }
            // initilize views                     
            root.innerHTML = welcome('info', userInfo, 'logged in');                  
            userRoot.innerHTML = userCard(userInfo);
            navbarRoot.innerHTML = setNavbar(userInfo);
            aboutRoot.innerHTML = about(userInfo);
              // photosRoot.innerHTML = photos(); see fetchFeed()
              // modalsRoot.innerHTML += photoModal(userImage); see photos.js 
              // friendsRoot.innerHTML = friends();  see fetchFeed()
            modalsRoot.innerHTML = modals(userInfo);
            modalsRoot.innerHTML += createPostModal(userInfo);
            modalsRoot.innerHTML += editUserInfo(userInfo);
            shareRoot.innerHTML = share(userInfo);            
            fetchFeed(userInfo);

        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    }
}


//init program start point
fetchUserData(userUrl);


function welcome(type, user, action){
  return `
              <div class="alert alert-${type} alert-dismissible fade show mb-0" role="alert">
                <i class="fa fa-user pe-2" aria-hidden="true"></i>
                    <strong>${user.displayName}</strong> You have successfully ${action}!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
  `
}

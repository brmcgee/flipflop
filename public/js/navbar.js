function setNavbar(user){
  
    let html =`
    

	<nav class="navbar navbar-icon bg-dark">
		<div class="container-fluid">
           
      <a class="btn text-secondary py-0 me-sm-3 sidebar-start-toggle">
        <i class="bi bi-justify-left fs-3 lh-1"></i>
      </a>

			
			<a class="navbar-brand d-none d-sm-block" href="index.html">
				<img class=" light-mode-item navbar-brand-item text-light small" src=" ${user.hero} " alt=" ${user.displayName || user.username}">
			</a>
		

			<ul class="nav flex-nowrap align-items-center ms-auto list-unstyled" id="userListSelect">
       
     




      

			</ul>
			
		</div>
	</nav>
    
    
    `;

    return html;
}


//add userList and avatar icon menu to navbar
async function getUserList(user) {
  let url = `https://mysite.boxcar.site/users/`;
  let userlist = [];
  //select menu
  let html = `      <select name="userList" id="userList" class="form-control m-0 p-1" style="min-width:150px;"     
              onchange="setUserId(this.value)">`;
  try {
    const response = await fetch(url);

    try {
        const data = await response.json();

        data.forEach(p => {
          userlist.push(p.displayName || p.username)
          html += `<option value="${p.displayName || user.username}">  ${p.displayName || user.username}  </option>`
        }); 

        html += `      </select>`;


        // icon menu at navbar 
        html += `        <li class="nav-item ms-2 dropdown">
					<a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
						<img class="avatar-img rounded-2 me-1" src=" ${user.avatar} " alt=" ${user.displayName || user.username} ">
					</a>
          <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
            
            <li class="px-3">
              <div class="d-flex align-items-center position-relative">
               
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle" src=" ${user.avatar} " alt=" ${user.displayName || user.username} " alt="avatar">
                </div>
                <div>
                  <a class="h6 stretched-link" href="#"> ${user.displayName || user.username} </a>
                  <p class="small m-0">Web Developer</p>
                </div>
              </div>
              <a class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="https://mysite.boxcar.site/admin">Backend</a>
            </li>
           
            <li><a class="dropdown-item" href="settings.html"><i class="fa fa-cog" aria-hidden="true"></i> Settings & Privacy</a></li>
            
            <li> 
              <a class="dropdown-item" href="https://mysite.boxcar.site/admin" target="_blank">
                <i class="fa fa-book" aria-hidden="true"></i> Documentation
              </a> 
            </li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item bg-danger-soft-hover" href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign Out</a></li>
            <li> <hr class="dropdown-divider"></li>
          </ul>
				</li>`


        document.getElementById('userListSelect').innerHTML += html;   
        document.getElementById('userList').value = ''; 
                 
    }
    catch (parseError) {
        console.log('Failed to parse JSON: ' + parseError);
    }
} catch (networkError) {
    console.log('Network request failed: ', networkError);
}
}




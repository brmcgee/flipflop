
// let userListElem = document.getElementById('userList');
// let userListUrl = `https://mysite.boxcar.site/users/`;

// async function fetchUserName(){
//   let userList = [];
//   let html;
//   try {
//       const response = await fetch(userListUrl);
//       let html;
//       try {
//           const data = await response.json();
//           data.map(u => {
//             if (!userList.includes(u.displayName.trim())) { userList.push(u.displayName.trim()) }       
//           });
//           for (let i=0; i< userList.length; i++){
//             html +=  `Brian `;
//           }
//           return html;
          
//       }
//       catch (parseError) {
//           console.log('Failed to parse JSON: ' + parseError);
//       }
//     } catch (networkError) {
//         console.log('Network request failed: ', networkError);
//   }
// }
// function htmlUserSelect (item) {
//   let html = `<option value= " ${item} "> ${item} </option> `;
//   return html;
// }



function setNavbar(user){
  
    let html =`
    

	<nav class="navbar navbar-icon bg-dark">
		<div class="container-fluid">
           
      <a class="btn text-secondary py-0 me-sm-3 sidebar-start-toggle">
        <i class="bi bi-justify-left fs-3 lh-1"></i>
      </a>

			
			<a class="navbar-brand d-none d-sm-block" href="index.html">
				<img class=" light-mode-item navbar-brand-item text-light small" src=" ${randomBg(bg)} " alt=" ${user.displayName}">
			</a>
		

			<ul class="nav flex-nowrap align-items-center ms-auto list-unstyled">
       
      <select name="userList" id="userList" class="form-control m-0 p-1" style="min-width:150px;"     
              onchange="setUserId(this.value)">
                <option value="">...select user</option>
                <option value="Lady G">Lady G</option>
                <option value="Doc">Doc</option>
                <option value="Guest">Guest</option>
                <option value="Captain Ron">Captain Ron</option>
                <option value="Brian M">Brian M</option>
                <option value="Cricket">Cricket</option>
                <option value="Juice">Juice</option>
                <option value="Marge">Marge</option>
                <option value="Snoop D">Snoop D</option>
                <option value="Hootie">Hootie</option>
                <option value="Trump">Trump</option>
                <option value="Zeva">Zeva</option>
                <option value="Mr. Froggy">Mr. Froggy</option>
                <option value="Pete">Pete</option>
                <option value="Hester">Hester</option>
                <option value="Donald Ducky">Donald Ducky</option>
                <option value="News">News</option>
                <option value="Jinko">Jinko</option>
                <option value="Casper">Casper</option>
                <option value="Lucy L">Lucy L</option>
                <option value="Big Al">Big AL</option>
                <option value="Doc">Doc</option>
                <option value="Gecko">Gecko</option>
                <option value="News">News</option>
                <option value="Lisa">Lisa</option>
                <option value="Roku">Roku</option>
                <option value="Paul">Paul</option>                              
      </select>
      
        <li class="nav-item ms-2 dropdown">
					<a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
						<img class="avatar-img rounded-2" src=" ${user.avatar} " alt=" ${user.displayName} ">
					</a>
          <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
            
            <li class="px-3">
              <div class="d-flex align-items-center position-relative">
               
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle" src=" ${user.avatar} " alt=" ${user.displayName} " alt="avatar">
                </div>
                <div>
                  <a class="h6 stretched-link" href="#"> ${user.displayName} </a>
                  <p class="small m-0">Web Developer</p>
                </div>
              </div>
              <a class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="https://mysite.boxcar.site/admin">Backend</a>
            </li>
           
            <li><a class="dropdown-item" href="settings.html"><i class="fa fa-cog" aria-hidden="true"></i> Settings & Privacy</a></li>
            <li> 
              <a class="dropdown-item" href="https://mysite.boxcar.site/" target="_blank">
                <i class="fa fa-phone-square" aria-hidden="true"></i> Support
              </a> 
            </li>
            <li> 
              <a class="dropdown-item" href="https://mysite.boxcar.site/admin" target="_blank">
                <i class="fa fa-book" aria-hidden="true"></i> Documentation
              </a> 
            </li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item bg-danger-soft-hover" href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign Out</a></li>
            <li> <hr class="dropdown-divider"></li>
          </ul>
				</li>
			</ul>
			
		</div>
	</nav>
    
    
    `;

    return html;
}
function editUser() {
        // let username = 'BRian'
        let username = document.getElementById('eUsername').value;
        let avatar = document.getElementById('eAvatar').value;
        let feeling = document.getElementById('eFeeling').value;
        let hero = document.getElementById('eHero').value;
        let email = document.getElementById('eEmail').value;
        let password = document.getElementById('ePassword').value;
        let userid = document.getElementById('eId').value;
        
        let user = {
            'username' : username,
            'avatar' : avatar,
            'feeling' : feeling,
            'hero' : hero,
            'email' : email,
            'password' : password,
            'userid' : userid
        }
        handleEditUser(user)
}


async function handleEditUser(user) {

    let url = `http://127.0.0.1:5000/edit-user-info`;
    url = `https://mysite.boxcar.site/edit-user-info`;
    let params = `author=${user.username}&&authId=${user.userid}&&avatar=${user.avatar}&&feeling=${user.feeling}&&email=${user.email}&&password=${user.password}`;
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            // console.log(`Connected! user ${user.userid} updated!`);
            root.innerHTML += `
            
            
<div class="card mb-3 mx-auto" style="max-width: 740px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${user.hero}" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${user.username}</h5>
        <p class="card-text">${user.feeling}</p>
        <p class="card-text"><small class="text-muted">${user.email}</small></p>
      </div>
    </div>
  </div>
</div>
            
            
            
            `;  
        }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
}
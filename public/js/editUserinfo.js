function editUser() {

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

    let url = `http://127.0.0.1:5000/edit-user-info`;  //debug only
    url = `https://mysite.boxcar.site/edit-user-info`;

    document.getElementById('editUserinfoBtn').classList.add('disabled');

    let params = `author=${user.username}&&authId=${user.userid}&&avatar=${user.avatar}&&feeling=${user.feeling}&&email=${user.email}&&password=${user.password}&&hero=${user.hero}`;
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

    
        if (this.readyState == 4 && this.status == 200) {
         
            // render userCard() about() component and getUserList() to select
            navbarRoot.innerHTML = setNavbar(user);
            userRoot.innerHTML = userCard(user);


            aboutRoot.innerHTML = about(user);      
            getUserList(user); 
            

            


            
            alertStatus(user.username, '', 'success', `<i class="fa fa-user ms-2 me-1" aria-hidden="true"></i> You have succesfully updated your info! `)

            const myModal = document.getElementById('modalEditUserInfo'); 
            const modal = bootstrap.Modal.getInstance(myModal); 
            modal.hide(); 
        }
      };
      
      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
}
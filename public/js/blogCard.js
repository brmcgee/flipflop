
let arr = [];
var acc = document.getElementsByClassName("commentBtn");
let fetchHTML = '';
let postIdURL = 'https://mysite.boxcar.site/posts';
let divId = 'blogPanel'
let postId = document.getElementById('getId').value;
let panel = document.getElementById(divId);

let loading = true;



// comment section open panel 



panel.classList.add('loader');
panel.classList.add('mx-auto');

async function getPostById(file, destination, id) {
    let container = document.getElementById(destination);
    let data = await fetch(`${file}/${id}`);
    let result = await data.json();

    let html = blogCard(result);
      loading = false;
      container.innerHTML = html;
      panel.classList.remove('loader');

    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var p = document.querySelector('.commentPanel');
        if (p.style.maxHeight) {
          p.style.maxHeight = null;
        } else {
          p.style.maxHeight = panel.scrollHeight + "px";
          getCommentById(id);
        } 
    });
    }
    

}

// com = {user: user, display: display, avatar: avatar, comment: comment, post: post}
function makeCommentComponent (r) {
  let html = `
  <div class="d-flex justify-content-end  m-0 p-0 mt-1 me-2">
            <!-- Avatar -->
            <div class="avatar avatar-xs">
                <img class="rounded-circle mt-1" src="${r.avatar}" alt="${r.display}" width="40" height="40">
            </div>
            <div class="ms-2">
            <!-- Comment by -->
            <div class="rounded rounded-start-top-0 px-3 py-0 " style="background-color: rgb(233, 231, 231); border-radius:10px;">
              
              <p class="small mb-0  p-0 m-0"><strong>${r.author || r.display}</strong></p>
              <div class="d-flex justify-content-between">
                <p class="mb-0 ">${r.comment} </p>
              </div>
            </div>
            <p class="small">${r.date || 'Just now ...'}</p>

          </div>
        </div>
  `;
  return html;

}
// page load beginning post 
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(firstPost, 2000)
})
function firstPost(){
  panel.innerHTML = getPostById(postIdURL, divId, postId);
}

function populateUserIdInput(t) {
 document.getElementById('userId').value = t;
 getUser(t);
}


function getId(t) {
    getPostById(postIdURL, divId, t)
}

async function getCommentById(id) {
    let cont = document.querySelector(`.commentPanel`);
    cont.innerHTML = '';
    let data = await fetch(`https://mysite.boxcar.site/comments/${id}`);
    let result = await data.json();
    result.forEach(r => {
        // cont.innerHTML += `<li>` + r.comment + `${r.author}</li><br>`
        let html = makeCommentComponent(r)
        cont.innerHTML += html;
    });

}

let userChip = [];
async function getUser(i) {

    let data = await fetch(`https://www.mysite.boxcar.site/users/${i}`);
    let r = await data.json();

    document.getElementById('user').value = r.userId;
    document.getElementById('display').value = r.displayName;
    document.getElementById('password').value = r.user_password;
    document.getElementById('email').value = r.email;
    document.getElementById('avatar').value = r.avatar;
    document.getElementById('post').value = document.getElementById('getId').value;
    let comment = document.getElementById('addComment').value;
      document.getElementById('comment').value = comment;
    let userImg = r.avatar;
      (document.getElementById('userAvatarImg').src) = userImg;
    
}

function handleAddComment() {
  
    let user = document.getElementById('user').value;
    let display = document.getElementById('display').value;
    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('addComment').value;
    let post = document.getElementById('getId').value;
    

    let com = {user: user, display: display, avatar: avatar, comment: comment, post: post}
    let urlapi = `https://mysite.boxcar.site/post-comment`;
    // urlapi = `http://127.0.0.1:5000/post-comment`;

    if (display == '' )  { alert('Please select user details'); return null}
    if (comment == '') { alert('Please enter comment'); return null}
    if (post == '') { alert('Please get post ID'); return null}
    if (comment == '') { document.getElementById('comment').value = document.getElementById('addComment') };

    var params = `display=${com.display}&&user=${com.user}&&comment=${com.comment}&&avatar=${com.avatar}&&post=${com.post}`;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let html = makeCommentComponent(com);
            document.querySelector('.commentPanel').innerHTML += html;
            // document.getElementById('user').value = '';
            // document.getElementById('display').value = '';
            // document.getElementById('password').value = '';
            // document.getElementById('email').value = '';
            // document.getElementById('avatar').value = '';
            // document.getElementById('post').value = '';
            document.getElementById('comment').value = '';
            // document.getElementById('userId').value = '';
            document.getElementById('addComment').value = '';


        }
    };
    
    xmlhttp.open("POST", urlapi, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);

}












function blogCard(obj) {

    let html = `
    
    <div class="card mb-2 mx-auto" style="max-width:27rem; ">

        <div class="card-header d-flex align-items-center">
          <span class="avatar bg-333 p-1 fs-5 rounded">
            <img src="${obj.authorAvatar}" 
                class="rounded-circle" width="70px" height="70px" alt="">
          </span>
          <div class="ms-3">
            <h6 class="mb-0 fs-sm">${obj.title}</h6>
            <span class="text-muted fs-sm">${obj.rDate}</span>
          </div>
        </div>
        <img src="${obj.img}" class="card-img-top" alt="${obj.title}">
        
        <div class="card-body">
          <p class="card-text">
          ${obj.body}
          </p>
          <p><span class="alert my-0 py-2 bg-333 text-white float">${obj.category}</span ><span class="small float-end me-2">${obj.author}</span></p>

          
        </div>

        <div class="card-footer">
            <div class="d-flex mb-2">
                <label for="comment" class="commentLabel" hidden>Comment</label>
                <input id="addComment" type="text" class="commentText">
                <button id="commentAddBtn" onclick='handleAddComment()'>Add</button>
            </div> 

            <button id="commentBtn" class="commentBtn">Comments</button>
            <div class="commentPanel">
              <p>${postId}</p>
            </div> 
    
        </div>
      </div>    
    
    
    `;

    return html;
}



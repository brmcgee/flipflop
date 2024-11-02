let arr = [];
var acc = document.getElementsByClassName("commentBtn");
let fetchHTML = '';
let postIdURL = 'https://mysite.boxcar.site/posts';
let divId = 'blogPanel'
let postId = document.getElementById('getId').value;
let panel = document.getElementById(divId);

let loading = true;

document.getElementById('userList').addEventListener('onchange', () => {
  alert('Done')
})


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

    let userName = document.getElementById('userList').value
    document.getElementsByName('comPlaceholder')[0].placeholder = '... commenting as ' + userName;
    document.getElementsByName('comPlaceholder')[0].style.fontSize = '12px';

    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var p = document.querySelector('.commentPanel');
        if (p.style.maxHeight) {
          p.style.maxHeight = null;
        } else {
          p.style.maxHeight = panel.scrollHeight - 100 + "px";
          getCommentById(id);
          
        } 
    });
    }
    

}

// com = {user: user, display: display, avatar: avatar, comment: comment, post: post}
function makeCommentComponent (r) {
  let html = `
  <div class="d-flex justify-content-end  m-0 p-0 mt-1">
            <!-- Avatar -->
            <div class="avatar avatar-xs">
                <img class="rounded-circle mt-1" src="${r.avatar}" alt="${r.display}" width="40" height="40">
            </div>
            <div class="ms-2">
            <!-- Comment by -->
            <div class="rounded rounded-start-top-0 px-3 py-0 " 
                  style="background-color: rgb(233, 231, 231); border-radius:10px;">
              
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


setTimeout(firstPost, 100)

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
    let i=0;
    result.forEach(r => {
        let html = makeCommentComponent(r);
        cont.innerHTML += html;
    });

    // cont.innerHTML += commentBar;
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

    document.getElementsByName('comPlaceholder')[0].placeholder = '... commenting as ' + r.displayName;
    document.getElementsByName('comPlaceholder')[0].style.fontSize = '12px';

    
}
let commentBar =  `
  
<div id="commentBar"class=" bg-light  commentInput d-flex justify-content-between">
  <label for="comment" class="commentLabel" hidden>Comment</label>
  <input id="addComment" type="text" class="commentText" 
      placeholder="..commenting as ">
  <button id="commentAddBtn" onclick='handleAddComment()' class="bg-transparent">
    <span class=" material-symbols-outlined">add</span>
  </button>
</div> 
`;

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
            let commentListElem = document.querySelector('.commentPanel');
            commentListElem.innerHTML += html;
            document.getElementById('comment').value = '';
            document.getElementById('addComment').value = '';


        }
    };
    
  
    xmlhttp.open("POST", urlapi, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);

}



function blogCard(obj) {

    let html = `
    
    <div class="blog-card card mb-2 mx-auto mt-5" style="max-width:27rem; ">

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
            <p><span class="alert my-0 py-2 bg-333 text-white float">${obj.category}</span >
            <span class="small float-end me-2">${obj.author}</span>
          </p>

          
        </div>

        <div class="card-footer">

          <div class="comBtnGroup">
            <button id="commentBtn" class="commentBtn"> 
              <span class="material-symbols-outlined">comment</span>
            </button>
            

            <div id="commentBar"class=" bg-light commentInput p-1 d-flex my-2 mb-4 justify-content-between">
              <label for="comment" class="commentLabel" hidden>Comment</label>
              <input id="addComment" type="text" class="commentText" name="comPlaceholder" 
                  placeholder=".... post a comment">
              <button id="commentAddBtn" onclick='handleAddComment()' class="bg-transparent">
                <span class=" material-symbols-outlined">add</span>
              </button>
            </div> 

            <div class="commentPanel">
           
            </div> 
          </div>
    
        </div>
      </div>    
    
    
    `;


    html = `
    <style>
    
.widget {
    border: none;
    box-shadow: 0 2px 0 rgba(0,0,0,.07);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    background: #fff;
    padding: 20px;
    display: block;
    max-width: 27rem;
}

.widget-blog-cover {
    overflow: hidden;
    padding-top: 60%;
}

.widget-blog-cover, .widget-stat-header {
    position: relative;
    border-radius: 5px 5px 0 0;
    margin: -20px -20px 20px;
}

.animation-grow-hover, .widget-blog .widget-blog-cover img {
    transition: all .1s ease-in-out;
}

.widget-blog-cover img:hover{
    max-width: 110%;
    min-height: 110%;
    margin-left: -5%;
    margin-top: -5%;    
}

.widget-blog-cover img {
    position: absolute;
    // left: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    min-height: 100%;
}

.widget-blog-author {
    margin: -20px -20px 0;
    padding: 10px 20px;
}

.widget-blog-author-image {
    float: left;
    margin-top: -30px;
    padding: 5px;
    border-radius: 70px;
    width: 70px;
    height: 70px;
    background: #fff;
    position: relative;
}

.widget-blog-author-image img {
    max-width: 100%;
    border-radius: 70px;
}

.text-muted {
    color: #aab3ba;
}
.f-s-11 {
    font-size: 11px!important;
}

    </style>
     <div class="col-xs-12 col-sm-11">
        <div class="widget widget-blog">
            <div class="widget-blog-cover">
                <img src="${obj.img}" alt="">
            </div>
            <div class="widget-blog-author">
                <div class="widget-blog-author-image">
                    <img src="${obj.authorAvatar}" alt="${obj.title}">
                </div>
                <div class="widget-blog-author-info">
                    <h5 class="m-t-0 m-b-1">${obj.author}</h5>
                    <p class="text-muted m-0 f-s-11">${obj.category}</p>
                </div>
            </div>
            <div class="widget-blog-content">
                <h5>${obj.title}</h5>
                <p>
            ${obj.body}     
           </p>
            </div>
                    <div class="card-footer">

          <div class="comBtnGroup">
            <button id="commentBtn" class="commentBtn"> 
              <span class="material-symbols-outlined">comment</span>
            </button>
            

            <div id="commentBar"class=" bg-light commentInput p-1 d-flex my-2 mb-4 justify-content-between">
              <label for="comment" class="commentLabel" hidden>Comment</label>
              <input id="addComment" type="text" class="commentText" name="comPlaceholder" 
                  placeholder=".... post a comment">
              <button id="commentAddBtn" onclick='handleAddComment()' class="bg-transparent">
                <span class=" material-symbols-outlined">add</span>
              </button>
            </div> 

            <div class="commentPanel">
           
            </div> 
          </div>
    
        </div>
        </div>
    </div>
    
    `
    return html;
}


{/* <div class="d-flex mb-2">
<label for="comment" class="commentLabel" hidden>Comment</label>
<input id="addComment" type="text" class="commentText">
<button id="commentAddBtn" onclick='handleAddComment()'>Add</button>
</div>  */}
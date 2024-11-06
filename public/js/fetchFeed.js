const feedRoot = document.getElementById('feedRoot');  



function createPostTemplate (post, user) {
  // set comment array for length 
  

  let html =`

      <div class="post card mx-auto mb-2"
           data-post=${post.blogId}
           id= feedPost${post.blogId} >
       
      <div class="card-header border-0 pb-0">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
             
            <div class="avatar avatar-story me-2">
              <a href="#!"> <img class="avatar-img rounded-circle" src=" ${post.authorAvatar} " alt=" ${post.title} "> </a>
            </div>
             
            <div>
              <div class="nav nav-divider">
                <h6 class="nav-item card-title mb-0"> <a href="#!"> ${post.author} </a></h6>
                <span class="nav-item small"> 2hr</span>
              </div>
              <p class="mb-0 small"> ${post.title} </p>
            </div>
          </div>
          
          <div class="dropdown">
            <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" 
               id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </a>
             
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">



              <li>
                <a id="editBtn" class="dropdown-item alert alert-info py-1" data-id="${post.blogId}" width="30px" href="#!" 
                  data-bs-toggle="modal" data-bs-target="#editPost" onclick="editPost(${post.blogId})" > 
                  <i class="bi bi-image-fill text-success pe-2"></i>Edit Post</a>
              </li>





              <li><a class="dropdown-item" href="#"> <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow ${post.author} </a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
              <li> <a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
            </ul>
          </div>
           
        </div>
      </div>
  
      <div class="card-body">
        <p> ${post.body} </p>
         
        <img class="card-img" src=" ${post.img} " alt="${post.title}">
        
        <ul class="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 my-3">
          <li class="nav-item">
            <a class="nav-link mb-0 active" href="#!">
             <i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked (56)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mb-0" href="#!">
            <i class="fa fa-comment" aria-hidden="true"></i> Comments ( <span id="text-primary">${post.commentCount()}</span> )</a>
          </li>
          
          <li class="nav-item dropdown">
            <a href="#" class="nav-link mb-0" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-share" aria-hidden="true"></i> Share (3)
            </a>
               
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
              <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
            </ul>
          </li>
           
          <li class="nav-item">
            <a class="nav-link mb-0" href="#!"> <i class="fa fa-paper-plane" aria-hidden="true"></i> Send</a>
          </li>
        </ul>
        
`;

html += commentAdd(user, post.blogId);


// comment container holds all comment wrap 
html += `<div data-comment='${post.blogId}' id="commentContainer${post.blogId}" class='comment-container d-flex flex-column'>`

// insert comments here if comment length > 0

if (post.comment.length > 0) {  
  // record object 
  let rec = {
    'postId' : post.blogId,
    'userId' : user.userId,
    'comment' : { 'id' : post.comment[0].id,
                  'postId' : post.comment[0].postId,
                  'author' : post.comment[0].author,
                  'date' : post.comment[0].date,
                  'avatar' : post.comment[0].avatar,
                  'comment' : post.comment[0].comment
                }
  };
  html += commentWrapAll(rec.postId, rec.userId, rec.comment);  
}
// end insert comments 

// footer area 
html += 
`
      </div>
    </div>
  

    
    <div class="card-footer border-0 pt-0"  id="loadMore${post.blogId}">
      
      
        <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" 
                id="commentMenu${post.blogId}" data-bs-toggle="button" aria-pressed="true" 
                onclick="loadAllComments(${post.blogId}, ${user.userId})">
          <div class="spinner-dots me-2" >
            <span class="spinner-dot"></span>
            <span class="spinner-dot"></span>
            <span class="spinner-dot"></span>
          </div>
          Load more comments 
        </a>
      </div>
    
    </div>  
`;
  return html;
}

// component 
function commentAdd(user, postId){
    
        let html =`
        <div id="commentAddContainer${postId}" class="comment-add d-flex mb-3">
           
           <div class="avatar avatar-xs me-2">
             <a href="#!"> <img class="avatar-img rounded-circle" src=" ${user.avatar} " alt=""> </a>
           </div>
         
           <form class="position-relative w-100">
             <textarea id= "addCommentTA${postId}" class="form-control pe-4 bg-light" data-autoresize rows="1" placeholder="Add a comment..."></textarea>
             <input hidden id="userAvatar${user.userId}" value="${user.avatar}">
             <input hidden id="userDisplay${user.userId}" value="${user.displayName}">
             
             <div class="position-absolute top-0 end-0">
               <button class="btn" type="button">🙂</button>
             </div>
 
             <button id="btnAddComment${postId}" type="button"
                    onclick="handleAddComment(${postId}, ${user.userId})" class="btn btn-sm btn-primary mb-0 rounded mt-2" >Post</button>
           </form>
         </div>
         
     `;
     return html;
    
}

// function commentWrap(post, user){
//     let html;
    
    
//     html = `
    
//         <ul class="comment-wrap list-unstyled" data-userId="${user.userId}" data-postId="${post.blogId}">
          
//           <li class="comment-item">
//             <div class="d-flex position-relative">
//               <div class="comment-line-inner"></div>
             
//               <div class="avatar avatar-xs">
//                 <a href="#!"><img class="avatar-img rounded-circle" src=" ${post.comment[0].avatar} " alt="${post.comment[0].author}"></a>
//               </div>
//               <div class="ms-2">
               
//                 <div class="bg-light rounded-start-top-0 p-3 rounded">
//                   <div class="d-flex justify-content-between">
//                     <h6 class="mb-1"> <a href="#!"> ${post.comment[0].author} </a></h6>
//                     <small class="ms-2"> ${post.comment[0].date} </small>
//                   </div>
//                   <p class="small mb-0"> ${post.comment[0].comment}</p>
//                 </div>
                
//                 <ul class="nav nav-divider py-2 small">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#!"> Like (3)</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#!"> Reply</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#!"> View 5 replies</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </li>
          
//         </ul>    
    
//     `;
    

//     return html;
// }

const url = `https://mysite.boxcar.site/record/`;
async function fetchFeed(user) {
  feedRoot.innerHTML = '';
  
    try {
        const response = await fetch(url);

        try {
            const data = await response.json();

            // document.getElementById('friendsRoot').innerHTML = friends(user, data)
            document.getElementById('photosRoot').innerHTML = photos(user, data);

            data.forEach(p => {
              let post = {
                            'blogId' : p.blogId,
                            'author' : p.author,
                            'title' : p.title,
                            'body' : p.body,
                            'category' : p.category,
                            'img' : p.img,
                            'rDate' : p.regDate,
                            'authorId' : p.authorId,
                            'authorAvatar' : p.authorAvatar,
                            'comment' : p.comment,
                            'commentCount' : function () { return this.comment.length}
              }
                  
             
              feedRoot.innerHTML += createPostTemplate(post, user);  
            });
            
            
              
        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    }
}


function handleAddComment(postid, userid) {
  // console.log(postid, userid)
    let urlapi = `https://mysite.boxcar.site/post-comment`;
    let user = userid;
    let display = document.getElementById(`userDisplay${userid}`).value;
    let avatar = document.getElementById(`userAvatar${userid}`).value;
    let comment = document.getElementById(`addCommentTA${postid}`).value;
    let post = postid;
      if (comment == '') { alert('Please enter comment'); return null}
    
    let com = {'user': user, 'author': display, 'avatar': avatar, 'comment': comment, 'post': post, 'date': 'just now ..'}
    let params = `display=${com.author}&&user=${com.user}&&comment=${com.comment}&&avatar=${com.avatar}&&post=${com.post}`;
       
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById(`addCommentTA${postid}`).value = '';  
          document.getElementById(`commentContainer${postid}`).innerHTML += commentWrapAll(postid, userid, com)
        }
      };
      
      xmlhttp.open("POST", urlapi, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
}
function commentWrapAll(postId, userId, comment) {
  let html;    
  
  html = `
    
  <ul class="comment-wrap list-unstyled" data-userId="${userId}" data-postId="${postId}">
    
    <li class="comment-item">
      <div class="d-flex position-relative">
        <div class="comment-line-inner"></div>
       
        <div class="avatar avatar-xs">
          <a href="#!"><img class="avatar-img rounded-circle" src=" ${comment.avatar} " alt="${comment.author}"></a>
        </div>
        <div class="ms-2">
         
          <div class="bg-light rounded-start-top-0 p-3 rounded">
            <div class="d-flex justify-content-between">
              <h6 class="mb-1"> <a href="#!"> ${comment.author} </a></h6>
              <small class="ms-2"> ${comment.date} </small>
            </div>
            <p class="small mb-0"> ${comment.comment}</p>
          </div>
          
          <ul class="nav nav-divider py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!"> Like (3)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> Reply</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> View 5 replies</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    
  </ul>    

`;
return html;
};
function handleClickCommentContainer(postId) {
  let container = document.getElementById(`commentContainer${postId}`);
  container.innerHTML = '';
}
// write to commentContainer innerHTML
async function loadAllComments(post, user){

  let html = '';
  let url = `https://mysite.boxcar.site/comments/${post}/`;

  try {
    const response = await fetch(url);
    try {
        const data = await response.json();
        data.forEach(c => {
          html += commentWrapAll(Number(post), Number(user), c);
        })
        // document.getElementById(`loadMore${post}`).innerHTML +=
        //    `<div class="card-footer border-0 pt-0 d-flex align-items-baseline"  id="loadMore${post.blogId}">
      
        //     <div class="col-1 col-sm-1 ">
        //         <span class="alert alert-dark text-dark p-1 px-2 m-0 text-center" width="30px" onclick="handleClickCommentContainer(${post})">
        //           <i class="fa fa-arrow-up" aria-hidden="true"></i></span>
        //       </div>
        //       <a href="#!" role="button" class="col-sm-5 col-2 btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" 
        //           id="commentMenu${post}" data-bs-toggle="button" aria-pressed="true" 
        //           onclick="loadAllComments(${post}, ${user})">
        //          <div class="spinner-dots me-2" >
        //             <span class="spinner-dot"></span>
        //             <span class="spinner-dot"></span>
        //             <span class="spinner-dot"></span>
        //            </div>
        //         Load more comments 
        //       </a>
        
              
        //       <div class="col-9"></div>
        //   </div>`;
        document.getElementById(`commentContainer${post}`).innerHTML = html;   
    }
    catch (parseError) {
        console.log('Failed to parse JSON: ' + parseError);
    }
} catch (networkError) {
    console.log('Network request failed: ', networkError);
}
};








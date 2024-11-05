const feedRoot = document.getElementById('feedRoot');  


function createPostTemplate (post, user) {

  let html =`
 
      <div class="card mx-auto mb-2"
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
            <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </a>
             
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
              <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
            </ul>
          </div>
           
        </div>
      </div>
  
      <div class="card-body">
        <p> ${post.body} </p>
         
        <img class="card-img" src=" ${post.img} " alt="Post">
        
        <ul class="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 my-3">
          <li class="nav-item">
            <a class="nav-link mb-0 active" href="#!">
             <i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked (56)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mb-0" href="#!">
            <i class="fa fa-comment" aria-hidden="true"></i> Comments ( ${post.comment.length} )</a>
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

html += commentAdd(user);
html += commentWrap(post);
html += 
`
    </div>
  

    
    <div class="card-footer border-0 pt-0">
      
      
        <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
          <div class="spinner-dots me-2">
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

function commentAdd(user){
    
        let html =`
        <div class="comment-add d-flex mb-3">
           
           <div class="avatar avatar-xs me-2">
             <a href="#!"> <img class="avatar-img rounded-circle" src=" ${user.avatar} " alt=""> </a>
           </div>
         
           <form class="position-relative w-100">
             <textarea class="form-control pe-4 bg-light" data-autoresize rows="1" placeholder="Add a comment..."></textarea>
             
             <div class="position-absolute top-0 end-0">
               <button class="btn" type="button">🙂</button>
             </div>
 
             <button class="btn btn-sm btn-primary mb-0 rounded mt-2" type="submit">Post</button>
           </form>
         </div>
         
     `;
     return html;
    

}

function commentWrap(post){
    let html;
    if (post.comment.length >= 0) {
    
    html = `
    
        <ul class="comment-wrap list-unstyled">
          
          <li class="comment-item">
            <div class="d-flex position-relative">
              <div class="comment-line-inner"></div>
             
              <div class="avatar avatar-xs">
                <a href="#!"><img class="avatar-img rounded-circle" src=" ${post.comment[0].avatar} " alt=""></a>
              </div>
              <div class="ms-2">
               
                <div class="bg-light rounded-start-top-0 p-3 rounded">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-1"> <a href="#!"> ${post.comment[0].author} </a></h6>
                    <small class="ms-2"> ${post.comment[0].date} </small>
                  </div>
                  <p class="small mb-0"> ${post.comment[0].comment} </p>
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
    }

    return html;
}


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
              
                  feedRoot.innerHTML += createPostTemplate(p, user);  

            });
            
            
              
        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    }
}







// invoked at edit button 


function editPost(postid){
  getPostById(postid)
  return;
}

async function getPostById(postid) {
    let postIdUrl = `https://mysite.boxcar.site/posts/${postid}`;
    let modalBodyElem = document.getElementById('editBody'); 
    try {
        const response = await fetch(postIdUrl);
        try {
            const data = await response.json();

                let html = modalBodyHtml(data);
                modalBodyElem.innerHTML = html;                      
              
        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    }  
}

async function handleEditPost(postid) {
    let handleEditApi = `https://mysite.boxcar.site/update-post-data`
    let postId = postid;
    let author = document.getElementById('eAuthor').value;
    let authId = document.getElementById('eAuthorId').value;
    let avatar = document.getElementById('eAvatar').value
    let title = document.getElementById('eTitle').value;
    let body = document.getElementById('eBody').value;
    let category = document.getElementById('eCategory').value;
    let img = document.getElementById('eImg').value;
    let date = document.getElementById('eDate').value;

    let params = `post=${postId}&&author=${author}&&authId=${authId}&&body=${body}&&category=${category}&&title=${title}&&fileToUpload=${img}&&avatar=${avatar}&&date=${date}`;
    let post = {'author' : author, 'rDate': date, 'title': title, 'img': img, "body": body, 'authorAvatar': avatar, 'blogId' : postId, 'comment' : [], 'commentCount' : function () { return this.comment.length}}
    let user = {'displayName' : author, 'avatar' : avatar};

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
   
            const myModal = document.getElementById('editPost'); 
            const modal = bootstrap.Modal.getInstance(myModal); 
            modal.hide(); 

            alertStatus(author, title, 'success', 'updated');

            // reset individual post in dom 
            document.getElementById(`feedPost${postId}`).innerHTML = createPostTemplate (post, user)
        }
      };
      
      xmlhttp.open("POST", handleEditApi, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
    
}


// modal body html 
function modalBodyHtml(post) {
    t = post.title.trim();
    i = post.img.trim();
    b = post.body.trim();
    let html = `
      
    <div class="container-fluid mt-2 border px-2 py-1 bg-white" style="max-width:620px;">
         <form action="http://mysite.boxcar.site/update-post-data" method="POST" class="form-group border-0">
           <div class="row">
               
               <div class="col-12">
                   <label for="title">Title</label>
                   <textarea type="text" id="eTitle" rows="4" name="title"class="form-control bg-light  my-1" required>${t}</textarea>
               </div>

               <label for="category">Category</label>
               <div class="col-12 d-flex justify-content-between">
                   
                    <input type="text" id="eCategory" name="category" value="${post.category}"  class=" me-2 form-control bg-light" required> 
                    <img src="${i}" id="imgE" class="img-fluid ms-1 rounded rounded-2" width="200px p-1" alt="${post.author}, invalid URL.">

               </div>
               <div class="col-12">
                   <label for="body">Post Content</label>
                   <textarea  type="text" id="eBody" name="body" class="form-control bg-light  my-1" rows="11" required>${b}</textarea>
               </div>

               <div class="form-group p-1 row">
                   <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                     <label for="text">URL for image</label>
                        <input type="text" id="eImg" rows="7" value="${i}" name="fileToUpload" onchange="document.getElementById('imgE').src = this.value"
                        id="fileToUpload" class="form-control bg-light  my-1" required" ></input>
                   </div>
               </div>

               <div class="col-12">
                   <label for="author" hidden >Author</label>
                   <input type="text" hidden id="eAuthor" name="author" value="${post.author}"  class="form-control bg-light text-center"> 
               </div>
               <div class="form-group p-1 row">
                   <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                       <label for="text" hidden >URL for avatar</label>
                       <input type="text" hidden id="eAvatar" value="${post.authorAvatar}" name="avatar" class="form-control bg-light my-1 text-center" placeholder="author avatar">
                   </div>
               </div>

               <div class="col-12">
                   <label for="authId" hidden >Auth ID</label>
                   <input type="text" hidden id="eAuthorId" name="authId" value="${post.authorId}" class="form-control bg-light  my-1 text-center" >
               </div>
               <div class="col-6">
                   <label for="date" hidden>Date</label>
                   <input type="text" hidden id="eDate" name="date" value="${post.rDate}" class="form-control bg-light  my-1 text-center">
               </div>

               <div class="col-6">
                   <label for="postId" hidden >Post Id</label>
                   <input type="number" hidden id="ePostId" name="post" value="${post.blogId}" class="form-control bg-light  my-1 text-center" >
               </div>
            </div> 
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal"><i class="fa fa-window-close px-2" aria-hidden="true"></i>Close</button>
                <button onclick="handleEditPost(${post.blogId})" type="button" value="Submit" class="btn btn-success-soft "><i class="fa fa-plus-circle px-2" aria-hidden="true"></i>Submit</button>
            </div>
    </form>
</div>       
`;
    return html;
}
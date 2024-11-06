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
                console.log(data);
                modalBodyElem.innerHTML = html;                      
              
        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    }  
}










// modal body html 
function modalBodyHtml(post) {
    let html = `
      
    <div class="container-fluid mt-2 border px-2 py-1 bg-white" style="max-width:620px;">
         <form action="http://mysite.boxcar.site/update-post-data" method="POST" class="form-group border-0">
           <div class="row">
           
               <div class="col-12">
                   <label for="title">Title</label>
                   <input type="text" name="title" value="${post.title}" class="form-control bg-light  my-1 text-center" required> 
               </div>
               <div class="col-12">
                   <label for="category">Category</label>
                   <input type="text" name="category" value="${post.category}"  class="form-control bg-light text-center" required> 
               </div>
               <div class="col-12">
                   <label for="body">Post Content</label>
                   <textarea  type="text" name="body" class="form-control bg-light  my-1 text-center" rows="10" required>
                    ${post.body}
                   </textarea>
               </div>

               <div class="form-group p-1 row">
                   <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                     <label for="text">URL for image</label>
                     <input type="text" name="fileToUpload" id="fileToUpload" value="${post.img}" class="form-control bg-light text-center my-1" required >
                   </div>
               </div>

               <div class="col-12">
                   <label for="author" >Author</label>
                   <input type="text" name="author"  value="${post.author}"  class="form-control bg-light text-center"> 
               </div>
               <div class="form-group p-1 row">
                   <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                       <label for="text" >URL for avatar</label>
                       <input type="text" value="${post.authorAvatar}"  name="avatar" class="form-control bg-light my-1 text-center" placeholder="author avatar">
                   </div>
               </div>

               <div class="col-12">
                   <label for="authId" hidden >Auth ID</label>
                   <input type="text" hidden  name="authId" value="${post.authorId}" class="form-control bg-light  my-1 text-center" >
               </div>
               <div class="col-6">
                   <label for="date" hidden>Date</label>
                   <input type="text" hidden  name="date" value="${post.rDate}" class="form-control bg-light  my-1 text-center">
               </div>

               <div class="col-6">
                   <label for="postId" hidden >Post Id</label>
                   <input type="number" hidden  id="post" name="post" value="${post.blogId}" class="form-control bg-light  my-1 text-center" >
               </div>
           </div> 
     <button type="button" class="btn btn-danger-soft me-2" data-dismiss="modal"><i class="fa fa-window-close px-2" aria-hidden="true"></i>Close</button>
   <button type="submit" value="Submit" class="btn btn-success-soft "><i class="fa fa-plus-circle px-2" aria-hidden="true"></i>Submit</button>
 </form>
</div>       
`;
    return html;
}
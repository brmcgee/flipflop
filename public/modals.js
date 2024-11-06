

function createPostModal(user) {

    return    `
    <!-- Create Post Modal -->
    <div class="modal fade" id="addPost" tabindex="-1" role="dialog" aria-labelledby="addPost" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header  alert alert-dark">
            <h5 class="modal-title" id="addPost">Welcome ${user.displayName}! Create new post</h5>
            <button type="button" class="close border-0 bg-transparent " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
            </button>
          </div>
          <div class="modal-body">
            
        <div class="container-fluid mt-2 border px-2 py-1 bg-white" style="max-width:620px;">
          <form action="/add-post" method="get" class="form-group border-0">
            <div class="row">
    
                <div class="col-12">
                    <label for="title">Title</label>
                    <input type="text" name="title" placeholder="blog post title" class="form-control bg-light  my-1 text-center" required> 
                </div>
                <div class="col-12">
                    <label for="category">Category</label>
                    <input type="text" name="category" placeholder="category"  class="form-control bg-light text-center" required> 
                </div>
                <div class="col-12">
                    <label for="body">Post Content</label>
                    <textarea  type="text" name="body" placeholder="blog post content" class="form-control bg-light  my-1 text-center" rows="4" required></textarea>
                </div>
    
                <div class="form-group p-1 row">
                    <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                      <label for="text">URL for image</label>
                      <input type="text" name="fileToUpload" id="fileToUpload" placeholder="blog post URL" class="form-control bg-light  my-1 text-center" required>
                    </div>
                </div>
    
                <div class="col-12">
                    <label for="author" hidden>Author</label>
                    <input type="text" name="author" hidden value="${user.displayName}"  class="form-control bg-light text-center"> 
                </div>
                <div class="form-group p-1 row">
                    <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                        <label for="text" hidden>URL for avatar</label>
                        <input type="text" value="${user.avatar}" hidden name="avatar" class="form-control bg-light my-1 text-center" placeholder="author avatar">
                    </div>
                </div>
    
    
                <div class="col-12">
                    <label for="authId" hidden>Auth ID</label>
                    <input type="text" name="authId" value="${user.userId}" class="form-control bg-light  my-1 text-center" >
                </div>
                <div class="col-12">
                    <label for="date" >Date</label>
                    <input type="date"  name="date" placeholder="date" value="${user.date}" class="form-control bg-light  my-1 text-center">
                </div>
            </div> 
            
    
            <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-window-close px-2" aria-hidden="true"></i>Close</button>
            <button type="submit" value="Submit" class="btn btn-primary "><i class="fa fa-plus-circle px-2" aria-hidden="true"></i>Submit</button>
          </form>
        </div>    
          </div>
        </div>
      </div>
    </div>
    
        `;
    
}



function modals(user) {

  let addUrl = `https://mysite.boxcar.site/add-post`;
  // addUrl = `http://127.0.0.1:5000/add-post`;

 return `
 <div class="feed modal fade" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
   
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabelCreateFeed">Create post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
    
         <div class="d-flex mb-3">

          <div class="avatar avatar-xs me-2">
            <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
          </div>
    
          <form class="w-100">
            <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="4" placeholder="Share your thoughts..." autofocus></textarea>
          </form>
        </div>

        <div class="hstack gap-2">
          <a class="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Photo"> <i class="bi bi-image-fill"></i> </a>
          <a class="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Video"> <i class="bi bi-camera-reels-fill"></i> </a>
          <a class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Events"> <i class="bi bi-calendar2-event-fill"></i> </a>
          <a class="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Feeling/Activity"> <i class="bi bi-emoji-smile-fill"></i> </a>
          <a class="icon-md bg-light text-secondary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Check in"> <i class="bi bi-geo-alt-fill"></i> </a>
          <a class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Tag people on top"> <i class="bi bi-tag-fill"></i> </a>
        </div>

      </div>



      <div class="modal-footer row justify-content-between">
    
        <div class="col-lg-3">
          <select class="form-select js-choice" data-position="top" data-search-enabled="false">
            <option value="PB">Public</option>
            <option value="PV">Friends</option>
            <option value="PV">Only me</option>
            <option value="PV">Custom</option>
          </select>
        </div>
      
        <div class="col-lg-8 text-sm-end">
          <button type="button" class="btn btn-danger-soft me-2"> <i class="bi bi-camera-video-fill pe-1"></i> Live video</button>
          <button type="button" class="btn btn-success-soft">Post</button>
        </div>
      </div>
  

    </div>
  </div>
</div>


<div class="create-photo modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    
      <div class="modal-header">
        <h5 class="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

        <div class="modal-body">
     
        <div class="d-flex mb-3">
      
          <div class="avatar avatar-xs me-2">
            <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
          </div>
        
          <form class="w-100">
            <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
          </form>
        </div>

    
        <div>
          <label class="form-label">Upload attachment</label>
          <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
            <div class="dz-message">
              <i class="bi bi-images display-3"></i>
              <p>Drag here or click to upload photo.</p>
            </div>
          </div>
        </div>
      

        </div>
     

   
        <div class="modal-footer ">
         
            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success-soft">Post</button>
        </div>

    </div>
  </div>
</div>



<div class="create-video modal fade" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

     <div class="modal-header">
      <h5 class="modal-title" id="feedActionVideoLabel">Add post video</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

      <div class="modal-body">

       <div class="d-flex mb-3">
   
        <div class="avatar avatar-xs me-2">
          <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
        </div>

        <form class="w-100">
          <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
        </form>
      </div>

   
      <div>
        <label class="form-label">Upload attachment</label>
        <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
          <div class="dz-message">
            <i class="bi bi-camera-reels display-3"></i>
                <p>Drag here or click to upload video.</p>
          </div>
        </div>
      </div>
  

    </div>

      <div class="modal-footer">

        <button type="button" class="btn btn-danger-soft me-2"><i class="bi bi-camera-video-fill pe-1"></i> Live video</button>
        <button type="button" class="btn btn-success-soft">Post</button>
      </div>
  
    </div>
  </div>
</div>



<div class="create-event modal fade" id="modalCreateEvents" tabindex="-1" aria-labelledby="modalLabelCreateAlbum" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabelCreateAlbum">Create post ${user.displayName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    
      <div class="modal-body">
        
                 <form action="${addUrl}" method="get" class="form-group border-0">
            <div class="row">
    
                <div class="col-12">
                    <label for="title">Title</label>
                    <input type="text" name="title" placeholder="blog post title" class="form-control bg-light  my-1 text-center" required> 
                </div>
                <div class="col-12">
                    <label for="category">Category</label>
                    <input type="text" name="category" placeholder="category"  class="form-control bg-light text-center" required> 
                </div>
                <div class="col-12">
                    <label for="body">Post Content</label>
                    <textarea  type="text" name="body" placeholder="blog post content" class="form-control bg-light  my-1 text-center" rows="4" required></textarea>
                </div>
    
                <div class="form-group p-1 row">
                    <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                      <label for="text">URL for image</label>
                      <input type="text" name="fileToUpload" id="fileToUpload" placeholder="blog post URL" class="form-control bg-light  my-1 text-center" required>
                    </div>
                </div>
    
                <div class="col-12">
                    <label for="author" hidden>Author</label>
                    <input type="text" name="author" hidden value="${user.displayName}"  class="form-control bg-light text-center"> 
                </div>
                <div class="form-group p-1 row">
                    <div class="col-sm-12 col-md-12 mt-1 d-flex flex-column ms-2">
                        <label for="text" hidden>URL for avatar</label>
                        <input type="text" value="${user.avatar}" hidden name="avatar" class="form-control bg-light my-1 text-center" placeholder="author avatar">
                    </div>
                </div>
    
    
                <div class="col-12">
                    <label for="authId" hidden>Auth ID</label>
                    <input type="text" hidden name="authId" value="${user.userId}" class="form-control bg-light  my-1 text-center" >
                </div>
                <div class="col-12">
                    <label for="date" >Date</label>
                    <input type="date"  name="date" placeholder="date" value="${user.date}" class="form-control bg-light  my-1 text-center">
                </div>
            </div> 
            
    
            <button type="button" class="btn btn-danger-soft me-2" data-dismiss="modal"><i class="fa fa-window-close px-2" aria-hidden="true"></i>Close</button>
            <button type="submit" data-dismiss="modal" value="Submit" class="btn btn-success-soft "><i class="fa fa-plus-circle px-2" aria-hidden="true"></i>Submit</button>
          </form>
        
      </div>

    </div>
  </div>
</div>
`;
}
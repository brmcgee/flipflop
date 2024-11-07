function share(user){
    let html =`
        <div class="card card-body mx-auto" >
      <div class="d-flex mb-3">
       
        <div class="avatar avatar-xs me-2">
          <a href="#"> <img class="avatar-img rounded-circle" src=" ${user.avatar} " alt=""> </a>
        </div>
        
        <form class="w-100">
          <input class="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed">
        </form>
      </div>

      
      <ul class="nav nav-pills nav-stack small fw-normal">

        <li class="nav-item">
          <a class="disabled nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#editPost"> 
          <i class="bi bi-image-fill text-success pe-2"></i>Photo</a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalAddPost"> <i class="bi bi-calendar2-event-fill text-danger pe-2">
          </i>Blog </a>
        </li>

        <li class="nav-item">
          <a class=" nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i class="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling</a>
        </li>



        <li class="nav-item dropdown ms-lg-auto">
          <a class="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </a>
         


          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
            <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Create a poll</a></li>
            <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Help</a></li>
          </ul>

        </li>
      </ul>
     
    </div>`;
    return html;
}




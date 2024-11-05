

function friends(user, posts){
    return`
        <div class="friends">
      <div class="card">
    
        <div class="card-header d-sm-flex justify-content-between align-items-center border-0">
          <h5 class="card-title">Friends <span class="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
          <a class="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
        </div>

        <div class="card-body position-relative pt-0">
          <div class="row g-3">

            <div class="col-6">
       
              <div class="card shadow-none text-center h-100">
           
                <div class="card-body p-2 pb-0">
                  <div class="avatar avatar-story avatar-xl">
                    <a href="#!"><img class="avatar-img rounded-circle" src="${posts[3].authorAvatar}" alt=""></a>
                  </div>
                  <h6 class="card-title mb-1 mt-3"> <a href="#!"> ${posts[3].author} </a></h6>
                  <p class="mb-0 small lh-sm">16 mutual connections</p>
                </div>
           
                <div class="card-footer p-2 border-0">
                  <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                  <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                </div>
              </div>
       
            </div>

            <div class="col-6">
         
              <div class="card shadow-none text-center h-100">
       
                <div class="card-body p-2 pb-0">
                  <div class="avatar avatar-xl">
                    <a href="#!"><img class="avatar-img rounded-circle" src="${posts[2].authorAvatar}" alt=""></a>
                  </div>
                  <h6 class="card-title mb-1 mt-3"> <a href="#!"> ${posts[2].author} </a></h6>
                  <p class="mb-0 small lh-sm">22 mutual connections</p>
                </div>
          
                <div class="card-footer p-2 border-0">
                  <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                  <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                </div>
              </div>
        
            </div>

            <div class="col-6">
              <div class="card shadow-none text-center h-100">
       
                <div class="card-body p-2 pb-0">
                  <div class="avatar avatar-xl">
                    <a href="#!"><img class="avatar-img rounded-circle" src="${posts[7].authorAvatar}" alt=""></a>
                  </div>
                  <h6 class="card-title mb-1 mt-3"> <a href="#"> ${posts[7].author} </a></h6>
                  <p class="mb-0 small lh-sm">1 mutual connection</p>
                </div>
              
                <div class="card-footer p-2 border-0">
                  <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                  <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                </div>
              </div>
   
            </div>

            <div class="col-6">
          
              <div class="card shadow-none text-center h-100">
        
                <div class="card-body p-2 pb-0">
                  <div class="avatar avatar-xl">
                    <a href="#!"><img class="avatar-img rounded-circle" src="${posts[4].authorAvatar}" alt=""></a>
                  </div>
                  <h6 class="card-title mb-1 mt-3"> <a href="#!"> ${posts[4].author} </a></h6>
                  <p class="mb-0 small lh-sm">15 mutual connections</p>
                </div>
         
                <div class="card-footer p-2 border-0">
                  <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                  <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                </div>
              </div>
       
            </div>

          </div>
        </div>
     
      </div>
    </div>
    `;
}

function about(user){
    return `
        <div class="about">
      <div class="card">
        <div class="card-header border-0 pb-0">
          <h5 class="card-title">About</h5>

        </div>

        <div class="card-body position-relative pt-0">
          <p> ${user.feeling} </p>

          <ul class="list-unstyled mt-3 mb-0">
            <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> User ID: <strong> ${user.userId} </strong> </li>
            <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
            <li> <i class="bi bi-envelope fa-fw pe-1"></i> Email: <strong> ${user.email} </strong> </li>
          </ul>
        </div>

      </div>
    </div>
    `;
}
function alertStatus(author, title, type, action){
    let html = `
            <div class="alert alert-${type} alert-dismissible fade show mb-2" role="alert">
                <i class="fa fa-check pe-2" aria-hidden="true"></i>
                    <strong>${author}</strong> You have ${action} post -- ${title}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;


// let html = `  <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false" id="toast${idName}">
//                 <div class="toast-header">
//                     <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%"></rect></svg>
//                     <strong class="mr-auto me-2">Post ${action}!</strong>
//                     <small>11 mins ago</small>
//                 <button type="button" id="closeToast${idName}" class="ml-2 mb-1 close float-end" data-dismiss="toast" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//                 </div>
//                 <div class="toast-body">
//                     You have successfully ${action} post!
//                 </div>
//             </div>`;


//         $(`#toast${idName}`).toast('show');
//         $(`closeToast${idName}`).on('click', function () {
//             $(`#toast${idName}`).hide;
//         })
        document.getElementById('notifications').innerHTML += html;
        return;
}

function alertStatus(author, title, type, action){
    let html = `
            <div class="alert alert-${type} alert-dismissible fade show mb-0" role="alert">
                <i class="fa fa-check pe-2" aria-hidden="true"></i>
                    <strong>${author}</strong> You have ${action}!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        root.innerHTML += html;
        return;
}


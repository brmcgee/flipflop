

function photos(user, posts){
  let userImage = [];

  posts.forEach(p => {
   if (p.authorId == user.userId) { userImage.push(p.img)}
  });

    let html = `
        <div class="photos">
      <div class="card">
      
        <div class="card-header d-sm-flex justify-content-between border-0">
          <h5 class="card-title">Photos <span class="badge bg-success bg-opacity-10 text-success small"> ${userImage.length} </span></h5>
          <a class="btn btn-primary-soft btn-sm" href="#!"> See all photo</a>
        </div>

        <div class="card-body position-relative pt-0">
          <div class="row g-2">
          

 `;




    let stopAtTwo = 0;
    for(let i=0; i<userImage.length; i++){
          html += `         
            <div class="col-6">
              <a href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                <img class="rounded img-fluid" src=" ${userImage[i]} " alt="img">
              </a>
            </div>           
        `;
        // stopAtTwo ++;
        if (stopAtTwo++ == 1) { break; }
      }

      if (userImage.length > 2) {
        let stopAtThree = 0;
        for (let i = 2; i < userImage.length; i++) {
          html += `
              <div class="col-4">
                <a href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                  <img class="rounded img-fluid" src=" ${userImage[i]} " alt="">
                </a>
              </div>
          `;
          if (stopAtThree++ == 2) { break; }
        }
      };
 


 html += `
                   
            </div>
          </div>
        </div>
  
      </div>
    </div>`;
    return html;

}
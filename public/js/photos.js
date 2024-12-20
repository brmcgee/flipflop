// add photoModal to modal root at end  

function photos(user, posts){
  let userImage = [];

  posts.forEach(p => {
   if (p.authorId == user.userId) { userImage.push(p.img || "public/assets/placeholder/unavailable-image.jpg")}
  });
  userImage.push(user.avatar);
  userImage.push(user.hero);

   
    let html = `
        <div class="photos">
      <div class="card">
      
        <div class="card-header d-sm-flex justify-content-between border-0">
          <h5 class="card-title">Photos <span class="badge bg-success bg-opacity-10 text-success small"> ${userImage.length} </span></h5>
          <a class="btn btn-primary-soft btn-sm" href="#!" data-bs-toggle="modal" data-bs-target="#photoModal" type="button"> See all photo</a>
        </div>

        <div class="card-body position-relative pt-0">
          <div class="row g-2">
          

 `;

    


    let stopAtTwo = 0;
    for(let i=0; i<userImage.length; i++){
          html += `         
            <div class="col-6">
              <a href="${userImage[i]}" data-gallery="image-popup" data-glightbox="">
                <img class="rounded img-fluid" src=" ${userImage[i]} " alt="img" height="200px;">
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
                <a href="${userImage[i]}" data-gallery="image-popup" data-glightbox="">
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


    modalsRoot.innerHTML += photoModal(userImage, user);
    return html;

}
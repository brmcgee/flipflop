
const inputElem = document.querySelector('#blogInput');
const root = document.getElementById('root');
const blogsByIndex = [];
var current = 0;
let blogs = [];
let catArr = [];
let avatar = [];
let btns;
let catElem = document.getElementById('category');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const apiURL = 'https://mysite.boxcar.site/posts/';
getData(apiURL);

root.classList += 'd-flex flex-wrap';

async function getData(file) {
    let data = await fetch(file);
    let jsonData = await data.json();
    jsonData.forEach(b => {
        blogsByIndex.push(b.blogId);
        blogs.push(b);
      });
      current = Number(blogs[0].id);
      getAllCategorys();
      populateCategoryElem();
      addBtnEventListener()
    //   blogs.forEach(b => {
    //     document.getElementById('blogPanel').innerHTML += 
    //             getPostById('https://mysite.boxcar.site/posts', 'blogPanel', b.postId);

    //   })
}



function addBtnEventListener() {
    btns = document.querySelectorAll('.categoryBtn');
    btns.forEach(b => {
        b.addEventListener('click', () => {blogTemplateByCatgeory(b.innerHTML)})
    })
}

nextBtn.addEventListener('click', function () {
    if (current < blogsByIndex.length) {
        // document.getElementById('myImg').src = blogs[current].img;
        document.getElementById('root').innerHTML = blogTemplate(blogs[current]);
        current ++;
    } else {
        current = 0;
    }

} );
prevBtn.addEventListener('click', function () {
    if (current >= 0) {
        // document.getElementById('myImg').src = blogs[current].img;
        document.getElementById('root').innerHTML = blogTemplate(blogs[current]);
        current --;
    } else {
        current = blogsByIndex.length - 1;
    }

} );

function getAllCategorys(){
    blogs.forEach(b => {
        if (!catArr.includes(b.category.trim())) {
            catArr.push(b.category.trim())
        }     
    })   
}
function populateCategoryElem() {
    let count = 0;
    catArr.forEach(c => {
        catElem.innerHTML += `<button id=btn${c} class='categoryBtn'>` + c + '</button>';
        count++;
    })
}
function blogTemplateByCatgeory(category){
    let arr = [];
    blogs.forEach(b => {
        if (b.category.trim() == category) {
            arr.push(b);
        }
    })
    let html = '';
    arr.forEach(a => {
        html += blogTemplate(a)
    })
    root.innerHTML = html;
}

function blogTemplate(b) {
    let html = `
    
   <div class="card shadow-lg px-2" style="width:100%; max-width:32rem;margin:auto;">
     <div class="card-body d-flex flex-row">
       <img src="${b.authorAvatar}" class="rounded-circle me-3" height="50px" width="50px" alt="${b.author}">
       <div>
         <h6 class="card-title font-weight-bold mb-0 mt-3"><strong>${b.author}</strong></h6>
        
       </div>
     </div>
     <div>
      <h5 class="card-title fs-bold font px-1">${b.title}</h5>
      </div>
     <div class="rounded-0">
       <img class="img-fluid w-100" src="${b.img}" alt=">${b.title}" style="">
       <a href="#!">
         <div class="mask" style="background-color: rgba(251, 251, 251, 0.85);"></div>
       </a>
     </div>
     <div class="card-body">
       <p class="card-text">${b.body}</p>
       <div class="d-flex justify-content-between">
         <div>
           <p class="card-text bg-dark text-light rounded py-1 px-3 fs-6">${b.category}</p>
         </div>
         <div>
           <span class="sr-only">${b.rDate}</span>
         </div>
       </div>
     </div>
   </div>
    `;

    return html;
}









let userBtn = document.getElementById('userBtn');
userBtn.addEventListener('click', () => { alert('hello')})


function addUser() {
    let display = document.getElementById('display').value;
    let avatar = document.getElementById('avatar').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    
    
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("user").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET",`http://mysite.boxcar.site/add-user?display=${display}&email=${email}&password=${password}&avatar=${avatar}&date=`,true);
    xmlhttp.send();
        
      
}











const products = 

[
    {
      id: 1,
      title: 'Pencil',
      description: 'Wooden #2 pencil with standard lead',
      img: 'https://target.scene7.com/is/image/Target/GUEST_e5b85d3d-573d-4219-906d-46b2564d0499?wid=800&hei=800&qlt=80&fmt=pjpeg',
      price: '2.99'
    },

    {
      id: 2,
      title: 'Zebra Delguard Mechanical Pencil',
      description: 'Delguard Mechanical Pencil, 0.5 mm, HB (#2), Black Lead, Black Barrel, 3/Pack',
      img: 'https://target.scene7.com/is/image/Target/GUEST_e2a70e1f-2f42-4f57-9752-5e3525c3cbfa?wid=800&hei=800&qlt=80&fmt=webp',
      price: '29.41'
    },

    {
      id: 3,
      title: 'Washable School Glue Sticks',
      description: "Elmer's 2pk Washable School Glue Sticks - Disappearing Purple",
      img: 'https://target.scene7.com/is/image/Target/GUEST_f5930f17-7128-407a-a5d2-b49eced4a6ac?wid=800&hei=800&qlt=80&fmt=webp://target.scene7.com/is/image/Target/GUEST_e5b85d3d-573d-4219-906d-46b2564d0499?wid=800&hei=800&qlt=80&fmt=pjpeg',
      price: '3.99'
    },
  
    {
      id: 4,
      title: 'Crayola Markers Broad Line 10ct Classic',
      description: "Unlock your child's creativity effortlessly with Crayola Broad Line Markers! These versatile markers are perfect for school and home use",
      img: 'https://target.scene7.com/is/image/Target/GUEST_e2a70e1f-2f42-4f57-9752-5e3525c3cbfa?wid=800&hei=800&qlt=80&fmt=webp',
      price: '2.79'
    },
    
];

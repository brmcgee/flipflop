let addUrl = `https://mysite.boxcar.site/add-post`;



function handleAddPost(author){
    getUserInfo(author);
}

async function getUserInfo(author) {
    let userInfoUrl = `https://mysite.boxcar.site/users/${author}`

    try {
        const response = await fetch(userInfoUrl);
        try {
            const data = await response.json();

                addPost(data)                 
              
        }
        catch (parseError) {
            console.log('Failed to parse JSON: ' + parseError);
        }
    } catch (networkError) {
        console.log('Network request failed: ', networkError);
    } 
    
}

let handleEditApi = `https://mysite.boxcar.site/add-post`;
// handleEditApi = `http://127.0.0.1:5000/add-post`
async function addPost(user) {
    let title = document.getElementById('aTitle').value;
    let body = document.getElementById('aBody').value;
    let category = document.getElementById('aCategory').value;
    let img = document.getElementById('aImg').value;

    let post = { 'title' : title, 'body' : body, 'category': category, 'img': img, 'author': user.displayName, 'authorAvatar' : user.avatar, 'comment': '[]', 'commentCount' : function () { return this.comment.length} }
    // post.comment = {'user': user.userId, 'author': user.displayName, 'avatar': user.avatar, 'comment': 'Start adding comments now..', 'post': null, 'date': 'just now ..'}

    
    let params = `author=${user.displayName}&&authId=${user.userId}&&body=${body}&&category=${category}&&title=${title}&&fileToUpload=${img}&&avatar=${user.avatar}&&date=''`;
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            console.log('Added post ');

            const myModal = document.getElementById('modalAddPost'); 
            const modal = bootstrap.Modal.getInstance(myModal); 
            modal.hide(); 
            document.getElementById('newPostRoot').innerHTML += createPostTemplate (post, user)

            alertStatus(user.displayName, title.slice(0, 7) + '.....', 'success', 'added');
            
        }
      };
      
      xmlhttp.open("POST", handleEditApi, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
}
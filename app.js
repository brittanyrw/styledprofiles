
var profileContent = '';

var counter = 1;

for(var i = 0; i < 78; i++){
    profileContent += '<div class="profile brittany' + counter + '"><header><h1>Brittany Walker ' + counter + '</h1><h2>Software Engineer</h2><p class="location">Washington, DC</p><p>Favorite Emoji: 💖</p></header><div class="profile-content"><div class="interests"><ul><li>CSS</li><li>HTML</li><li>Vue.js</li><li>Open Source</li></ul></div><p class="profile-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia veritatis! Facilis obcaecati illo magni dicta sint voluptatem aliquid, mollitia, soluta harum, optio quod praesentium perspiciatis sapiente deleniti. Quibusdam, excepturi!</p><div class="contact"><a href="">musicalwebdev.com</a></div></div></div>';
    counter++;
}


$('#profiles').append(profileContent);


//TODO - Random generate list
//Create JSON data schema
var profile = '';

for(var i = 0; i < profiles.length; i++){
    profile += '<div class="profile brittany"><header><h1>' + profiles[i].name + '</h1><h2>Software Engineer</h2><p class="location">' + profiles[i].location + '</p><p>Favorite Emoji: 💖</p></header><div class="profile-content"><div class="interests"><ul><li>CSS</li><li>HTML</li><li>Vue.js</li><li>Open Source</li></ul></div><p class="profile-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia veritatis! Facilis obcaecati illo magni dicta sint voluptatem aliquid, mollitia, soluta harum, optio quod praesentium perspiciatis sapiente deleniti. Quibusdam, excepturi!</p><div class="contact"><div><a href="https://github.com/' + profiles[i].github + '">' + profiles[i].github + '</a></div><a href="">musicalwebdev.com</a></div></div></div>';
}
$('#profiles').append(profile);
$.ajax({
    type: "GET",
    url: "../data.json",
    success: function (data) {

        
        var profile = '';
        var interests = '';

        for (var i in data) {

            var uniqueClass = createSlug(data[i].name);
            
            for (var j in data[i].interests){
                interests += '<li>' + data[i].interests[j] + '</li>';
            }

            profile += '<div class="profile ' + uniqueClass + '"><header><h1>' + data[i].name + '</h1><h2>' + data[i].occupation + '</h2><p class="location">' + data[i].location + '</p><p>Favorite Emoji: ' + data[i].emoji + '</p></header><div class="profile-content"><div class="interests"><ul>' + interests + '</ul></div><p class="profile-bio">' + data[i].bio + '</p><div class="contact"><a href="">' + data[i].link + '</a></div></div></div>';
        }

        function createSlug(name) {
            return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
        $('#profiles').html(profile);

    }
});

// for(var i = 0; i < 78; i++){
//     profileContent.innerHTML += '<div class="profile brittany' + counter + '"><header><h1>Brittany Walker ' + counter + '</h1><h2>Software Engineer</h2><p class="location">Washington, DC</p><p>Favorite Emoji: 💖</p></header><div class="profile-content"><div class="interests"><ul><li>CSS</li><li>HTML</li><li>Vue.js</li><li>Open Source</li></ul></div><p class="profile-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia veritatis! Facilis obcaecati illo magni dicta sint voluptatem aliquid, mollitia, soluta harum, optio quod praesentium perspiciatis sapiente deleniti. Quibusdam, excepturi!</p><div class="contact"><a href="">musicalwebdev.com</a></div></div></div>';
//     counter++;
// }

// document.getElementById("profiles").appendChild(profile);
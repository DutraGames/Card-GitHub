const req = fetch('https://api.github.com/users/DutraGames')
    .then(res => res.json())
    .then((jsonbody)=>{
        const img = document.getElementById("img")
        img.innerHTML = `
        <img src="` + jsonbody.avatar_url + `" alt="perfil" class="image" >
        `

        const nome = document.getElementById("nome")
        nome.innerText = jsonbody.name

        const bio = document.getElementById("bio")
        bio.innerText = jsonbody.bio

        const followers = document.getElementById("followers")
        followers.innerText = jsonbody.followers

        const following = document.getElementById("following")
        following.innerText = jsonbody.following

        const repos = document.getElementById("public_repos")
        repos.innerText = jsonbody.public_repos

        const local = document.getElementById("local")
        local.innerText = jsonbody.location
    })
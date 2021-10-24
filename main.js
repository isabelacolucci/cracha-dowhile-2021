$(document).ready(function () {
  $('#modal').modal('show')
})

$(function () {
  $('#btnEnviar').click(function () {
    const LinksSocialMedia = {
      github: $('#modalGithub').val(),
      youtube: $('#modalYouTube').val(),
      facebook: $('#modalFacebook').val(),
      instagram: $('#modalInstagram').val(),
      twitter: $('#modalTwitter').val()
    }
    function getGitHubProfileInfos() {
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url)
        .then(response => response.json())
        .then(data => {
          titulo.textContent = data.name + ' - DoWhile 2021'
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url
          UserImage.src = data.avatar_url
          userLogin.textContent = data.login
        })
    }

    function changeSocialMediaLinks() {
      for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      }
    }
    getGitHubProfileInfos()
    changeSocialMediaLinks()

    $('#modal').modal('hide')
  })
})

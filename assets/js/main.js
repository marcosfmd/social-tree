const urlApi = 'https://api.github.com/users/marcosfmd'

function changePhotoProfile () {
  fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    userPhotoProfile.src = data.avatar_url
    userName.textContent = data.name
  })
  .catch(error => (console.error(error)))
}

changePhotoProfile()
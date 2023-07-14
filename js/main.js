const GITHUB_URL = "https://api.github.com/users/ShStAl";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
    
  });
  

const card = document.querySelector('.card');

card.addEventListener('click', function(event) {
  const target = event.target;
  const isLink = target.closest('a');
  if (!isLink) {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    };
  };
  
});
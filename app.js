// Initialize the Github class
const github = new Github();

//Init the UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text()
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //show alert from ui.js
        ui.showAlert('User not found.', 'alert alert-danger');
      } else {
        //show profile from ui.js
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});

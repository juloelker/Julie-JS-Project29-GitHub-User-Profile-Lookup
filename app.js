// Initialize the Github class
const github = new Github();

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
      } else {
        //show profile from ui.js
        console.log(data);
      }
    });
  } else {
    //clear profile
  }
});

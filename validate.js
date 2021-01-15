const form = document.getElementById('createForm')
// Selecting all text elements
const studentID = document.getElementById('studentId');
const email = document.getElementById('email')
const username = document.getElementById('username');
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname');
const password = document.getElementById('pass1');
const password_confirm = document.getElementById('pass2');
const createBtn = document.getElementById('create');

form.addEventListener('createAccount',(e)=> {
    e.preventDefault();

    if(validateForm()) {
        createBtn.removeAttribute('disabled');
    }
})

function validateForm() {
    // get values from input
    const studentIdValue = studentID.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password_confirm.value.trim();
    
    
    
    if(studentIdValue !== '' && emailValue !== '' && usernameValue !== '' && firstnameValue !== '' && lastnameValue !== '' && passwordValue !== '' && password2Value === passwordValue) {
      return true;
    }

   
    
}
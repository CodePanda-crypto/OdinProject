const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone-number')
const birthDate = document.getElementById('birth-date')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('confirm-password')
const passwordConfirmError = document.getElementById('confirm-password-error')
const form = document.getElementById('form')
// The submitButton variable is not needed, so it can be removed

function validatePasswordConfirm () {
  if (password.value === passwordConfirm.value) {
    passwordConfirmError.innerHTML = '*Passwords match'
    passwordConfirmError.style.color = '#255046'
    passwordConfirm.style.borderColor = '#00ff6a'
    passwordConfirm.style.boxShadow = '0px 0px 5px #15daac'
    password.style.borderColor = '#00ff6a'
    password.style.boxShadow = '0px 0px 5px #15daac'
    return true
  } else {
    passwordConfirmError.innerHTML = '*Passwords do not match'
    passwordConfirm.style.borderColor = 'red'
    password.style.borderColor = 'red'
    return false
  }
}
function resetStyles () {
  document.getElementById('password').style.borderColor = ''
  document.getElementById('confirm-password').style.borderColor = ''
  document.getElementById('confirm-password-error').innerHTML = ''
  document.getElementById('confirm-password-error').style.color = ''
  document.getElementById('password').style.boxShadow = ''
  document.getElementById('confirm-password').style.boxShadow = ''
}

function validateForm () {
  const fieldsFilled =
    firstName.value &&
    lastName.value &&
    email.value &&
    phone.value &&
    birthDate.value
  return validatePasswordConfirm() && fieldsFilled
}
// Add event listener to the confirm password field to validate on input
passwordConfirm.addEventListener('input', validatePasswordConfirm)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (validateForm()) {
    alert('Form submitted successfully')
    form.reset()
    resetStyles()
  } else {
    alert('Form is invalid. Please fix highlighted fields.')
  }
})

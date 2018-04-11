// Make call to the mock api that will give use back a mock user
window.fetch('http://localhost:3001/user', { method: 'GET' })
  .then(function (result) {
    return result.json();
  })
  .then(function (jsonUser) {
    document.getElementById('FirstNameTextBox').value = jsonUser.firstName;
    document.getElementById('LastNameTextBox').value = jsonUser.lastName;
    document.getElementById('OfficeSelect').value = jsonUser.office;
    document.getElementById('TelephoneTextBox').value = jsonUser.telephone;
    if (jsonUser.mobile) {
      document.getElementById('MobileTextBox').value = jsonUser.mobile;
    }
    document.getElementById('JobTitleTextBox').value = jsonUser.job;
  })

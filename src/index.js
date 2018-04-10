import './index.css'

document.getElementById('CreateButton').onclick = function () {

  if (isSignatureFormValid()) {
    var address = getAddress();

    var signature =
      '</br></br>Regards,</br>' +
      document.getElementById('FirstNameTextBox').value + '</br></br>' +

      // Position
      '<div class="bold">' + document.getElementById('FirstNameTextBox').value + ' ' + document.getElementById('LastNameTextBox').value + '</div>' +
      document.getElementById('JobTitleTextBox').value + '</br></br>' +

      // Phone Numbers
      '<span class="italic"><span class="red">T:</span>' + document.getElementById('TelephonePrefix').innerHTML + document.getElementById('TelephoneTextBox').value.toString() + '</span></br>';

    if (document.getElementById('MobileTextBox').value && document.getElementById('MobileTextBox').value.length > 0) {
      signature += '<span class="italic"><span class="red">M:</span>' +document.getElementById('MobilePrefix').innerHTML + document.getElementById('MobileTextBox').value.toString() + '</span></br>';
    }

    // Address
    signature += '</br><div class="bold red">MyFakeCompany</div>' + address + '</br></br>' +

      // Website
      '<a class="red" href="" target="_blank">www.myfakecompany.com</a>';

    document.getElementById('SignatureDiv').classList.remove("hidden");
    document.getElementById('Signature').innerHTML = signature;
  }
}

document.getElementById('ClearButton').onclick = function () {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i += 1) {
    inputs[i].value = '';
  }
}

document.getElementById('OfficeSelect').onchange = function () {
  setPhonePrefix();
}

function getAddress() {
  var officeValue = document.getElementById('OfficeSelect').value;

  if (officeValue == 1) {
    return 'MadeUp House</br>Fictional Road</br>Dublin</br>Ireland';
  }
  else if (officeValue == 2) {
    return 'Fake House</br>123 Fake Street</br>London';
  }
  else if (officeValue == 3) {
    return 'Fake Place</br>123 Fake Road</br>Tokyo</br>Japan';
  }
}

function setPhonePrefix() {
  var office = document.getElementById('OfficeSelect').value;
  var prefix = '';

  if (office == 1) {
    prefix = '+353 ';
  }
  else if (office == 2) {
    prefix = '+44 ';
  }
  else if (office == 3) {
    prefix = '+81 ';
  }

  var prefixSpans = document.getElementsByClassName('phonePrefix');

  for (var i = 0; i < prefixSpans.length; i+= 1){
    prefixSpans[i].innerHTML = prefix;
  }
}

function isSignatureFormValid() {

    // Ensure mandatory fields are filled in
    var requiredInputs = document.getElementsByClassName('required');
    for (var i = 0; i < requiredInputs.length; i += 1) {
      if (!requiredInputs[i].value) {
      alert('Please Enter Value for Mandatory Field.');
      requiredInputs[i].focus();
      return false;
    }
  }

  // Validate that phone numbers entered are valid
  var phoneInputs = document.getElementsByClassName('phone');
  for (i = 0; i < phoneInputs.length; i += 1){
    if (phoneInputs[i].value &&
      (phoneInputs[i].classList.contains('required') && phoneInputs[i].value.length < 5)
    ) {
      alert('Please Enter Valid Phone Number.');
      phoneInputs[i].focus();
      return false;
    }
  }

  return true;
}

// Set the phone prefix on initial load of page.
setPhonePrefix();

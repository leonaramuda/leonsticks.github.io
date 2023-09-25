document.getElementById("form-register").addEventListener('submit', function (event) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var phoneInput = document.getElementById('phone');
    var genderInput = document.getElementById('gender');
    var termsInput = document.getElementById('terms');
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        alert('Tolong masukkan alamat email yang valid.');
        return;
    }
    if (passwordInput.value.length < 8) {
        event.preventDefault();
        alert('Kata sandi minimal 8 karakter.');
        return;
    }
    if (!isValidPhoneNumber(phoneInput.value)) {
        event.preventDefault();
        alert('Tolong masukkan nomor telepon anda.');
        return;
    }
    if (genderInput.value === '') {
        event.preventDefault();
        alert('Tolong masukkan jenis kelamin anda.');
        return;
    }
    if (!termsInput.checked) {
        event.preventDefault();
        alert('Tolong menyetujui syarat dan ketentuan.');
        return;
    }
});
function isValidEmail(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}
function isValidPhoneNumber(phoneNumber) {
    var numericPhone = phoneNumber.split('').filter(function (char) {
        return !isNaN(parseInt(char));
    }).join('');
    return numericPhone.length > 8 && numericPhone.length < 15;
}

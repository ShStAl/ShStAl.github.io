const requiredFields = document.querySelectorAll('input[required], textarea[required]');
const submitButton = document.querySelector('.contact-btn');
const selectType = document.getElementById('contact-type')

function checkFormValidity() {
    let isFormValid = true;
    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value.trim() === '') {
            isFormValid = false;
            break;
        }
    };
    if (selectType.value === '') {
        isFormValid = false;
    }
    submitButton.disabled = !isFormValid;
};

requiredFields.forEach(function (field) {
    field.addEventListener('input', checkFormValidity);
});
selectType.addEventListener('change', checkFormValidity);
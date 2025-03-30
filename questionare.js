function showPage(pageNumber) {
    
    document.querySelectorAll('.questionnaire-page').forEach(page => {
        page.classList.add('d-none');
    });
    document.getElementById(`page-${pageNumber}`).classList.remove('d-none');
    
}

function submitForm() {
    alert('Your responses have been submitted. Thank you!');
    // Add form submission logic here
}

let formData = {};

function recordPage2Data() {
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.age = document.getElementById('age').value;
}

function recordPage3Data() {
    formData.dropdown1 = document.getElementById('dropdown1').value;
    formData.textbox1 = document.getElementById('textbox1').value;
}



//add code that says that if there is no value for one of the options that it will give an alert and ask to fill it out.

//can someone test code below


function validatePage(pageNumber) {
    const currentPage = document.getElementById(`page-${pageNumber}`);
    const inputs = currentPage.querySelectorAll('input, select, textarea');
    for (let input of inputs) {
        if (!input.value.trim()) {
            return false;
        }
    }
    return true;
}

document.querySelectorAll('.next-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentPageNumber = index + 1;
        if (validatePage(currentPageNumber)) {
            showPage(currentPageNumber + 1);
        }
    });
});
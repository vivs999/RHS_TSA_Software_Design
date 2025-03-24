
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

//add code that says that if there is no value for one of the options that it will give an alert and ask to fill it out.
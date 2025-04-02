function showPage(pageNumber) {
    
    document.querySelectorAll('.questionnaire-page').forEach(page => {
        page.classList.add('d-none');
    });
    document.getElementById(`page-${pageNumber}`).classList.remove('d-none');
    
}

function submitForm() {
    //alert('Your responses have been submitted. Thank you!');
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.age = document.getElementById('age').value;
    formData.cropType = document.getElementById('dropdown1').value;
    formData.area = document.getElementById('areaSelect').value;
    formData.volume = document.getElementById('volume').value;
    formData.land = document.getElementById('land').value;
    str = JSON.stringify(formData);
    console.log(str); // Logs output to dev tools console.
    //console.log(formData);
    //window.location.href = 'results.html';
}

let formData = {};

// function hidePage1(){
//     document.getElementById('page-2').classList.add('d-none');
//     document.getElementById('page-3').classList.remove('d-none');
// }

// function hidePage2(){
//     document.getElementById('page-3').classList.add('d-none');
//     document.getElementById('page-4').classList.remove('d-none');
// }



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
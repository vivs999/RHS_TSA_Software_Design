function showPage(pageNumber) {
    
    document.querySelectorAll('.questionnaire-page').forEach(page => {
        page.classList.add('d-none');
    });
    document.getElementById(`page-${pageNumber}`).classList.remove('d-none');
    
}


let formData = {};


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
    window.location.href = 'results.html';                  
}
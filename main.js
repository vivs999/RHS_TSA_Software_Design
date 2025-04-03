        

function showPage(pageNumber) {
    
    document.querySelectorAll('.questionnaire-page').forEach(page => {
        page.classList.add('d-none');
    });
    document.getElementById(`page-${pageNumber}`).classList.remove('d-none');
    
}

function submitForm() {
    // Reset counters to avoid accumulation from previous submissions

    let consumer = 0;
    let distributor = 0;
    let localMarket = 0;

    //alert('Your responses have been submitted. Thank you!');
    // Removed unused variables: name, email, and age
    let cropType = document.getElementById('dropdown1').value;
    let area = document.getElementById('areaSelect').value;
    let volume = parseFloat(document.getElementById('volume').value);
    let land = parseFloat(document.getElementById('land').value);
     // Logs output to dev tools console.
    //console.log(formData);
    if (cropType == "Grain"){
        distributor++;
    } else if (cropType == "Horticulture") {
        localMarket++;
    } else if (cropType == "Forage") {
        consumer++;
    } else if(cropType == "Industrial") {
        distributor++;
    }
    
    //location of farm
    if (area == "Rural") {
        distributor++;
    } else if (area == "Suburban") {
        localMarket++;
    } else if (area== "Urban") {
        consumer++;
    }
    
    //volume of crops
    if (volume < 100) {
        consumer++;
    } else if (volume >= 100 && volume < 10000) {
        localMarket++;
    } else {
        distributor++;
    }

    //land area of farm
    if (land < 2) {
        consumer++;
    } else if (land >= 2 && land < 10) {
        localMarket++;
    } else {
        distributor++;
    }
   
    if (maximum == distributor) {
        window.location.href = 'distributor.html';
    } else if (maximum == consumer) {
        window.location.href = 'consumer.html';
    } else {
        window.location.href = 'market.html';
    }
     // Delay navigation to ensure DOM updates are applied
    // str = JSON.stringify(formData);
    // console.log(str);

    // Navigate to results page after processing
    
}


function determineMethod() {
    
    //crop type
    
}

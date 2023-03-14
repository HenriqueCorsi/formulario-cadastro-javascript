const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault()

     // Input
     let plate = document.getElementById('plate-input').value;
     let model = document.getElementById('model-input').value;
     let brand = document.getElementById('brand-input').value;
     let color = document.getElementById('color-input').value;
     let year = document.getElementById('year-input').value;
     let motor = document.getElementById('motor-input').value;
     let km = document.getElementById('km-input').value;
 
    // outinput
    let outPlate = document.getElementById('plate').innerHTML;
    let outModel = document.getElementById('model').innerHTML;
    let outBrand = document.getElementById('brand').innerHTML;
    let outColor = document.getElementById('color').innerHTML;
    let outYear = document.getElementById('year').innerHTML;
    let outMotor = document.getElementById('motor').innerHTML;
    let outKm = document.getElementById('km').innerHTML;

    outPlate += `<span>${plate}<span><br>`
    outModel += `<span>${model}<span><br>`
    outBrand += `<span>${brand}<span><br>`
    outColor += `<span>${color}<span><br>`
    outYear += `<span>${year}<span><br>`
    outMotor += `<span>${motor}<span><br>`
    outKm += `<span>${km}<span><br>`

    document.getElementById('plate').innerHTML = outPlate;
    document.getElementById('model').innerHTML = outModel;
    document.getElementById('brand').innerHTML = outBrand;
    document.getElementById('color').innerHTML = outColor;
    document.getElementById('year').innerHTML = outYear;
    document.getElementById('motor').innerHTML = outMotor;
    document.getElementById('km').innerHTML = outKm;

    document.getElementById('plate-input').value = null;
    document.getElementById('model-input').value = null;
    document.getElementById('brand-input').value = null;
    document.getElementById('color-input').value = null;
    document.getElementById('year-input').value = null;
    document.getElementById('motor-input').value = null;
    document.getElementById('km-input').value = null;

});
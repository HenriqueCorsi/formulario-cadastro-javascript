const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault()

    const plate = document.getElementById('plate').value;
    const model = document.getElementById('model').value;
    const brand = document.getElementById('brand').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const motor = document.getElementById('motor').value;
    const km = document.getElementById('km').value;
    
    infoJson = {
        plate: plate,
        model: model,
        brand: brand,
        color: color,
        year: year,
        motor: motor,
        km:km
    }

    console.log(infoJson);
});
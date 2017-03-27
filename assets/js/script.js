// Global variables
var body = document.querySelector('body');


// Use slider on mobile
var slider = (function() {
    var sliderSection = body.querySelector('.slider-section');
    var output = sliderSection.querySelector('.output');
    var slider = sliderSection.querySelector('.slider');
    slider.addEventListener('change', updateDays);

    function updateDays(e) {
        var days = e.target.value;
        output.innerHTML = days + ' days';
        body.className = 'days' + days;
        impact.updateNumbers(Number(days));
        savings.updateNumbers(Number(days));
    }

})();

// Update Impact Section
var impact = (function() {
    var impactSection = body.querySelector('.impact-section');

    var meatOutputContainer = impactSection.querySelector('.meat-output');
    var waterOutputContainer = impactSection.querySelector('.water-output');
    var landOutputContainer = impactSection.querySelector('.land-output');
    var treesOutputContainer = impactSection.querySelector('.trees-output');
    var co2OutputContainer = impactSection.querySelector('.co2-output');
    var wasteOutputContainer = impactSection.querySelector('.waste-output');

    var dataPerDay = {
        meat: 48, // KG of meat per person per year
        water: 8000, // Liters of water per KG of meat (average of chicken, pork and beef)
        land: 1, // km2 pr kg of meat per year
        trees: 250.000, // Number of average trees pr. km2
        co2: 68.75, // kg of co2 per kg of meat
        waste: 3 // Not done
    };

    function updateNumbers(days) {
        meatOutputContainer.innerHTML = Math.round(dataPerDay['meat'] / 7 * days);
        waterOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['water'] / 7 * days);
        landOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] / 7 * days);
        treesOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] * dataPerDay['trees'] / 7 * days);
        co2OutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['co2'] / 7 * days);
        wasteOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['waste'] / 7 * days);
    }

    updateNumbers(5);

    return {
        updateNumbers: updateNumbers
    }
})();

var savings = (function() {
    var savingsSection = body.querySelector('.savings-section');

    var meatOutputContainer = savingsSection.querySelector('.meat-output');
    var waterOutputContainer = savingsSection.querySelector('.water-output');
    var landOutputContainer = savingsSection.querySelector('.land-output');
    var treesOutputContainer = savingsSection.querySelector('.trees-output');
    var co2OutputContainer = savingsSection.querySelector('.co2-output');
    var wasteOutputContainer = savingsSection.querySelector('.waste-output');

    var dataPerDay = {
        meat: 48, // KG of meat per person per year
        water: 8000, // Liters of water per KG of meat (average of chicken, pork and beef)
        land: 1, // km2 pr kg of meat per year
        trees: 250.000, // Number of average trees pr. km2
        co2: 68.75, // kg of co2 per kg of meat
        waste: 3 // Not done
    };

    function updateNumbers(days) {
        meatOutputContainer.innerHTML = Math.round(dataPerDay['meat'] / 7);
        waterOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['water'] / 7);
        landOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] / 7);
        treesOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] * dataPerDay['trees'] / 7);
        co2OutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['co2'] / 7);
        wasteOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['waste'] / 7);
    }

    updateNumbers(5);

    return {
        updateNumbers: updateNumbers
    }
})();

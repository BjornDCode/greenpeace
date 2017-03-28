// Global variables
var body = document.querySelector('body');


var calculateButton = (function() {
    var calculateButton = body.querySelector('.calculate');
    var impactSection = $('.impact-section');
    calculateButton.addEventListener('click', function() {
        impact.updateNumbers(slider.getDays());
        savings.updateNumbers(slider.getDays());
        $('html, body').animate({
            scrollTop: impactSection.offset().top
        }, 300);
        // window.pageYOffset = impactSection.offsetTop;
    });
})();

// Use slider on mobile
var slider = (function() {
    var sliderSection = body.querySelector('.slider-section');
    var output = sliderSection.querySelector('.output');
    var slider = sliderSection.querySelector('.slider');
    // var impactSection = body.querySelector('.impact-section');
    // var savingsSection = body.querySelector('.savings-section');
    slider.addEventListener('change', updateDays);
    var days = 5;

    function updateDays(e) {
        days = Number(e.target.value);
        output.innerHTML = days + ' days';
        body.className = 'days' + days;

        // window.addEventListener('scroll', function() {
        //     if (window.pageYOffset > impactSection.offsetTop / 2 || window.pageYOffset > savingsSection.offsetTop) {
        //         impact.meatOutputContainer.classList.remove('hasRun');
        //         impact.updateNumbers(Number(days));
        //     }
        // });
    }

    function getDays() {
        return days;
    }

    return {
        getDays: getDays
    };

})();

var countUp = (function() {
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    function countElement(id, limit) {
        var elem = new CountUp(id, 0, limit, 0, 3.5, options);
        return elem;
    }
    return {
        countElement: countElement
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
        // meatOutputContainer.innerHTML = Math.round(dataPerDay['meat'] / 7 * days).toLocaleString();
        // if (!meatOutputContainer.classList.contains('hasRun')) {
        //     meatOutputContainer.innerHTML = countUp.countElement(meatOutputContainer ,Math.round(dataPerDay['meat'] / 7 * days)).start();
        //     meatOutputContainer.classList.add('hasRun');
        // }

        meatOutputContainer.innerHTML = countUp.countElement(meatOutputContainer, Math.round(dataPerDay['meat'] / 7 * days)).start();
        waterOutputContainer.innerHTML = countUp.countElement(waterOutputContainer, Math.round(dataPerDay['meat'] * dataPerDay['water'] / 7 * days)).start();
        landOutputContainer.innerHTML = countUp.countElement(landOutputContainer, Math.round(dataPerDay['meat'] * dataPerDay['land'] / 7 * days)).start();
        treesOutputContainer.innerHTML = countUp.countElement(treesOutputContainer, Math.round(dataPerDay['meat'] * dataPerDay['land'] * dataPerDay['trees'] / 7 * days)).start();
        co2OutputContainer.innerHTML = countUp.countElement(co2OutputContainer, Math.round(dataPerDay['meat'] * dataPerDay['co2'] / 7 * days)).start();
        wasteOutputContainer.innerHTML = countUp.countElement(wasteOutputContainer, Math.round(dataPerDay['meat'] * dataPerDay['waste'] / 7 * days)).start();
        // waterOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['water'] / 7 * days).toLocaleString();
        // landOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] / 7 * days).toLocaleString();
        // treesOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] * dataPerDay['trees'] / 7 * days).toLocaleString();
        // co2OutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['co2'] / 7 * days).toLocaleString();
        // wasteOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['waste'] / 7 * days).toLocaleString();
    }


    // updateNumbers(5);

    return {
        updateNumbers: updateNumbers,
        meatOutputContainer: meatOutputContainer
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
        meatOutputContainer.innerHTML = Math.round(dataPerDay['meat'] / 7).toLocaleString();
        waterOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['water'] / 7).toLocaleString();
        landOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] / 7).toLocaleString();
        treesOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['land'] * dataPerDay['trees'] / 7).toLocaleString();
        co2OutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['co2'] / 7).toLocaleString();
        wasteOutputContainer.innerHTML = Math.round(dataPerDay['meat'] * dataPerDay['waste'] / 7).toLocaleString();
    }

    // updateNumbers(5);

    return {
        updateNumbers: updateNumbers
    }
})();

$(document).alton({
    fullSlideContainer: 'page-container', // Tell Alton the full height container
    singleSlideClass: 'main-section', // Tell Alton the full height slide class
    useSlideNumbers: false, // Set to false if you don't want to use pagination
    bodyContainer: 'body', // Tell Alton the body class
});

// Icons Transition
// var iconTransition = (function() {
//     var tables = body.querySelectorAll('.table');
//     window.addEventListener('scroll', function() {
//         for (var i = 0; i < tables.length; i++) {
//             if (window.pageYOffset > tables[i].offsetTop / 2) {
//                 tables[i].classList.add('visible');
//             }
//         }
//     });
// })();

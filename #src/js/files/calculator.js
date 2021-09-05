if (document.querySelector('.mortgage__calculator')) {
    const sliderCostElement = document.querySelector('#costEstateSlider');
    const valueCostElement = document.querySelector('#costEstateValue');

    noUiSlider.create(sliderCostElement, {
        range: {
            min: 1500000,
            max: 10000000,
        },
        start: 2000000,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },

    });
    sliderCostElement.noUiSlider.on('update', (values, handle) => {
        valueCostElement.value = values[handle];
    });
    valueCostElement.addEventListener('change', () => {
        sliderCostElement.noUiSlider.updateOptions({
            start: valueCostElement.value,
        })
    });

    const sliderPaymentElement = document.querySelector('#initialPaymentSlider');
    const valuePaymentElement = document.querySelector('#initialPaymentValue');

    noUiSlider.create(sliderPaymentElement, {
        range: {
            min: 10000,
            max: 1000000,
        },
        start: 80000,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },
    });
    sliderPaymentElement.noUiSlider.on('update', (values, handle) => {
        valuePaymentElement.value = values[handle];
    });
    valuePaymentElement.addEventListener('change', () => {
        sliderPaymentElement.noUiSlider.updateOptions({
            start: valuePaymentElement.value,
        })
    });

    const sliderMortgageTermElement = document.querySelector('#mortgageTermSlider');
    const valueMortgageTermElement = document.querySelector('#mortgageTermValue');

    noUiSlider.create(sliderMortgageTermElement, {
        range: {
            min: 2,
            max: 35,
        },
        start: 5,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },
    });
    sliderMortgageTermElement.noUiSlider.on('update', (values, handle) => {
        valueMortgageTermElement.value = values[handle];
    });
    valueMortgageTermElement.addEventListener('change', () => {
        sliderMortgageTermElement.noUiSlider.updateOptions({
            start: valueMortgageTermElement.value,
        })
    });
}


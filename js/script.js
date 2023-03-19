function formatInputData(input, mask, output) {
    input.oninput = () => {
        if (mask) {
            output.innerHTML = input.value;
        }

        if (input.value) {
            IMask(input, mask);
            output.innerHTML = input.value;
        } else {
            output.innerHTML = mask.mask;
        }
    };
}

// card name
formatInputData(
    document.querySelector('#name'),
    mask = {},
    document.querySelector('.card__name')
);

// card number
formatInputData(
    document.querySelector('#number'),
    mask = { mask: '0000 0000 0000 0000' },
    document.querySelector('.card__number')
);

// card date
formatInputData(
    document.querySelector('#date'),
    mask = {
        mask: 'MM/YY',
        // create mask blocks
        blocks: {

            YY: {
                mask: '00'
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
            }
        }
    },
    document.querySelector('.card__date')
);

// card cvc
formatInputData(
    document.querySelector('#cvc'),
    mask = { mask: '000' },
    document.querySelector('.card__cvc')
);
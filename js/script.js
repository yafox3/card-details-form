const inputNumber = document.querySelector('#number');
const inputDate = document.querySelector('#date')



inputNumber.oninput = () => {
    const mask = {
        mask: '0000 0000 0000 0000'
    };

    if (inputNumber.value) {
        IMask(inputNumber, mask);
        document.querySelector('.card__number').innerHTML = inputNumber.value;
    } else {
        document.querySelector('.card__number').innerHTML = mask.mask;
    }

};

inputDate.oninput = () => {
    const mask = {
        mask: '00/00'
    }

    if (inputDate.value) {
        if (inputDate.value / 1000 <= 12 && inputDate.value % 1000 <= 12) {
            IMask(inputDate, mask);
            document.querySelector('.card__date').innerHTML = inputDate.value;
        } else {
            inputDate.value = '';
        }

    } else {
        document.querySelector('.card__date').innerHTML = mask.mask;
    }
};
const keys = document.querySelectorAll('.item'),
    inputView = document.querySelector('.wrapper__input_view');


calc_btns = [...keys].filter(i => i.id == false);
// превращаем HTML-collection в массив HTML-объектов и выбираем цифры и мат. операции!

func_btns = [...keys].filter(i => i.id);
// превращаем HTML-collection в массив HTML-объектов и выбираем функционые операции (delete, reset, equal)!



// выводим команды о input_view
calc_btns.forEach(i => {
    i.addEventListener('click', () => inputView.value += i.textContent.trim());
});

func_btns.forEach((i, ind) => {
    i.addEventListener('click', () => {
        calc_functions(i);
    });
});

function calc_functions(i) {

    let targ = inputView.value;

    if (i.id.includes('reset'))
        inputView.value = '';
    else if (i.id.includes('delete'))
        inputView.value = inputView.value.slice(-inputView.value.length, -1);
    else
        inputView.value = eval(inputView.value);
}
//ожидаем загрузки страницы
$(document).ready(() => {
    //проходим циклом по каждому элементу с классом .countup
    $('.countup').each(function() {
        //передаем переменной текущий элемент
        //записываем в переменную конечное значение счетчика из атрибута data-end
        const that = $(this),
                countTo=that.attr('data-end');
                
        //создаем jQuery функцию animate()
        //которой передаем параметры
        //в первом параметре: countNum - значение, на котором будет остановка счетчика
        $({countNum:0}).animate({
            countNum: countTo
        },
        //второй параметр: объект со значениями
        //1. длительность анимации,
        //2. плавности анимации,
        //3. функции, что должно выполняться на каждом шаге
        //4. функции, что должно выполнится при завершении
        {
            duration: 8000,
            easing: 'linear',
            step: function() {
                that.text(Math.floor(this.countNum));
            },
            complete: function() {
                that.text(this.countNum);
            }
        });
    });
});
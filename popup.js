//ожидаем загрузки документа
$(document).ready(() => {
    //после загрузки ищем все элементы с классом .portfolio-item и задаем событие щелчка
    $('.portfolio-item').on('click',(e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);

    });
    $('.control-item').on('click',(e) =>{
        e.stopPropagation();
        slideTestimonials(e.currentTarget);
    });
});
//функция, выполняющаяся по клику на активный элемент
function createPopup(item) {
    console.log(item);
    //передаём HTML в jQuery переменную
    const clicked = $(item);
    //получаем ссылку из атрибута дата
    const src = clicked.data('src');
    //создаем блок-контейнер
    const container=$('<div>', {'class': 'popup-container'});
    //создаем картинку
    const img = $('<img>', {'class':'popup','src': src});
    //добавляем картинку в родительский блок
    container.append(img);
    //блоу с картинкой РИСУЕМ в HTML-документе
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });
    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();
        }, 250);
    });
}
//функция, выполняющаяся по клику на НЕактивный элемент
function slideTestimonials(item) {
    //передаем HTML в jQuery переменную
    const clicked = $(item);
    //проверяем, что страница неактивна
    if (clicked.hasClass('active')) {
        //прекращает работу программы, если уже активна
        return;
    }
    //получаем номер кнопки
    const index = $('.control-item').index(clicked);
    //измеряем ширину карточки вместе с margin - ключ true 
    const width = $('.testimonials-card').outerWidth(true);
    //измеряем необходимое дл пролистывания расстояние и применяем к блоку-обертке
    const scroll=width*2*index;
    $('.testimonials-inner').css('transform', 'translateX(-'+scroll+'px)');
    //удаляем у всех кнопок класс active
    $('.control-item').removeClass('active');
    //задаем класс active кнопки с текущим индексом
    $('.control-item').eq(index).addClass('active');
}
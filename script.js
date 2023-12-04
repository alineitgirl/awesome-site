window.onload = function () {
    const hamburger = document.getElementById('hamburger');

    hamburger.onclick = function() {
        let topNav = document.getElementById('myTopnav');
        if (topNav.className === 'responsive') {
            topNav.className = '';
        }
        else {
            topNav.className = 'responsive';
        }
    }
    
    const menuList = document.querySelectorAll('.menu-element');
    //проходим циклом по найденным элементам
    menuList.forEach(function(element) {
        //каждому элементу создаём обработчик события "клик мыши"
        element.addEventListener('click', function(event) {
        //считываем атрибут data у эдлемента, по которому был произведен щелчок
        const elementLink = element.dataset.link;
        //проверяем, есть ли альтернативная ссылка и тогда выполняем дальше
        if (elementLink) {
            //прерываем стандартное поведение ссылки
            event.preventDefault();
            //плавно прокручиваем страницу к искомому блоку
            document.getElementById(elementLink).scrollIntoView({behaviour: 'smooth'});
        }
        //иначе ничего не делаем
        });
    });
}
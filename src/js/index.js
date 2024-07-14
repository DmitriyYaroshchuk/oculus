document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tabs__btn-item');
    const tabContent = document.querySelectorAll('.tabs__content-item');

    function open(event) {
        const currentBtn = event.currentTarget;
        const targetAttribute = currentBtn.dataset.btn;

        tabButtons.forEach(item => {
            item.classList.remove('tabs__btn-item--active');
        });

        tabContent.forEach(item => {
            item.classList.remove('tabs__content-item--active')
        });

        currentBtn.classList.add('tabs__btn-item--active');
        document.querySelector(`#${targetAttribute}`).classList.add('tabs__content-item--active');
    }

    tabButtons.forEach(elem => {
        elem.addEventListener('click', open);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--active');
    })
});



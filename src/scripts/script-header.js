// Принцип такой, пользователь скролится вниз, хедер получает свойсво hide / show
// Расстояние которое нужно проскролить находится в параметре "defaultOffset"


// Вариант 1, пользователь скролится вниз, хедер уменьшается

// let lastScroll = 0;
// const defaultOffset = 10;
// const header = document.querySelector('.header');

// const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');

// window.addEventListener('scroll', () => {
//     if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
//         //scroll down
//         header.classList.remove('show');
//         header.classList.add('hide');
//     }
//     else if (scrollPosition() < lastScroll && containHide()) {
//         //scroll up
//         header.classList.remove('hide');
//         header.classList.add('show');
//     }

//     lastScroll = scrollPosition();
// })








// Вариант 2, хеадер пропадает если пользователь проскролил значение в переменной "fullHideOffset"
// от верхушки сайта

// let lastScroll = 0;
// const defaultOffset = 10;
// const fullHideOffset = 800;
// const header = document.querySelector('.header');

// const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');
// const containFullHide = () => header.classList.contains('fullhide');

// window.addEventListener('scroll', () => {
//     const currentScroll = scrollPosition();
//     const scrollDelta = currentScroll - lastScroll;

//     // Определяем направление скрола (вниз или вверх)
//     const scrollingDown = scrollDelta > 0;
    
//     // Показываем/скрываем хедер в зависимости от направления скрола
//     if (scrollingDown && currentScroll > defaultOffset) {
//         header.classList.remove('show');
//         header.classList.add('hide');
        
//         // Полное скрытие при достижении порога fullHideOffset
//         if (currentScroll > fullHideOffset) {
//             header.classList.add('fullhide');
//         }
//     } else if (!scrollingDown) {
//         header.classList.remove('hide', 'fullhide');
//         header.classList.add('show');
//     }

//     lastScroll = currentScroll;
// });










// Вариант 3, fullHideOffset вешается после последней точки где от получал значение show

let lastScroll = 0;
const defaultOffset = 10;
const fullHideOffset = 800;
const header = document.querySelector('.header');
let showPosition = 0;

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const containFullHide = () => header.classList.contains('fullhide');

window.addEventListener('scroll', () => {
    const currentScroll = scrollPosition();
    const scrollDelta = currentScroll - lastScroll;

    const scrollingDown = scrollDelta > 0;
    
    if (scrollingDown && currentScroll > defaultOffset) {

        if (!containHide()) {
            header.classList.remove('show');
            header.classList.add('hide');
            showPosition = currentScroll; 
        }

        if (currentScroll > showPosition + fullHideOffset) {
            header.classList.add('fullhide');
        }

    } else if (!scrollingDown) {
        header.classList.remove('hide', 'fullhide');
        header.classList.add('show');
        showPosition = currentScroll; 
    }

    lastScroll = currentScroll;


    
});


const chameleonHeader = document.querySelector('.header');
const sections = document.querySelectorAll('.content-block');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const bgColor = getComputedStyle(section).backgroundColor;
      header.style.backgroundColor = bgColor;
    }
  });
});



import './sass/main.scss';

//====================== import oraz funkcje dla slider opini ====================================
import Siema from 'siema';
const mySiema = new Siema({ draggable: false });

const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn0.addEventListener('click', () => mySiema.goTo(0));
btn1.addEventListener('click', () => mySiema.goTo(1));
btn2.addEventListener('click', () => mySiema.goTo(2));

btn0.addEventListener('click', () => changeClass(0));
btn1.addEventListener('click', () => changeClass(1));
btn2.addEventListener('click', () => changeClass(2));


function changeClass(id_element) {
    if (id_element == 0) {
        if (document.querySelector('.btn0').classList.contains('btn--selected')){}
        else {
            document.querySelector('.btn0').classList.add('btn--selected');
            document.querySelector('.buttons_reviews__svg0').classList.remove('is-hidden');
        }
        document.querySelector('.btn1').classList.remove('btn--selected');
        document.querySelector('.btn2').classList.remove('btn--selected');
            document.querySelector('.buttons_reviews__svg1').classList.add('is-hidden');
            document.querySelector('.buttons_reviews__svg2').classList.add('is-hidden');

    }
    else if (id_element == 1) {
        if (document.querySelector('.btn1').classList.contains('btn--selected')){}
        else {
            document.querySelector('.btn1').classList.add('btn--selected');
            document.querySelector('.buttons_reviews__svg1').classList.remove('is-hidden');

        }
        document.querySelector('.btn0').classList.remove('btn--selected');
        document.querySelector('.btn2').classList.remove('btn--selected');
        document.querySelector('.buttons_reviews__svg0').classList.add('is-hidden');
            document.querySelector('.buttons_reviews__svg2').classList.add('is-hidden');
    }
    else if (id_element == 2) {
        if (document.querySelector('.btn2').classList.contains('btn--selected')){}
        else {
            document.querySelector('.btn2').classList.add('btn--selected');
            document.querySelector('.buttons_reviews__svg2').classList.remove('is-hidden');

        }
        document.querySelector('.btn0').classList.remove('btn--selected');
        document.querySelector('.btn1').classList.remove('btn--selected');
        document.querySelector('.buttons_reviews__svg0').classList.add('is-hidden');
            document.querySelector('.buttons_reviews__svg1').classList.add('is-hidden');
    }
    }
//====================================================================================

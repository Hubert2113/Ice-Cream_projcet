import './sass/main.scss';

//===== import dla karuzeli opini ===========
import Siema from 'siema';
const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

//===========================================

import './style.css';
import addData from './modules/addData.js';
import fetchData from './modules/fetchData.js';

const form = document.querySelector('form');
const enterName = document.querySelector('#add-name');
const enterScore = document.querySelector('#add-score');
const refresh = document.querySelector('.refresh');
const scoreCard = document.querySelector('.table-body');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addData(enterName.value, enterScore.value);
  form.reset();
});

refresh.addEventListener('click', () => {
  scoreCard.innerHTML = '';
  fetchData();
});

window.onload = () => {
  fetchData();
};

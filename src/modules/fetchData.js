const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const traceId = 'qMomluhqwNPnLcHfQTwf';
const addDataUrl = `${baseUrl}games/${traceId}/scores/`;
const scoreCard = document.querySelector('.table-body');

const trackScores = (gameScores) => {
  gameScores.forEach((player) => {
    // tr
    const tableRow = document.createElement('tr');
    scoreCard.appendChild(tableRow);
    // td
    const tableData = document.createElement('td');
    tableData.innerHTML = `${player.user}: ${player.score}`;
    tableRow.appendChild(tableData);
  });
};

// fetch added score from API
const fetchData = async () => {
  await fetch(addDataUrl)
    .then((response) => response.json())
    .then((json) => trackScores(json.result));
};

export default fetchData;
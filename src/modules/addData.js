const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const traceId = 'qMomluhqwNPnLcHfQTwf';
const addDataUrl = `${baseUrl}games/${traceId}/scores/`;

const addData = async (player, score) => {
  await fetch(addDataUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export default addData;

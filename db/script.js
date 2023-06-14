const sethighscores = async (name, score) => {
    return await fetch('set_highscores.php', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, score }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });   
  };
  
  const gethighscores = async () => {
    return await fetch('get_highscores.php', {
      method: 'GET',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  // Create test-button for getting highscores
const getscoreBtn = document.querySelector('#get-score-btn');

getscoreBtn.addEventListener('click', async () => {
  console.log('Getting highscores');
  const score = await gethighscores();
  const div = document.querySelector('#score');
  div.innerHTML = '';
  for (let i = 0; i < score.length; i++) {
    div.innerHTML += `${score[i].name} - ${score[i].score}` + '<br>';
  }
});

// Dispatch click-event to get highscores on page-load
getscoreBtn.click();

// Create test-button for adding a score
const addScoreBtn = document.querySelector('#add-score-btn');
const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');

addScoreBtn.addEventListener('click', async () => {
  console.log('Adding highscores');
  const name = nameInput.value.toUpperCase();
  const score = scoreInput.value;
  const result = await sethighscores(name, score);
  getscoreBtn.click();
  console.log('Success: ', result);
});
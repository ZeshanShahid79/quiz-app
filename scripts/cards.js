export default card;
function card() {
  const quizCards = document.querySelectorAll('[data-js="quizCard"]');

  quizCards.forEach(card => {
    const bookmark = card.querySelector('[data-js="bookmark"]');
    const answerButton = card.querySelector('[data-js="answerButton"]');
    const answerText = card.querySelector('[data-js="answerText"]');

    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('marked');
    });

    answerButton.addEventListener('click', () => {
      answerText.classList.toggle('hidden');
      if (answerButton.textContent === 'Show Answer') {
        answerButton.textContent = 'Hide Answer';
      } else {
        answerButton.textContent = 'Show Answer';
      }
    });
  });
}

/*const array23 = [
  {
    question: 'Capitol City of Germany?',
    answer: 'Berlin',
    tags: ['Hamburg', 'Berlin', 'Köln', 'München'],
  },
  {
    question: 'Capitol City of England?',
    answer: 'London',
    tags: ['Hamburg', 'Berlin', 'Köln', 'München'],
  },
];

function renderCard(list) {
  list.forEach(element => {
    const createCard = document.createElement('div');
    createCard.className = 'card';
    createCard.setAttribute('data-js', 'quizCard');
    createCard.innerHTML = `
    <div class="card__title">
          <h2>Question:</h2>
          <button class="card__bookmark">
            <img
              data-js="bookmark"
              class="card__bookmark__icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bookmark_icon.svg/1024px-Bookmark_icon.svg.png"
              alt="bookmark icon"
            />
          </button>
        </div>
        <p class="card__question">
          ${element.question}
        </p>
        <button data-js="answerButton" class="card__button">Show Answer</button>
        <p data-js="answerText" class="card__question hidden">
          ${element.answer}
        </p>

        <ul class="card__hashtags">
        <li class="card__hashtags-tag">#Hamburg</li>
        <li class="card__hashtags-tag">#Berlin</li>
        <li class="card__hashtags-tag">#Köln</li>
        <li class="card__hashtags-tag">#München</li>
      </ul>
    
    
    `;
  });
}*/

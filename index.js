import navigation from './scripts/nav.js';

navigation();

const quizCard = document.querySelectorAll('[data-js="quizCard"]');

quizCard.forEach(card => {
  const bookmark = card.querySelector('[data-js="bookmark"]');
  const answerButton = card.querySelector('[data-js="answerButton"]');
  const answerText = card.querySelector('[data-js="answerText"]');

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('marked');
  });

  answerButton.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
  });
});

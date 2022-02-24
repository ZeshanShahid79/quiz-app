export default create;

function create() {
  const questionCounter = document.querySelector('[data-js="counter"]');
  const questionArea = document.querySelector('[data-js="textArea"]');
  const answerArea = document.querySelector('[data-js="answerarea"]');
  const answerCounter = document.querySelector('[data-js="answercounter"]');
  const tagArea = document.querySelector('[data-js="tagarea"]');
  const tagCounter = document.querySelector('[data-js="tagcounter"]');
  const maxCharacters = 200;

  questionArea.addEventListener('input', () => {
    if (questionArea.value.length <= maxCharacters) {
      questionCounter.textContent = `${questionArea.value.length} /${maxCharacters}`;
    }
  });

  answerArea.addEventListener('input', () => {
    if (answerArea.value.length <= maxCharacters) {
      answerCounter.textContent = `${answerArea.value.length} /${maxCharacters}`;
      maxCharacters;
    }
  });

  tagArea.addEventListener('input', () => {
    if (tagArea.value.length <= maxCharacters) {
      tagCounter.textContent = `${tagArea.value.length} /${maxCharacters}`;
    }
  });
}

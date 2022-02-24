export default navigation;
function navigation() {
  const mainHome = document.querySelector('[data-js="home"]');
  const mainBookmarks = document.querySelector('[data-js="bookmarks"]');
  const mainCreate = document.querySelector('[data-js="create"]');
  const mainProfile = document.querySelector('[data-js="profile"]');
  //const navbar = document.querySelector('[data-js="navbar"]');

  const buttonHome = document.querySelector('[data-js="buttonHome"]');
  const buttonBookmarks = document.querySelector('[data-js="buttonBookmarks"]');
  const buttonCreate = document.querySelector('[data-js="buttonCreate"]');
  const buttonProfile = document.querySelector('[data-js="buttonProfile"]');

  //icon sets
  const iconHomeWhite = document.querySelector('[data-js="iconHomeWhite"]');
  const iconHomeBlack = document.querySelector('[data-js="iconHomeBlack"]');
  const iconBookmarkWhite = document.querySelector(
    '[data-js="iconBookmarkWhite"]'
  );
  const iconBookmarkBlack = document.querySelector(
    '[data-js="iconBookmarkBlack"]'
  );
  const iconCreateWhite = document.querySelector('[data-js="iconCreateWhite"]');
  const iconCreateBlack = document.querySelector('[data-js="iconCreateBlack"]');
  const iconProfileWhite = document.querySelector(
    '[data-js="iconProfileWhite"]'
  );
  const iconProfileBlack = document.querySelector(
    '[data-js="iconProfileBlack"]'
  );

  const iconWhite = [
    iconHomeWhite,
    iconBookmarkWhite,
    iconCreateWhite,
    iconProfileWhite,
  ];
  const iconBlack = [
    iconHomeBlack,
    iconBookmarkBlack,
    iconCreateBlack,
    iconProfileBlack,
  ];

  const buttons = [buttonHome, buttonBookmarks, buttonCreate, buttonProfile];
  const mainPage = [mainHome, mainBookmarks, mainCreate, mainProfile];

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentPage(mainPage[index]);
    });
  });

  function currentPage(page) {
    mainPage.forEach((panel, index) => {
      if (panel == page) {
        page.classList.remove('hidden');
        iconWhite[index].classList.add('hidden');
        iconBlack[index].classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
        iconWhite[index].classList.remove('hidden');
        iconBlack[index].classList.add('hidden');
      }
    });
  }
}


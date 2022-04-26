let nameInput = document.getElementById('name'); // Находим поле name формы в DOM
let jobInput = document.getElementById('about'); // Находим поле about формы в DOM
let profileName = document.querySelector('.profile__name'); // Выбираем то, что сейчас написано в Имени профиля
let profileAbout = document.querySelector('.profile__about'); // Выбираем то, что сейчас написано в О профиле
let popup = document.querySelector('.popup'); //Выбираем весь контейнер попапа

let popupSave = document.querySelector('.popup__save'); // Выбираем кнопку сохранить
let profileEdit = document.querySelector('.profile__edit'); // Выбираем кнопку Редактировать профиль
let popupClose = document.querySelector('.popup__close'); //Выбираем кнопку закрыть

function popupActive () {
  popup.classList.toggle('popup_value-active');
  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    popup.classList.toggle('popup_value-active');
}

profileEdit.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupActive);
popupSave.addEventListener('click', formSubmitHandler);


// const like = document.querySelector('.Elements__like'); // Закоментировали лайк 
                                                           // до следующего спринта
// function LikeActive () {
//   like.classList.toggle('Elements__like_value-active');
// }
// like.addEventListener('click', LikeActive);
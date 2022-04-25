const like = document.querySelector('.Elements__like');

function LikeActive () {
  like.classList.toggle('Elements__like_value-active');
}
like.addEventListener('click', LikeActive);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name') // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__about')// Воспользуйтесь инструментом .querySelector()
let ProfileName = document.querySelector('.profile__name'); // Выбираем то, что сейчас написано в Имени профиля
let ProfileAbout = document.querySelector('.profile__about'); // Выбираем то, что сейчас написано в О профиле
nameInput.value = ProfileName.textContent
jobInput.value = ProfileAbout.textContent
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    ProfileName.textContent = nameInput.value;
    ProfileAbout.textContent = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

const popupSave = document.querySelector('.popup__save');
const popup = document.querySelector('.popup');
const profileEdit = document.querySelector('.profile__edit');
const popupClose = document.querySelector('.popup__close');

function popupActive () {
  popup.classList.toggle('popup_value-active');
}

profileEdit.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupActive);
popupSave.addEventListener('click', popupActive);
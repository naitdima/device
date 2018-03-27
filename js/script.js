var popupWriteLink = document.querySelector(".main-contacts__btn"),
    popupWrite = document.querySelector(".popup-write-us"),
    userName = popupWrite.querySelector("[name=user-name]"),
    userEmail = popupWrite.querySelector("[name=user-email]"),
    popupWriteForm = popupWrite.querySelector("form"),
    popupMapLink = document.querySelector(".main-contacts__map"),
    popupMap = document.querySelector(".popup-map"),
    popupWriteClose = document.querySelector(".popup-write-us__close"),
    popupMapClose = document.querySelector(".popup-map__close");

popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("popup-write-us--active");
  userName.focus();
})

popupWriteForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupWrite.classList.add("popup-write-us--error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrite.classList.contains("popup-write-us--active")) {
      popupWrite.classList.remove("popup-write-us--active");
      popupWrite.classList.remove("popup-write-us--error");
    }
  }
})

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("popup-write-us--active");
  popupWrite.classList.remove("popup-write-us--error");
})

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-map--active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("popup-map--active")) {
      popupMap.classList.remove("popup-map--active");
    }
  }
})

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-map--active");
})



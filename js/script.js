var activeMap = document.getElementsByClassName('main-contacts__map');
var popupMap = document.getElementsByClassName('popup-map');
var closeBtn = document.getElementsByClassName('popup-close');

activeMap[0].onclick = function() {
  popupMap[0].classList.add("popup-map--active");
}
closeBtn[1].onclick = function() {
  popupMap[0].classList.remove("popup-map--active");
}
function popUpShow(namber) {
    let name = document.getElementById(`name${namber}`).innerHTML;
    let pName = document.createElement('p');
    pName.innerHTML = 'РЕЙС: ' + name;

    let date = document.getElementById(`date${namber}`).innerHTML;
    let pDate = document.createElement('p');
    pDate.innerHTML = 'ДАТА: ' + date;

    // let plane = document.getElementById(`plane${namber}`).innerHTML;
    // let pPlane = document.createElement('p');
    // pPlane.innerHTML = plane;

    // popupContent.insertBefore(pPlane, popupContent.firstChild);
    popupContent.insertBefore(pDate, popupContent.firstChild);
    popupContent.insertBefore(pName, popupContent.firstChild);
    document.getElementById('popup').style.display = 'block';
}

function popUpHide() {
    document.getElementById('popup').style.display = 'none';
    popupContent.removeChild(popupContent.firstChild);
    popupContent.removeChild(popupContent.firstChild);
    // popupContent.removeChild(popupContent.firstChild);

}

function changeItem(namber) {
    document.getElementById(`name${namber}`).style.cssText = "\
    color: #a7d2db;\
    text-decoration: underline;\
    ";

    document.getElementById(`date${namber}`).style.cssText = "\
    color: #a7d2db;\
    text-decoration: underline;\
    ";

    document.getElementById(`plane${namber}`).style.cssText = "\
    color: #a7d2db;\
    text-decoration: underline;\
    ";
  }

function rechangeItem(namber) {
    document.getElementById(`name${namber}`).style.cssText = "\
    color: #555555;\
    text-decoration: none;\
    ";

    document.getElementById(`date${namber}`).style.cssText = "\
    color: #555555;\
    text-decoration: none;\
    ";

    document.getElementById(`plane${namber}`).style.cssText = "\
    color: #555555;\
    text-decoration: none;\
    ";
}

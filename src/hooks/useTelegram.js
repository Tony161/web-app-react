const tg= window.Telegram.WebApp

export function useTelegram(){
  const onClose = ()=> tg.close();

  const onToggleButton = ()=> {
    if (tg.MainButton.isVisible){
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  let answer = null

  const requestLocation =() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        document.querySelector('#locationData').innerHTML = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
        answer = {lat: position.coords.latitude , long: position.coords.longitude}
      });
    } else {
      document.querySelector('#locationData').innerHTML = '(Geolocation is not supported in this browser)';
      answer = '(Geolocation is not supported in this browser)';
    }

    return false;
  }

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
    requestLocation,
    answer
  }
}
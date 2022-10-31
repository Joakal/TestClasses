document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    const clickMeButton = document.querySelector('.click-me')
    const otherButton = document.querySelector('.other')
    new Dialog({
      buttonElement: clickMeButton,
      dialogMessage: "What's the weather today?"
    });

    new Dialog({
      buttonElement: otherButton,
      dialogMessage: "Is it true or false?"
    });
  }
}
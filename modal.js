class Dialog {
  initialised = false;

  constructor(props) {  
    props.buttonElement.addEventListener('click', (_event) => this.initialise(props))

    this.hideDialog()
    this.hideMessage()
    console.log("Dialog initialised")
  }

  initialise(props) {
    const message = document.getElementById('confirmation-message')
    const yesButton = document.getElementById('confirmation-yes');
    const cancelButton = document.getElementById('confirmation-cancel');

    // Set the dialog message
    message.innerHTML = props.dialogMessage
    this.showDialog();

    if (!this.initialised) {
    // Set the button events
      yesButton.addEventListener('click', this.clickYes.bind(this))
      cancelButton.addEventListener('click', this.clickCancel.bind(this))
      cancelButton.removeEventListener('click', this.clickCancel.bind(this))
    }

    this.initialised = true;
    console.log("Button initialised")
  }

  setOutput(output) {
    const choice = document.getElementById('confirmation-choice')
    choice.innerHTML = output
    this.showMessage();
  }

  showDialog() {
    const overlay = document.querySelector('.overlay')
    overlay.classList.remove("hidden")
  }

  hideDialog() {
    const overlay = document.querySelector('.overlay')
    overlay.classList.add("hidden")
  }

  showMessage() {
    const output = document.querySelector('.confirmation-output')
    output.classList.remove("hidden")
  }

  hideMessage() {
    const output = document.querySelector('.confirmation-output')
    output.classList.add("hidden")
  }

  clickYes(ev) {
    console.log("YES");
    this.setOutput("yes I did it")
    this.hideDialog();
  }

  clickCancel(ev) {
    console.log("CANCEL");
    this.setOutput("I cancel it")
    this.hideDialog();
  }
}
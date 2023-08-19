// alert('f');
function getInputValue(elementId) {
  const inputFromValue = document.getElementById(elementId);
  const inputValue = parseFloat(inputFromValue.value);
  inputFromValue.value = "";
  return inputValue;
}
function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setElementValue(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

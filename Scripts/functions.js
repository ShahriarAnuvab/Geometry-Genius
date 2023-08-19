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

function addCalculation(areaType, area){
  console.log(areaType+ " " + area);
  const addDiv = document.getElementById('addCalculation');
  const p = document.createElement('p');
  // p.innerText = areaType + " " + area;
  p.classList.add('m-5', 'text-center')
  const count =addDiv.childElementCount;
  p.innerHTML = `${count+1}. ${areaType}: ${area} <span>cm</span><sup>2</sup> <button class="btn btn-sm">Convert</button>`
  addDiv.appendChild(p); 
}

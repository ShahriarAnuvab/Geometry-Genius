document.getElementById("btn-Triangle").addEventListener("click", function () {
  const inputBase = getInputValue("inputBase");
  const inputHeight = getInputValue("inputHeight");
  if (isNaN(inputBase) || isNaN(inputHeight)) {
    alert("Invalid Input");
  } else {
    const area = 0.5 * inputBase * inputHeight;
    console.log(area);
    const areaValue = getElementValue("triangleArea");;
    setElementValue("triangleArea", area);
    addCalculation("Triangle", area);
  }
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const inputWidth = getInputValue("inputWidth");
  const inputLength = getInputValue("inputLength");
  if (isNaN(inputWidth) || isNaN(inputLength)) {
    alert("Invalid Input");
  } else {
    const area = inputWidth * inputLength;
    const areaValue = getElementValue("rectangleArea");
    setElementValue("rectangleArea", area);
    addCalculation("Rectangle", area);
  }
});

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const inputWidth = getInputValue("inputBaseP");
    const inputHeightP = getInputValue("inputHeightP");
    if (isNaN(inputWidth) || isNaN(inputHeightP)) {
      alert("Invalid Input");
    } else {
      const area = inputWidth * inputHeightP;
      console.log(area);
      const areaValue = getElementValue("ParallelogramArea");
      setElementValue("ParallelogramArea", area);
      addCalculation("Parallelogram", area);
    }
  });
document
  .getElementById("btn-rhombus")
  .addEventListener("click", function () {
    const inputWidth = getInputValue("inputBaseR");
    const inputHeightP = getInputValue("inputHeightR");
    if (isNaN(inputWidth) || isNaN(inputHeightP)) {
      alert("Invalid Input");
    } else {
      const area = inputWidth * inputHeightP *  0.5;
      const areaValue = getElementValue("RhombusArea");
      setElementValue("RhombusArea", area);
      addCalculation("RhombusArea", area);
    }
  });
document
  .getElementById("btn-pentagon")
  .addEventListener("click", function () {
    const inputWidth = getInputValue("inputBasePen");
    const inputHeightP = getInputValue("inputHeightPen");
    console.log("Parallelogram", inputWidth, inputHeightP);
    if (isNaN(inputWidth) || isNaN(inputHeightP)) {
      alert("Invalid Input");
    } else {
      const area = inputWidth * inputHeightP * 0.5;
      console.log(area);
      const areaValue = getElementValue("PentagonArea");
      console.log(areaValue);
      setElementValue("PentagonArea", area);
      addCalculation("PentagonArea", area);
    }
  });
document
  .getElementById("btn-Ellipse")
  .addEventListener("click", function () {
    const inputWidth = getInputValue("inputA");
    const inputHeightP = getInputValue("inputB");
    if (isNaN(inputWidth) || isNaN(inputHeightP)) {
      alert("Invalid Input");
    } else {
      const area = inputWidth * inputHeightP * 3.1416;
      console.log(area);
      const areaValue = getElementValue("PentagonArea");;
      setElementValue("PentagonArea", area);
      addCalculation("PentagonArea", area);
    }
  });


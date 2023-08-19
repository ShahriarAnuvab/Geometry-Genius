// alert('s');
document.getElementById('btn-Triangle').addEventListener('click', function(){
    const inputBase = getInputValue('inputBase');
    const inputHeight = getInputValue('inputHeight');
    // console.log(inputBase);
    // console.log(inputHeight);
    if(isNaN(inputBase) || isNaN(inputHeight)){
        alert('Invalid Input');
    }else{
        const area = 0.5 * inputBase * inputHeight;
        console.log(area);
        const areaValue = getElementValue('triangleArea')
        console.log(areaValue);
        setElementValue('triangleArea', area);
        addCalculation('Triangle', area);        
    }
    // const area = 0.5 * inputBase * inputHeight;
    // console.log(area);
    // const areaValue = getElementValue('triangleArea')
    // console.log(areaValue);
    // setElementValue('triangleArea', area);
    // addCalculation('Triangle', area);
})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputWidth = getInputValue('inputWidth');
    const inputLength = getInputValue('inputLength');
    if(isNaN(inputWidth) || isNaN(inputLength)){
        alert('Invalid Input');
    }else{
        const area = inputWidth * inputLength;
        console.log(area);
        const areaValue = getElementValue('rectangleArea')
        console.log(areaValue);
        setElementValue('rectangleArea', area);
        addCalculation('Rectangle', area);        
    }

})
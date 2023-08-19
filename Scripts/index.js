// alert('s');
document.getElementById('btn-Triangle').addEventListener('click', function(){
    const inputBase = getInputValue('inputBase');
    const inputHeight = getInputValue('inputHeight');
    // console.log(inputBase);
    // console.log(inputHeight);
    const triangle = 0.5 * inputBase * inputHeight;
    console.log(triangle);
    const areaValue = getElementValue('triangleArea')
    console.log(areaValue);
    setElementValue('triangleArea', triangle);
    
})
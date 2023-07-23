document.addEventListener('DOMContentLoaded', function() {
    var celsiusInput = document.getElementById('celsius_input');
    var fahrenheitInput = document.getElementById('farhenheit_input');
    var submitButton = document.querySelector('.button');
  
    submitButton.addEventListener('click', function() {
      var celsiusValue = parseFloat(celsiusInput.value);
  
      if (!isNaN(celsiusValue)) {
        var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
      }
    });
    submitButton.addEventListener('click', function() {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
    
        if (!isNaN(fahrenheitValue)) {
          var celsiusValue = (fahrenheitValue -32)* 5/ 9;
    
          celsiusInputInput.value = celsiusValueValue.toFixed(2);
        }
      });
  });
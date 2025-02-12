const decryptInput = document.getElementById('decryptInput');
const decryptOutput = document.getElementById('decryptOutput');

function updateOutput() {
  const inputText = decryptInput.value;
  const outputText = nokiaChiper.decrypt(inputText); 
  decryptOutput.value = outputText;
}

decryptInput.addEventListener('input', updateOutput);
import nokiaChiper from "../code/javascript";

const encryptInput = document.getElementById('encryptInput');
const encryptOutput = document.getElementById('encryptOutput');

function updateOutput() {
  const inputText = encryptInput.value;
  const outputText = nokiaChiper.encrypt(inputText); 
  encryptOutput.value = outputText;
}

encryptInput.addEventListener('input', updateOutput);
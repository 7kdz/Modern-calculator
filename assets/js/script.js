const screen = document.getElementById('screen');
const history = document.getElementById('history');
let operation = '';

function append(value) {
  if (/^[+*/.-]$/.test(value)) {
    if (operation === '' || /[+*/.-]$/.test(operation)) return;
  }
  operation += value;
  screen.innerText = operation.replace(/\*/g, '×').replace(/\//g, '÷');
}

function replaceOperator(op) {
  if (operation === '') return;
  if (/[+*/.-]$/.test(operation)) {
    operation = operation.slice(0, -1);
  }
  operation += op;
  screen.innerText = operation.replace(/\*/g, '×').replace(/\//g, '÷');
}

function clearLast() {
  operation = operation.slice(0, -1);
  screen.innerText = operation.replace(/\*/g, '×').replace(/\//g, '÷') || '0';
}

function clearAll() {
  operation = '';
  screen.innerText = '0';
  history.innerText = '';
}

function calculate() {
  try {
    if (/[+*/.-]$/.test(operation)) return;
    const result = eval(operation);
    history.innerText = operation.replace(/\*/g, '×').replace(/\//g, '÷');
    screen.innerText = result;
    operation = result.toString();
  } catch (e) {
    screen.innerText = 'Error';
    operation = '';
  }
}

document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789/*-+.';
  if (validKeys.includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (e.key === 'Backspace') {
    clearLast();
  } else if (e.key.toLowerCase() === 'c' || e.key === 'Escape') {
    clearAll();
  }
});

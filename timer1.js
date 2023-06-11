let timer = function(input) {
  input = input.slice(2).sort((a, b) => a - b);
  if (input[0] <= 0) {
    return;
  }
  for (let i of input) {
    setTimeout(() => process.stdout.write('\x07'), i * 1000);
  };  
}
timer(process.argv);
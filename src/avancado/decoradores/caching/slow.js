// função lenta
function slow(num) {
  for (let i = 0; i < 9_999_999; i++) {
    [].push(i);
  }

  return num;
}

export default slow;
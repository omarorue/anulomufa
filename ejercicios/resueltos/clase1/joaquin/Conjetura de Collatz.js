let n = 1;

for (let i = 0; i < 15; i++) {
  if (n % 2 == 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  console.log(n);
}

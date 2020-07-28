const sentence = "hello there from lighthouse labs";

let wait = 0;
for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  setTimeout(() => {
    process.stdout.write(char);
    if (i === sentence.length - 1) {
      console.log("");
    }
  }, wait); // <= 1s
  
  wait += 50;
  
}

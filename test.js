let arr = ["JavaScript", "PHP"];

function test(txt) {
  return "Hello, " + txt;
}
arr.forEach(function(item) {
  console.log(test(item));
});
console.log(test("JavaScript!"));
console.log(test("PHP!"));

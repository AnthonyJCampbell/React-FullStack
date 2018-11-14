function* generateThreeNumbers(){
  yield 1;
  yield 2;
  yield 3;
}
var numberIterator = generateThreeNumbers()

console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());


function* fibonacci(n){
  const infinite = !n && n!==0;
  let current = 0 ;
  let next = 1;
  while(infinite || n--){
    yield current;
    [current,next] = [next, current+next];
  }
}
var [...top10] = fibonacci(10)
 
console.log(top10)

console.log('Start');

setTimeout(() => {
  console.log('Timer Callback');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1 Resolved');
  })
  .then(() => {
    console.log('Promise 2 Resolved');
  });

console.log('End');

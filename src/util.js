function add(...args) {
  return args.reduce((prev, currrent, index) => {
    return prev + currrent  * 1;
  }, 0);
}

function multiply(...args) {
  return args.reduce((prev, currrent, index) => {
    return prev * currrent;
  }, 1);
}

export {
  add,
  multiply
}

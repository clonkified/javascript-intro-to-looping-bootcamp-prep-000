function forLoop(ar) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      ar.push("I am 1 strange loop.");
    } else {
      ar.push(`I am ${i} strange loops.`);
    }
  }
  return ar;
}


function whileLoop(num) {
  while(num > 0) {
    console.log(--num);
  }
  return "done";
}

function doWhileLoop(ar) {
  do {
    ar.pop();
  } while(ar.length > 0 && maybeTrue());
  return ar;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
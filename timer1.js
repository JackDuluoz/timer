//Note: preparing this code for Command Line Arguments using process.argv
//required manipulation of input array elements into numbers using Number(),
//which has stopped it from excluding stringed numbers when tested in VSCode
//without CLA. Be aware that if you need this for use outside of CLA you will
//have to figure out which instances of Number() are mucking it up and change
//them back. Perhaps create two versions or debug more throughly in time. 

const diff = (array) => {
  return array.slice(1).map((item, index) => {
    return item - array[index]
  })
}
//console.log(diff([1, 3, 4, 8, 15]))

let input = process.argv.slice(2)

const alarm = function (seconds) {
  if (!seconds) {
    return ""
  }
  let sorted = []
  for (let second of seconds) {
    if (second >= 0 && typeof Number(second) === "number") {
      sorted.push(second)
    }
  }
  sorted.sort((a, b) => {
    if (Number(a) < Number(b)) {
      return -1
    }
    if (Number(a) > Number(b)) {
      return 1
    }
    return 0
  })
  //console.log(sorted)
  const end = Number(sorted.pop().toString())
  //console.log(end)
  sorted.push(Number(end))
  let wait = diff(sorted)
  //console.log(wait)
  let w = 0
  //console.log(sorted)
  let delay = sorted[0] * 1000
  for (let time = 0; time <= end; time++) {
    for (let s of sorted) {
      if (time === Number(s)) {
        setTimeout(() => {
          process.stdout.write("beep " + time + "   ");
        }, delay);
        delay = delay + (wait[w] * 1000)
        w = w + 1
      }
    }
  }
}

alarm(input)
//console.log(alarm())
//const test = [2, 14, 6, -11, -54, "2", "n"]
//alarm(test)

// setTimeout(() => {
//   process.stdout.write("\n");
// }, 100);
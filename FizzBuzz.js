/**
 * Created by chris on 8/4/16.
 */
function FizzBuzz(start, finish){
    this.start = start;
    this.finish = finish;

    this.doIt = function() {
        for (var x = this.start; x <= this.finish; x++) {
            if ((x % 3 == 0) && (x % 5 ==0)) {
                console.log("FizzBuzz ");
            } else if (x % 3 == 0) {
                console.log("Fizz ");
            } else if (x % 5 == 0) {
                console.log("Buzz ");
            } else {
                console.log(x + " ");
            }
        }
    }
}


var funnyPrint = new FizzBuzz(1,100);
funnyPrint.doIt();


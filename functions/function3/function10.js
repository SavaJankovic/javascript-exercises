/* Write a program to find the most frequent
 item of an array. */
 "use strict";


function find() {
    var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {

        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                m++;
            }

            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }

        m = 0;
    }
    return item + " repeat " + mf + " times";

}
console.log(find());

# max-subarray-sum
Returns the contiguous array values with the max sum.


The maximum subarray problem is the task of finding the contiguous 
subarray within a one-dimensional array of numbers which has the 
largest sum. 

For example, for the sequence of values `−2, 1, −3, 4, −1, 2, 1, −5, 4` 
the contiguous subarray with the largest sum is `4, −1, 2, 1`, which sums 6.

### Samples
```
var a = [1, -5, -4, 10, 15, 45]; => [10, 15, 45] 
var a = [1, 5, -4, 10, 15, 45]; =>  [1, 5, -4, 10, 15, 45]
var a = [10, 50, -40, 10, -15, -45]; => [10, 50]
```

### Run
`node index.js` returns max sum subarray for default test array

`node index.js '[array]'` returns max sum subarray for passed array

### Sample usage
`node index.js '[-4,40,20,-10,100,-80,10,20]'` --> `MAX SUBARRAY SUMS 150: [ 40, 20, -10, 100 ]`

`node index.js '[1, 2, 3, 4]'` --> `MAX SUBARRAY SUMS 10: [ 1, 2, 3, 4 ]`

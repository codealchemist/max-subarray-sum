var array = [40,-20,100,-100,50,40,-200]
var total = array.length
var max = null
var sub = []
var subMax

console.log('-'.repeat(80))
console.log('GET MAX SUM SUB-ARRAY')
console.log('-'.repeat(80))
console.log('- original array:', array)
console.log()

console.log('- iterations:')
for (var i=0; i<total; ++i) {
	var rightPos = i+1
	while (rightPos <= total) {
		sub = array.slice(i, rightPos)
		++rightPos
		var sum = 0
		sub.map((val) => {
			sum+=val
		})
		if (max === null || sum > max) {
			max = sum
			subMax = sub
		}
		console.log(`- sum: ${sum} / sub:`, sub)
	}
}

console.log('-'.repeat(80))
console.log(`- max subarray sums ${max}:`, subMax)
console.log('-'.repeat(80))
console.log()

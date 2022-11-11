let fs = require("fs")
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function gcd(a,b){
	if(a ===0 && b===0){
		return -1
	}
	else if(a===0){
		return b;
	}else if(b===0){
		return a
	}
	if(a>=b){
		return gcd(b,a%b)
	}
	else{
		return gcd(a,b%a)
	}
}
let tcase = parseInt(readLine())
for(let i=0;i<tcase;i++){
	let nums = readLine().split(" ")
	console.log(gcd(parseInt(nums[0],parseInt(nums[1]))))
}
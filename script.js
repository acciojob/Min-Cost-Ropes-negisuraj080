function mincost(arr)
{ 
	arr.sort((a, b) => b - a);
 while (arr.length > 1) { // (n - 1)
     let currentCost = arr[arr.length - 1] + arr[arr.length - 2];
     totalCost += currentCost;
     arr.splice(0, 2);
     arr.pop(); arr.pop();
     arr.push(currentCost);
     arr.sort((a, b) => b - a); // (nlogn)
 }
//write your code here
// return the min cost
  
}

module.exports=mincost;

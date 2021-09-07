function factorial(n)
{
	if(n==0){
  	return 1;
  }
  return n*factorial(n-1);
}

let n = window.prompt("enter number to find factorial")
window.alert(factorial(n))
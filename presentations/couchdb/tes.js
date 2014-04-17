function g(x){
    return function(y){
	return x+y;
    };
}

console.log(g(1)(2));

function receivesAFunction(callbackfunction) {
    callbackfunction()
}


function returnsANamedFunction() {
    return function greeting(){
        console.log("hello")
    }   
}


function returnsAnAnonymousFunction() {
    return function(){
    console.log('hi')
    }
}


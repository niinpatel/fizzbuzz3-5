/**
 * Enter a number between 1 and hundred.
 * Prints the list of numbers till thee
 * @param M
 */
function fizzBuzz(M) {

    for (var i = 1; i <= M; i++){
        if (i%15===0){
            console.log("Nitin Patel")
        }
        else if (i%3===0){
            console.log("Nitin");
        }
        else if(i%5===0){
            console.log("Patel");
        }

        else{
            console.log(i);
        }

    }

}


fizzBuzz(100);
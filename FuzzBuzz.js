/*Feel free review this code */
for (let i=0;i<=100;i++) /*For loop for printing the n numbers. In this case 1 to 100*/
{
    if (i%3==0 && i%5==0){                      /* if statement used inside for loop to check wether a number is divisible by 
                                                   by both 3 and 5 */
        console.log("FuzzBuzz");
    }
    else if (i%3==0){                           /* checks if a number is only divisible by 3 and print "Fuzz"*/
        console.log("Fuzz");
    }
    else if(i%5==0){                             /*checks if a number by only 5 and print "Buzz"*/
        console.log("Buzz");
    }
    else {
        console.log(i)                           /*it prints the usual number if the above cases are not satisfied*/
    }
}

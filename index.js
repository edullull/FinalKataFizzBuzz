
module.exports = {


     divisibleByFive(number){
        return number % 5 === 0;
    },

    divisibleByThree(number){
        return number % 3 === 0;
    },

    secuencie(number){
        while(number < 100){
            number++;
            console.log(Game.ejecucion(3));
        }
    },

    execution(number){
        if(this.divisibleByFive(number) && this.divisibleByThree(number)){
            return 'FIZZBUZZ';
        }else if(this.divisibleByThree(number)){
            return 'FIZZ';
        }else if(this.divisibleByFive(number)){
            return 'BUZZ';
        }else{
            return number;
        }
    }
}


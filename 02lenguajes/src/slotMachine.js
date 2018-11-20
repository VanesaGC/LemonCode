/*
El objevo de este ejercicio es crear una máquina tragaperras ulizando clases dondecada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
tendrá un contador de monedas que automácamente se irá incrementando conformevayamos jugando.Cuando se llame al método play el número de monedas se debe incrementar de formaautomáca y debe generar tres booleanos aleatorios que representarán el estado de las3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y portanto deberá mostrarse por consola el mensaje:"Congratulations!!!. You won <número de monedas> coins!!"y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de lamáquina.En caso contrario deberá mostrar otro mensaje: Good luck next time!!".
*/
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
    }
    SlothMachine.prototype.getBoolean = function () {
        return (Math.round(Math.random()) == 1 ? true : false);
    };
    SlothMachine.prototype.play = function () {
        this.coins++;
        this.val1 = this.getBoolean();
        this.val2 = this.getBoolean();
        this.val3 = this.getBoolean();
        if (this.val1 && this.val2 && this.val3) {
            console.log("Congratulations!!!. You won " + this.coins + " coins!!");
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlothMachine;
}());
console.log();
console.log("*** SlotMachine ***");
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

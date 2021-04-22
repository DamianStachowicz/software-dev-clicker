class App {
    money = 0;
    interval = 1000; // ms
    keysStroked = 0;
    minKeyStrokes = 5;
    baseAmount = 100;
    bugProbability = 0.1;

    constructor() {
        this.loop();
    }

    loop() {
        let self = this;

        window.setInterval(function() {
            Programmer.programmers.forEach(programmer => {
                self.increaseMoney(programmer.speed * self.baseAmount)
            });
        }, this.interval);
    }

    handleKeyStroke() {
        this.keysStroked++;
        if (this.keysStroked >= this.minKeyStrokes) {
            this.keysStroked = 0;
    
            if (Math.random() > this.bugProbability) {
                this.increaseMoney(this.baseAmount);
            } else {
                this.onBug();
            }
        }
    }

    onBug() {
        console.log("BUG!");
    }

    increaseMoney(amount) {
        this.money += amount;
    
        let elem = document.getElementById('money');
        if(elem) {
            elem.innerHTML = this.money;
        }
    }
}

const app = new App();
class Programmer {
    static firstNames = ['Robert', 'John', 'Pajeet', 'Janusz', 'Kumar', 'Ivan', 'Michał'];
    static lastNames = ['Javowsky', 'Snow', 'Andrysiak', 'Anand', 'Nosek', 'Korrapati', 'Mishra'];
    static minSpeed = 1;
    static maxSpeed = 10;
    static programmers = [];
    
    firstName;
    lastName;
    speed;

    constructor(firstName, lastName, speed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.speed = speed;
    };

    static buyProgrammer() {
        this.programmers.push(new Programmer(
            Utils.getRandomArrayElement(this.firstNames),
            Utils.getRandomArrayElement(this.lastNames),
            Utils.getRandomNumber(this.minSpeed, this.maxSpeed)
        ));
    
        this.renderProgrammers();
    }

    static renderProgrammers() {
        let programmersElement = document.getElementById('programmers');
    
        if (!programmersElement) {
            return;
        }
    
        programmersElement.innerHTML = '';
        this.programmers.forEach(function(programmer) {
            const div = document.createElement('div');
            div.innerHTML = programmer.firstName + ' ' + programmer.lastName;
            programmersElement.appendChild(div);
        });
    }
};
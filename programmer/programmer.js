programmers = [];

class Programmer {
    static firstNames = ['Robert', 'John', 'Pajeet', 'Janusz', 'Kumar', 'Ivan', 'Michał'];
    static lastNames = ['Javowsky', 'Snow', 'Andrysiak', 'Anand', 'Nosek', 'Korrapati', 'Mishra'];
    
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    static buyProgrammer() {
        programmers.push(new Programmer(
            Utils.getRandomArrayElement(this.firstNames),
            Utils.getRandomArrayElement(this.lastNames)
        ));
    
        this.renderProgrammers();
    }

    static renderProgrammers() {
        let programmersElement = document.getElementById('programmers');
    
        if (!programmersElement) {
            return;
        }
    
        programmersElement.innerHTML = '';
        programmers.forEach(function(programmer) {
            const div = document.createElement('div');
            div.innerHTML = programmer.firstName + ' ' + programmer.lastName;
            programmersElement.appendChild(div);
        });
    }
};
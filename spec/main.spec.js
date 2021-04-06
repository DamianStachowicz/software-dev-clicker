describe('main', function() {
    it('should exist', function() {
        expect(main).toBeDefined();
    });
});

describe('getMoney', function() {
    it('should exist', function() {
        expect(getMoney).toBeDefined();
    });

    it('should return a number', function() {
        expect(typeof getMoney()).toEqual('number');
    });
});

describe('handleKeyStroke', function() {
    it('should exist', function() {
        expect(handleKeyStroke).toBeDefined();
    });

    it('should increase keysStroked until minKeyStrokes and then reset it to 0', function() {
        keysStroked = 0;
        for(let i = 0; i < minKeyStrokes; i++) {
            expect(keysStroked).toEqual(i);
            handleKeyStroke();
        }
        expect(keysStroked).toEqual(0);
    })

    it('should increase money by baseAmount', function() {
        money = 0;
        spyOn(Math, 'random').and.returnValue(1);

        for(let i = 0; i < minKeyStrokes; i++) {
            handleKeyStroke();
        }

        expect(money).toEqual(baseAmount);
    });

    it('should not increase money and should call onBug', function() {
        money = 0;

        spyOn(Math, 'random').and.returnValue(0.1);
        spyOn(window, 'onBug');

        for(let i = 0; i < minKeyStrokes; i++) {
            handleKeyStroke();
        }

        expect(money).toEqual(0);
        expect(onBug).toHaveBeenCalled();
    });
});

describe('increaseMoney', function() {
    it('should exist', function() {
        expect(increaseMoney).toBeDefined();
    });

    it('should increase money', function() {
        money = 0;
        let moneyElement = document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(moneyElement);

        increaseMoney(10);
        
        expect(money).toEqual(10);
        expect(moneyElement.innerHTML).toEqual('10');
    });
});

describe('getRandomArrayElement', function() {
    it('should exist', function() {
        expect(getRandomArrayElement).toBeDefined();
    });

    it('should return null', function() {
        expect(getRandomArrayElement()).toBeNull();
        expect(getRandomArrayElement(null)).toBeNull();
        expect(getRandomArrayElement(123)).toBeNull();
        expect(getRandomArrayElement('some string')).toBeNull();
        expect(getRandomArrayElement([])).toBeNull();
    });

    it('should return a random element from array', function() {
        const array = ['a', 'b', 'c'];
        spyOn(Math, 'random').and.returnValues(0.67, 0, 0.34);

        expect(getRandomArrayElement(array)).toEqual('c');
        expect(getRandomArrayElement(array)).toEqual('a');
        expect(getRandomArrayElement(array)).toEqual('b');
    });
});

describe('Programmer', function() {
    it('should exist', function() {
        expect(Programmer).toBeDefined();
    });

    describe('constructor', function() {
        it('should exist', function() {
            expect(Programmer.constructor).toBeDefined();
        }); 

        it('should construct a valid Programmer', function() {
            const programmer = new Programmer('Name', 'Surname');

            expect(programmer.name).toEqual('Name');
            expect(programmer.surname).toEqual('Surname');
        });
    });
});

describe('buyProgrammer', function() {
    it('should exist', function() {
        expect(buyProgrammer).toBeDefined();
    });
});

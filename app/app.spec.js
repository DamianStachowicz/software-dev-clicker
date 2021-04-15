describe('app', function() {
    it('should exist', function() {
        expect(app).toBeDefined();
    });
});

// describe('getMoney', function() {
//     it('should exist', function() {
//         expect(getMoney).toBeDefined();
//     });

//     it('should return a number', function() {
//         expect(typeof getMoney()).toEqual('number');
//     });
// });

// describe('handleKeyStroke', function() {
//     it('should exist', function() {
//         expect(handleKeyStroke).toBeDefined();
//     });

//     it('should increase keysStroked until minKeyStrokes and then reset it to 0', function() {
//         keysStroked = 0;
//         for(let i = 0; i < minKeyStrokes; i++) {
//             expect(keysStroked).toEqual(i);
//             handleKeyStroke();
//         }
//         expect(keysStroked).toEqual(0);
//     })

//     it('should increase money by baseAmount', function() {
//         money = 0;
//         spyOn(Math, 'random').and.returnValue(1);

//         for(let i = 0; i < minKeyStrokes; i++) {
//             handleKeyStroke();
//         }

//         expect(money).toEqual(baseAmount);
//     });

//     it('should not increase money and should call onBug', function() {
//         money = 0;

//         spyOn(Math, 'random').and.returnValue(0.1);
//         spyOn(window, 'onBug');

//         for(let i = 0; i < minKeyStrokes; i++) {
//             handleKeyStroke();
//         }

//         expect(money).toEqual(0);
//         expect(onBug).toHaveBeenCalled();
//     });
// });

// describe('increaseMoney', function() {
//     it('should exist', function() {
//         expect(increaseMoney).toBeDefined();
//     });

//     it('should increase money', function() {
//         money = 0;
//         let moneyElement = document.createElement('div');
//         spyOn(document, 'getElementById').and.returnValue(moneyElement);

//         increaseMoney(10);
        
//         expect(money).toEqual(10);
//         expect(moneyElement.innerHTML).toEqual('10');
//     });
// });

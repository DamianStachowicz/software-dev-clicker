describe('App', function() {
    it('should exist', function() {
        expect(App).toBeDefined();
    });

    describe('handleKeyStroke', function() {
        it('should exist', function() {
            const app = new App();
            expect(app.handleKeyStroke).toBeDefined();
        });
    
        it('should increase keysStroked until minKeyStrokes and then reset it to 0', function() {
            const app = new App();

            for(let i = 0; i < app.minKeyStrokes; i++) {
                expect(app.keysStroked).toEqual(i);
                app.handleKeyStroke();
            }
            expect(app.keysStroked).toEqual(0);
        })
    
        it('should increase money by baseAmount', function() {
            const app = new App();

            spyOn(Math, 'random').and.returnValue(1);
    
            for(let i = 0; i < app.minKeyStrokes; i++) {
                app.handleKeyStroke();
            }
    
            expect(app.money).toEqual(app.baseAmount);
        });
    
        it('should not increase money and should call onBug', function() {   
            const app = new App();

            spyOn(Math, 'random').and.returnValue(0.1);
            spyOn(app, 'onBug');
    
            for(let i = 0; i < app.minKeyStrokes; i++) {
                app.handleKeyStroke();
            }
    
            expect(app.money).toEqual(0);
            expect(app.onBug).toHaveBeenCalled();
        });
    });

    describe('increaseMoney', function() {
        it('should exist', function() {
            const app = new App();
            expect(app.increaseMoney).toBeDefined();
        });
    
        it('should increase money', function() {
            const app = new App();
            let moneyElement = document.createElement('div');
            spyOn(document, 'getElementById').and.returnValue(moneyElement);
    
            app.increaseMoney(10);
            
            expect(app.money).toEqual(10);
            expect(moneyElement.innerHTML).toEqual('10');
        });
    });

    describe('loop', function() {
        let app;
        let moneyElement

        beforeEach(function () {
            app = new App();
            Programmer.programmers = [];

            jasmine.clock().install();

            moneyElement = document.createElement('div');
            moneyElement.innerHTML = '0';
            spyOn(document, 'getElementById').and.callFake(function(id) {
                return id === 'money' ? moneyElement : null;
            });
        });

        afterEach(function() {
            jasmine.clock().uninstall();
        });

        it('should exist', function() {
            expect(app.loop).toBeDefined();
        });

        it('should not increase money when there are no programmers', function() {
            app.loop();
            jasmine.clock().tick(app.interval);

            expect(app.money).toEqual(0);
            expect(moneyElement.innerHTML).toContain('0');
        });

        it('should increase money by base amount times each programmer\'s speed', function() {
            Programmer.buyProgrammer();
            Programmer.buyProgrammer();
            Programmer.buyProgrammer();

            app.loop();
            jasmine.clock().tick(app.interval);

            let money = app.baseAmount * (
                Programmer.programmers[0].speed +
                Programmer.programmers[1].speed +
                Programmer.programmers[2].speed
            );

            expect(app.money).toEqual(money);
            expect(moneyElement.innerHTML).toContain(`${money}`);
        });
    });
});

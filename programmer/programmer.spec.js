describe('Programmer', function() {
    it('should exist', function() {
        expect(Programmer).toBeDefined();
    });

    describe('constructor', function() {
        it('should exist', function() {
            expect(Programmer.constructor).toBeDefined();
        }); 

        it('should construct a valid Programmer', function() {
            const programmer = new Programmer('Name', 'Surname', 2);

            expect(programmer.firstName).toEqual('Name');
            expect(programmer.lastName).toEqual('Surname');
            expect(programmer.speed).toEqual(2);
        });
    });

    
    describe('buyProgrammer', function() {
        it('should exist', function() {
            expect(Programmer.buyProgrammer).toBeDefined();
        });

        it('should only add one programmer at a time', function() {
            Programmer.programmers = [];
            
            for(let i = 1; i < 6; i++) {
                Programmer.buyProgrammer();
                expect(Programmer.programmers.length).toEqual(i);
            }
        });
        
        it('should add Robert Javowsky', function() {
            Programmer.programmers = [];
            spyOn(Math, 'random').and.returnValues(0, 0, 0.3, 0.4);
            
            Programmer.buyProgrammer();
            expect(Programmer.programmers[0].firstName).toEqual('Robert');
            expect(Programmer.programmers[0].lastName).toEqual('Javowsky');
            expect(Programmer.programmers[0].speed).toBeGreaterThanOrEqual(Programmer.minSpeed);
            expect(Programmer.programmers[0].speed).toBeLessThanOrEqual(Programmer.maxSpeed);
        });

        it('should render programmers', function() {
            spyOn(Programmer, 'renderProgrammers');
            Programmer.buyProgrammer();
            expect(Programmer.renderProgrammers).toHaveBeenCalled();
        });
    });

    describe('renderProgrammers', function() {
        it('should exist', function() {
            expect(Programmer.renderProgrammers).toBeDefined();
        });
    
        it('should add divs with programmer info to programmers element', function() {
            let programmersElement = document.createElement('div');
    
            spyOn(document, 'getElementById').and.callFake(function(id) {
                return id === 'programmers' ? programmersElement : null;
            });
    
            Programmer.programmers = [new Programmer('Robert', 'Javowsky')];
            Programmer.renderProgrammers();
    
            expect(programmersElement.innerHTML).toContain('Robert');
            expect(programmersElement.innerHTML).toContain('Javowsky');
        });
    });
});
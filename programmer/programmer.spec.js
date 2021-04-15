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

            expect(programmer.firstName).toEqual('Name');
            expect(programmer.lastName).toEqual('Surname');
        });
    });

    
    describe('buyProgrammer', function() {
        it('should exist', function() {
            expect(Programmer.buyProgrammer).toBeDefined();
        });

        it('should only add one programmer at a time', function() {
            programmers = [];
            
            for(let i = 1; i < 6; i++) {
                Programmer.buyProgrammer();
                expect(programmers.length).toEqual(i);
            }
        });
        
        it('should add Robert Javowsky', function() {
            programmers = [];
            spyOn(Math, 'random').and.returnValues(0, 0);
            
            Programmer.buyProgrammer();
            expect(programmers[0].firstName).toEqual('Robert');
            expect(programmers[0].lastName).toEqual('Javowsky');
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
    
            programmers = [new Programmer('Robert', 'Javowsky')];
            Programmer.renderProgrammers();
    
            expect(programmersElement.innerHTML).toContain('Robert');
            expect(programmersElement.innerHTML).toContain('Javowsky');
        });
    });
});
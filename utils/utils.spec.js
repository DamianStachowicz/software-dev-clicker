describe('Utils', function() {
    describe('getRandomArrayElement', function() {
        it('should exist', function() {
            expect(Utils.getRandomArrayElement).toBeDefined();
        });

        it('should return null', function() {
            expect(Utils.getRandomArrayElement()).toBeNull();
            expect(Utils.getRandomArrayElement(null)).toBeNull();
            expect(Utils.getRandomArrayElement(123)).toBeNull();
            expect(Utils.getRandomArrayElement('some string')).toBeNull();
            expect(Utils.getRandomArrayElement([])).toBeNull();
        });

        it('should return a random element from array', function() {
            const array = ['a', 'b', 'c'];
            spyOn(Math, 'random').and.returnValues(0.67, 0, 0.34);

            expect(Utils.getRandomArrayElement(array)).toEqual('c');
            expect(Utils.getRandomArrayElement(array)).toEqual('a');
            expect(Utils.getRandomArrayElement(array)).toEqual('b');
        });
    });
});
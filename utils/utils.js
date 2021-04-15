class Utils {
    static getRandomArrayElement(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return null;
        }

        return array[Math.floor(Math.random() * array.length)];  
    }
}
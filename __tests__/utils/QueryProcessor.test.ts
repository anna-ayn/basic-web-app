import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "YOUR USB ID IS 19-10096."
        ));
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("annayi");
    });

    test("should return the largest number", () => {
        const query = "Which of the following numbers is the largest: 4, 7, 55, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("55");
    });

    test("should return the sum of numbers", () => {
        const query = "What is 5 plus 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("8");
    });

    test("should return the product of numbers", () => {
        const query = "What is 4 multiplied by 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("12");
    });

    test("should return the product of numbers", () => {
        const query = "What is 4 multiplied by -3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-12");
    });

    test("should return the product of numbers", () => {
        const query = "What is -4 multiplied by 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-12");
    });

    test("should return the difference of numbers", () => {
        const query = "What is 10 minus 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("6");
    });

    test("should return numbers that are both square and cube", () => {
        const query = "Which of the following numbers is both a square and a cube: 1, 8, 27, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1, 64");
    });

    test("should return numbers that are both square and cube", () => {
        const query = "Which of the following numbers is both a square and a cube: 1, 8, 27, 65?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1");
    });

    test("should return prime numbers", () => {
        const query = "Which of the following numbers are primes: 2, 3, 4, 5, 6, 7, 8, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2, 3, 5, 7");
    });

    test("should return prime numbers", () => {
        const query = "Which of the following numbers are primes: 10, 50, 35, 10, 12, 13, 15?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("13");
    });
});

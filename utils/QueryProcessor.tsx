export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "YOUR USB ID IS 19-10096." );
  }

  if (query.toLowerCase().includes("what is your name")) {
    // agrega tu nombre aquí
    return ( "annayi" );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/-?\d+/g)?.map(Number);
    if (numbers) {
      return numbers.reduce((a, b) => a + b).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/-?\d+/g)?.map(Number);
    if (numbers) {
      return numbers.reduce((a, b) => a * b).toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/-?\d+/g)?.map(Number);
    if (numbers) {
      return numbers.reduce((a, b) => a - b).toString();
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      const isSquareAndCube = (num: number) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const results = numbers.filter(isSquareAndCube);
      if (results.length > 0) {
        return results.join(", ");
      }
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(isPrime);
      return primes.join(", ");
    }
  }
  


  return "";
}

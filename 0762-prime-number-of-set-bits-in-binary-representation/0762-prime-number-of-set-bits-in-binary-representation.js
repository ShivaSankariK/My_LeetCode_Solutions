/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function countPrimeSetBits(left, right) {
    // Precomputed set of primes up to 19, sufficient for typical constraints (up to 10^6)
    // The maximum possible bit count is around 20 (for numbers up to 10^6).
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    let ans = 0;

    for (let i = left; i <= right; i++) {
        // Count set bits using the built-in method or a custom function.
        // The built-in method is the most straightforward in modern JS environments.
        const bitCount = i.toString(2).split('1').length - 1; 
        
        // Alternatively, you can use bit manipulation:
        // const bitCount = countBitsEfficient(i);

        if (primes.has(bitCount)) {
            ans++;
        }
    }

    return ans;
}

// Efficient bit counting function (optional, for older environments or performance)
function countBitsEfficient(n) {
    let count = 0;
    while (n !== 0) {
        n &= (n - 1); // Brian Kernighan's algorithm to clear the rightmost set bit
        count++;
    }
    return count;
}

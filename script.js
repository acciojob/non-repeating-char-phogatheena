function firstNonRepeatedChar(s) {
    const charCount = {};
    
    for (const char of s) {
        if (char in charCount) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

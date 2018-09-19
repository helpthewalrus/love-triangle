/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  n = 0
  for (i = 1; i < preferences.length + 1; i++) {
    // checking that first number is not equal to its index and less than length of array
    if (preferences[i-1] !== i && preferences[i-1] <= preferences.length) {
      // checking that second number with index = first number is not equal to its index and less than length of array
      if (preferences[preferences[i - 1] - 1] !== i && preferences[preferences[i - 1] - 1] <=  preferences.length) {
        // checking that third number with index = second number is equal to index of the first number 
        if (preferences[preferences[preferences[i - 1] - 1] - 1] === i) {
          n ++;
        }
      }
    }
  }
  return n/3;
};


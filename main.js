console.log("STEP 1...");
// Step 1
var favoriteMovies = ["Interstellar", "Inception", "The Dark Knight", "Shawshank Redemption", "The Matrix"];
console.log(favoriteMovies[1]);
console.log("STEP 2...");
// Step 2
var movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Shawshank Redemption";
movies[4] = "The Matrix";
console.log(movies[0]);
console.log("STEP 3...");
// Step 3
movies.splice(2, 0, "Avatar");
console.log(movies.length);
console.log("STEP 4...");
// Step 4
var movies = ["Interstellar", "Inception", "The Dark Knight", "Shawshank Redemption", "The Matrix"];
delete movies[0];
console.log(movies);
console.log("STEP 5...");
// Step 5
var movies = ["Interstellar", "Inception", "The Dark Knight", "Shawshank Redemption", "The Matrix", "Avatar", "Gladiator"];
for (var index in movies) {
    console.log(movies[index]);
}
console.log("STEP 6...");
// Step 6
for (var movie of movies) {
    console.log(movie);
}
console.log("STEP 7...");
// Step 7
for (var movie of movies.sort()) {
    console.log(movie);
}
console.log("STEP 8...");
// Step 8
var leastFavMovies = ["Texas Chainsaw", "The Hulk", "Merry Chirstmas"]
console.log("");
console.log("Movies I like:");
console.log("");
for (var movie of movies) {
    console.log(movie);
}
console.log("");
console.log("Movies I regret watching:");
console.log("");
for (var movie of leastFavMovies) {
    console.log(movie);
}
console.log("");

console.log("STEP 9...");
// Step 9
var allMovies = movies.concat(leastFavMovies);
console.log(allMovies.reverse());

console.log("STEP 10...");
// Step 10
console.log(allMovies.pop());

console.log("STEP 11...");
// Step 11
console.log(allMovies.shift(0));

console.log("STEP 12...");
// Step 12
var indicesToReplace = [];
for (var i = 0; i < allMovies.length; i++) {
    if (leastFavMovies.includes(allMovies[i])) {
        indicesToReplace.push(i);
    }
}
var replacements = ["The Godfather", "Pulp Fiction"];
var rindex = 0;
indicesToReplace.forEach(function(index) {
    allMovies[index] = replacements[rindex];
    rindex+=1;
});
console.log(allMovies);

console.log("STEP 13...");
// Step 13
var rankedMovies = [["Interstellar", 1], ["Inception", 2], ["The Dark Knight", 3], ["Shawshank Redemption", 4], ["The Matrix", 5]];
var movieNames = rankedMovies.filter(function(item) {
    return typeof item[0] === 'string';}).map(function(item) {
        return item[0];
    });
console.log(movieNames);

console.log("STEP 14...");
// Step 14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(employeeList) {
    console.log("");
    console.log("Employees:");
    console.log("");
    for (var employee of employeeList) {
        console.log(employee);
    }
};
showEmployee(employees);

console.log("STEP 15...");
// Step 15
function filterValues(array) {
    return array.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

console.log("STEP 16...");
// Step 16
function getRandomItem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));

console.log("STEP 17...");
// Step 17
function getLargestNumber(array) {
    var largestNum=0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] > largestNum) {
            largestNum = array[i];
        }
    };
    return largestNum;
}
console.log(getLargestNumber(numbers));
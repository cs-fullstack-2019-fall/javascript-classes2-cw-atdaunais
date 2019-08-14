//Problem 1
class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    changeName(newName){
        this.movieName = newName;
    }
    changeRating(newRating){
        this.rating = newRating;
    }
    changeYear(newYear){
        this.yearReleased = newYear;
    }
}
let movie1 = new Movie("August Rush", "PG", "2007");
let movie2 = new Movie("Moonlight", "PG13", "2016");

console.log(movie1);
console.log(movie2);
movie1.changeName("My Neighbor Totoro"); //just wanted to check to make sure my method works.
movie1.changeRating("G");
movie1.changeYear("1993");
console.log(movie1);

//Problem 2
class Product{
    constructor(price, quantity, name){
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }
    printProduct(){
        console.log(this.name + ", price " + this.price + ", amount ", this.quantity);
    }
}
let fruit1 = new Product("$5.50", 4, "Apples");
fruit1.printProduct();
// -------------------- chap #01 Alert---------------------------------

//---- Q1---

// alert("welcome to vanilla javascript")

//--- Q2---

// alert ("Error! please enter a valid password")

//--- Q3---

// alert ("Welcomer to JS Land...\n Happy Coding!")

//--- Q4---

// alert("Welcomer to JS Land...")

// alert("Happy Coding!")

// ---Q5---

// alert("Hello... I can run JS through my web browser's console")

// console.log("Hello... I can run JS through my web browser's console")

// ---Q6---

// alert("this is Html & CSS Coding")

// ---Q7---

// Done

// ------------------------chap no=2 "Variables for String"------------------------

// ---Q1---

// var firstName ="abc";

// var lastName ="xyz";

// var username ="abc" + "xyz";

// console.log(username)

// ---Q2---

// var firstName ="abc";

// var lastName ="xyz";

//  var myName ="abc" + " " +"xyz";

//  console.log(myName)

// ---Q3---

// var message ="Hello World";

// alert("Hello world")

// ---Q4---

// var firstName= ("John");

// var lastName =("Doe");

// var fullName = (firstName + " " + lastName);
// alert(fullName)

// var age = ("15 years old");
// alert(age)

// var message = ("Certified Mobile Application Development");
// alert(message)

// ---Q5---

// var message =("PIZZA\nPIZZ\nPIZ\nPI\nP");
// alert(message)

// Q6

// var email=("My email address is example@example.com");

// alert(email)

// Q7

// var book=("A Smarter Way To Learn Javascript");

// var res= ("I am trying to learn from the BOOK" +" "+ book);

// alert(res)

// Q8

// document.write("Yah! Ican write HTML content through Javascript");

// Q9

// var message = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//  alert(message)

// chap no 3 (VARIABLES FOR NUMBERS)

// Q1

// var age =("I am 15 years old");

// alert(age)

// Q2

// var message =("You have visited this site 14 times");

// alert(message)

// Q3

// var birthYear = 1990;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear);


// Q4

// document.write("John Doe ordered 5 T-shirt(s) on XYZ Clothing store");

// chap no=4 (VARIABLE NAMES: LEGAL & ILLEGAL)

// Q1

// var firstName=("Abc"), lastName=("Xyz"), fatherName=("Zee");

// console.log(firstName, lastName, fatherName)

// Q2

// LEGAL VARIABLES NAMES:

// 1.firstName (Camel case)
// 2.first_name (you can use underscore)
// 3.$price (dollar)
// 4.firstname (small letters)
// 5.firstName123 (you can add Number after letters)

// Q3

// ILLEGAL VARIABLES NAMES

// 1. 123abc (cannot start with digits)
// 2. first-Name (hyphens is not allowed) 
// 3. @firstName (special characters are not allowed)
// 4. user Name (space not allowed)
// 5. var (You cannot use JavaScript keywords (parts of the language, itself) for variable names)

// Q4

// document.write("<h1>"+"Rules for naming JS variables" + "</h1>");

// document.write("Variable names can contain only letters, numbers, dollar signs, and underscores.For example $my_1stVariable");

// document.write( "<br>" + "Variables must begin with a letters, dollar($),or underscore( _ ). For example $name, _name or name ");

// document.write("<br>"+" Variable names are case sensitive");

// document.write("<br>"+"Variable names should not be JS keywords");

// chap no=5 (Variable names should not be JS)

// Q1

// var num1= 3;

// var num2= 5;

// var sum= num1 + num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Q2

// Subraction

// var num1= 3;

//  var num2= 5;

//  var num= num1 - num2;

//  document.write("Subraction of " + num1 + " and " + num2 + " is " + num);

// Multiplication

// var num1= 3;

//  var num2= 5;

//  var num= num1 * num2;

//  document.write("Multiplication of " + num1 + " and " + num2 + " is " + num);

// Division

// var num1= 3;

//  var num2= 5;

//  var num= num1  num2;

//  document.write("Division of " + num1 + " and " + num2 + " is " + num);

// Modulus

// var num1= 3;

//  var num2= 5;

//  var num= num1 % num2;

//  document.write("Modulus of " + num1 + " and " + num2 + " is " + num);

// Q3 

// a // b // c  // d  // e  // f // e // f // g // h // i // j // k // l
//  var num1;

// document.write("Value after variable declaration is " +  num1 + "<br>");

// num1= 5;

// document.write("Initial Value: " + num1 + "<br>");

// var num1 = ++num1;

// document.write("Value after increment is: "+ num1 + "<br>");

// num1 += 7;

// document.write("Value after addition is: " + num1 + "<br>");

// var num1 = --num1;

// document.write("Value after decrement is: "+ num1 + "<br>");

// var num1 = num1 % 3;

// document.write("The reminder is: "+ num1 + "<br>");

// Q4

// var num1 = 600;

// var num2 = 5;

// document.write("Total cost to buy "+ num1 + " tickets to a movie is " + num1 * num2 +"PKR");

// Q5

// var num = 4;

// document.write("<h3>"+"Table of " + num  +"</h3>");

//  document.write(num + " x 1 = " + num + "<br>");

//  document.write(num + " x 2 = " + num *2 + "<br>");

//  document.write(num + " x 3 = " + num *3 + "<br>");

//  document.write(num + " x 4 = " + num *4 + "<br>");

//  document.write(num + " x 5 = " + num *5 + "<br>");

//  document.write(num + " x 6 = " + num *6 + "<br>");

//  document.write(num + " x 7 = " + num *7 + "<br>");

//  document.write(num + " x 8 = " + num *8 + "<br>");

//  document.write(num + " x 9 = " + num *9 + "<br>");

//  document.write(num + " x 10 = " + num *10 + "<br>");

// Q6

// var celsius = 25;

// var  fahrenheit = (celsius * 9/5) +32;

// document.write(celsius + "\u00B0C is "+  fahrenheit + "\u00B0F" + "<br>" );
   
// var fahrenheit = 70;

// var celsius = (fahrenheit -32) *5/9;

// document.write(fahrenheit + "\u00B0F is "+  celsius + "\u00B0C" );

// Q7

// var $item1 = 650;

// var $item2 = 100;

// var item1 = 3;

// var item2 = 7;

// var charges = 100;

// var total1 = $item1 * item1;

// var total2 = $item2 * item2;

// var totalItem = total1 + total2;

// var totalCost = totalItem + charges;

// document.write("<h1>" + "Shopping Cart" + "</h1>");

// document.write("Price of Item 1 is " + $item1 + "<br>") ;

// document.write("Quantity of item 1 is " + item1 + "<br>");

// document.write("Price of Item 2 is" + $item2 + "<br>");

// document.write("Quantity of item 2 is " + item2 + "<br>");

// document.write("Shipping Charges is " + charges + "<br>" + "<br>" );

// document.write("Total cost of your order is " + totalCost);

// Q8

 //var totalMarks = 980;

 //var marks = 804;

// document.write("<h1>" + "Marks Sheet" + "</h1>");

// document.write("Total marks: " + totalMarks + "<br>");

// document.write("Marks Obtained: " + marks + "<br>");

 //document.write("Percentage: " + marks/totalMarks * 100 + "&#37;");

// Q9

// var usDollars = 10;

// var riyal = 25;

// var usdtoPkr = 104.80;

// var riyaltoPkr = 28;

// var totalPkr = (usDollars * usdtoPkr) + (riyal * riyaltoPkr);

// document.write("<h1>" + "Currency in PKR" + "</h1>");

// document.write("Total Currency in PKR: " + totalPkr);

// Q10

// var num = 5;

// var result = ((num + 5) * 10) / 2;

// console.log(result)

// Q11

// var currentYear = 2016;

// var birthYear = 1992;

// document.write("<h1>" + "Age Calculator" + "</h1>");

// document.write("Current Year: " + currentYear + "<br>");

// document.write("Birth Year: " + birthYear + "<br>");

// document.write("Your Age: " + (currentYear - birthYear) + "<br>");

// document.write("“They are either " + (currentYear - birthYear) + " or "  + ((currentYear - birthYear) + 1) + " years old”");

// Q12

// var radius = 20;

// var circumference = 2 * 3.142 * radius;

// var area = 3.142 * radius * radius;

// document.write("Radius of a Circle " + radius + "<br>");

// document.write("The circumference is: " + circumference + "<br>");

// document.write("The area is: " + area + "<br>");

// Q13

// var favouriteSnake = "chocolate chip"

// var currentAge = 15;

// var maxAge = 65;

// var snakeperDay = 3;

// document.write("<h1>"+ "The Lifetime Supply Calculator" + "</h1>");

// document.write("Favourite Snake: " + favouriteSnake + "</br>");

// document.write("Current Age: " + currentAge + "</br>");

// document.write("Estimated Maximum Age: " + maxAge + "</br>");

// document.write("Amount of snake per day: " + snakeperDay + "</br>");

// var remainingYear = maxAge - currentAge;

// var totaleatSnake = remainingYear * snakeperDay;

// document.write("You will need " + totaleatSnake +" " + favouriteSnake + " to last you until the ripe old age of " + maxAge)


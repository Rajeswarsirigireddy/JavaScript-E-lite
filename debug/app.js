
//1. Log method

        var testVariable = 404;
        console.log("This is triggered by console.log")
        console.log("checking the variable value",testVariable)
//2. Info method

        console.info("Testing the log info method")

//3. Debug method
        var userId = "UserOne";
        var userId2 = "UserTwo";
        var userId3 = "UserThree";

        console.log("Console log"+ " " +  userId)

        console.info("Console info" + " " +  userId2);

        console.debug("Console debug" + " " +  userId3);

//4. Warn method

        var testVariable = 404;
        var testObj = { firstname : "Ravidu", lastname : "Perera" };

        console.warn("This is a Warning message")

        // passing a variable
        console.warn(testVariable)
        
        // pass an object as a warning
        console.warn(testObj)

//5. Assert method
        let x = 1;
        let y = 2;
        console.assert(x + y == 4, "Expression is false")
        console.assert(x + y == 3, "Expression is True")
        console.assert(document.getElementById("Test"), "No element found with ID 'Test'");

//6. Count method
        for (i = 1; i <= 5; i++){
        console.count()
        }

//7. Trace method

    function TraceMethod(){
    function TestMethod(){
        console.trace('Trace call');
    }
    TestMethod();
    }
    TraceMethod();


//8. Time, TimeLog, and TimeEnd methods

        console.time("MyTimer")
        for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
        }
        console.timeEnd("MyTimer")

        //MyTimer: 0.408935546875 ms

//9. Group, GroupEnd, and GroupCollapsed methods

        console.log("This is the first level");

        console.group("First group");
        console.log("In the first group");

        console.group("Second group");
        console.log("In the second group under first group");
        console.warn("Still in the second group");

        console.groupEnd();

        console.log("Back to the first group");
        console.groupEnd();

//10. Table method

//As an object
//If you pass an object, the index column represents the keys, and the value column represents the values that are related to the given key.

        var user = {
        name:"Ravidu",
        age:25,
        job:"writer",
        }

        console.table(user);

//Array
//The index column will have the indexes of the array starting from zero. Check this example and its output below.

        var cities =["Washington","Delhi","London","Stockholm"];
        console.table(cities);

//Arrays of arrays
//In this case, column names will be increased as the index increases.

        var Destinations =[["USA", "Washington"],["India","Delhi"],["UK","London"],["Sweden","Stockholm"]];
        console.table(Destinations);

//Arrays of objects
//Here, values and properties are separated into columns.

        var users = [
        {
            name: "Sam",
            age: 30
        },
        {
            name: "John",
            age: 45
        },
        {
            name: "Peter",
            age: 20
        }
        ];
        console.table(users);

//Nested objects
//Suppose your values are nested objects. The console.table() method labels the output index appropriately.

        var roles = {
        writer: {
        firstname: "Ravindu",
        lastname: "Shehan", 
        email: "ravindu@gmail.com"
        }, 
        reviewer: {
        firstname: "Ravindu",
        lastname: "Shehan", 
        email: "ravindu@gmail.com"
        }
        }

        console.table (roles);


//11. Clear method
//The clear() method helps you clean your browser console after all the debugging processes. You can use the console.clear() method before your debugging and at the end of it. It will ensure that no other printed messages are displayed in the console.

        console.count(label)



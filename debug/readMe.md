🌙 JavaScript console methods allow developers to access the debugging console in web browsers. Developers can improve the application debugging process by using methods to print various messages on the browser console.

⭐ 11 Console Methods in JavaScript for Effective Debugging 👍


1. Log method
The console.log() method is the most used JavaScript console method. It helps us to print strings, numbers, JavaScript objects, or variables in the console. In addition, it logs messages to a debugging terminal instead of presenting them in the browser console.
 
        var testVariable = 404;
        console.log("This is triggered by console.log")
        console.log("checking the variable value",testVariable)
2. Info method
console.info() is a method similar to console.log(), but I recommend you to use console.info() to print any information required for debugging purposes instead of printing the values.

console.info("Testing the log info method")

3. Debug method
In JavaScript, the console.log(), console.debug(), and console.info() methods are identical. The only difference is the way the output is visible in the browser console. The browser will define color codes to console method output messages. By default, output from the console.debug() method will not be visible in Chrome developer tools. You have to enable the console filter option for all levels to see the output from the debug method.

        var userId = "UserOne";
        var userId2 = "UserTwo";
        var userId3 = "UserThree";

        console.log("Console log"+ " " +  userId)

        console.info("Console info" + " " +  userId2);

        console.debug("Console debug" + " " +  userId3);

4. Warn method
The console.warn() method helps us to display a warning message in the console. We need to pass a message as a parameter. This message can be an object, array, or any variable

        var testVariable = 404;
        var testObj = { firstname : "Ravidu", lastname : "Perera" };

        console.warn("This is a Warning message")

        # passing a variable
        console.warn(testVariable)
        
        # pass an object as a warning
        console.warn(testObj)

5. Assert method
The console.assert() method is different from the previously discussed methods. It will only print the message in the console if the expression is evaluated as false. Therefore, you need to pass a Boolean expression as a method parameter.

        let x = 1;
        let y = 2;
        console.assert(x + y == 4, "Expression is false")
        console.assert(x + y == 3, "Expression is True")
        console.assert(document.getElementById("Test"), "No element found with ID 'Test'");

6. Count method
We can use the console.count() method as a log counter. It logs the number of times the console.count() method has been called in the script. For example, if you use it inside a loop, you can find the number of times that loop is executed.

        for (i = 1; i <= 5; i++){
        console.count()
        }

7. Trace method
The trace method behaves exactly the same way as the console.log() method. The difference is that the console.trace() method will provide the stack trace. Basically, it will show the call path taken to reach the point where you put the console.trace() method

    Function TraceMethod(){
    function TestMethod(){
        console.trace(“Trace call”);
    }
    TestMethod();
    }
    TraceMethod();


8. Time, TimeLog, and TimeEnd methods
You can use the console.time() method to measure the execution time of the functions. It helps you improve application performance by identifying low-performing functions. For example, if you need to measure the performance of a for loop, you can use the console.time() method as shown below.

        console.time("MyTimer")
        for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
        }
        console.timeEnd("MyTimer")

        # MyTimer: 0.408935546875 ms

9. Group, GroupEnd, and GroupCollapsed methods
You can generate a group of messages in the console using these methods. The group method also accepts a label as a parameter (optional), and you need to place it right before a console message to start the grouping.

        console.log("This is the first level");

        console.group("First group");
        console.log("In the first group");

        console.group("Second group");
        console.log("In the second group under first group");
        console.warn("Still in the second group");

        console.groupEnd();

        console.log("Back to the first group");
        console.groupEnd();

10. Table method
When you have a complex set of objects, you will either use the console.log() method or scroll through the list of objects to inspect the issue. However, you can use the console.table() method to improve the debugging process in such situations. You can use it to report tabular versions of arrays and objects to the console. The tabular data format works beautifully, allowing you to understand your data better and debug your code quickly. You may also sort columns very fast. This method uses any object type, arrays, arrays of arrays, arrays of objects, and nested objects as a parameter.

As an object
If you pass an object, the index column represents the keys, and the value column represents the values that are related to the given key.

        var user = {
        name:"Ravidu",
        age:25,
        job:"writer",
        }

        console.table(user);

Array
The index column will have the indexes of the array starting from zero. Check this example and its output below.

        var cities =["Washington","Delhi","London","Stockholm"];
        console.table(cities);

Arrays of arrays
In this case, column names will be increased as the index increases.

        var Destinations =[["USA", "Washington"],["India","Delhi"],["UK","London"],["Sweden","Stockholm"]];
        console.table(Destinations);

Arrays of objects
Here, values and properties are separated into columns.

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

Nested objects
Suppose your values are nested objects. The console.table() method labels the output index appropriately.

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

11. Clear method
The clear() method helps you clean your browser console after all the debugging processes. You can use the console.clear() method before your debugging and at the end of it. It will ensure that no other printed messages are displayed in the console.

        console.count(label)
    
Powered By ❤️ JSPro Team
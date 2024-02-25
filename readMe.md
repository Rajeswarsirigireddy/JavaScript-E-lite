<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Js Snippets on console</title>
</head>
<body>
    <p>JavaScript console methods allow developers to access the debugging console in web browsers. Developers can improve the application debugging process by using methods to print various messages on the browser console.</p>
    <p>11 Console Methods in JavaScript for Effective Debugging</p>
    <ol>
    <li>
    <p>Log method The console.log() method is the most used JavaScript console method. It helps us to print strings, numbers, JavaScript objects, or variables in the console. In addition, it logs messages to a debugging terminal instead of presenting them in the browser console.</p>
    <pre><code> var testVariable = 404;console.log(&quot;This is triggered by console.log&quot;)
     console.log(&quot;checking the variable value&quot;,testVariable)
    </code></pre>
    </li>
    <li>
    Info method console.info() is a method similar to console.log(), but I recommend you to use console.info() to print any information required for debugging purposes instead of printing the values.</p>
    </li>
    </ol>
    <pre><code> 
        console.info(&quot;Testing the log info method&quot;)
    </code></pre>
<ol start="3">
    <li>
    <p>Debug method In JavaScript, the console.log(), console.debug(), and console.info() methods are identical. The only difference is the way the output is visible in the browser console. The browser will define color codes to console method output messages. By default, output from the console.debug() method will not be visible in Chrome developer tools. You have to enable the console filter option for all levels to see the output from the debug method.</p>
    <pre><code> var userId = &quot;UserOne&quot;;
     var userId2 = &quot;UserTwo&quot;;
     var userId3 = &quot;UserThree&quot;;
    
     console.log(&quot;Console log&quot;+ &quot; &quot; +  userId)
    
     console.info(&quot;Console info&quot; + &quot; &quot; +  userId2);
    
     console.debug(&quot;Console debug&quot; + &quot; &quot; +  userId3);
    </code></pre>
    </li>
    <li>
    <p>Warn method The console.warn() method helps us to display a warning message in the console. We need to pass a message as a parameter. This message can be an object, array, or any variable</p>
    <pre><code> var testVariable = 404;
     var testObj = { firstname : &quot;Ravidu&quot;, lastname : &quot;Perera&quot; };
    
     console.warn(&quot;This is a Warning message&quot;)
    
     # passing a variable
     console.warn(testVariable)
    
     # pass an object as a warning
     console.warn(testObj)
    </code></pre>
    </li>
    <li>
    <p>Assert method The console.assert() method is different from the previously discussed methods. It will only print the message in the console if the expression is evaluated as false. Therefore, you need to pass a Boolean expression as a method parameter.</p>
    <pre><code> let x = 1;
     let y = 2;
     console.assert(x + y == 4, &quot;Expression is false&quot;)
     console.assert(x + y == 3, &quot;Expression is True&quot;)
     console.assert(document.getElementById(&quot;Test&quot;), &quot;No element found with ID 'Test'&quot;);
    </code></pre>
    </li>
    <li>
    <p>Count method We can use the console.count() method as a log counter. It logs the number of times the console.count() method has been called in the script. For example, if you use it inside a loop, you can find the number of times that loop is executed.</p>
    <pre><code> for (i = 1; i &lt;= 5; i++){
     console.count()
     }
    </code></pre>
    </li>
    <li>
    <p>Trace method The trace method behaves exactly the same way as the console.log() method. The difference is that the console.trace() method will provide the stack trace. Basically, it will show the call path taken to reach the point where you put the console.trace() method</p>
    <p>Function TraceMethod(){ function TestMethod(){ console.trace(“Trace call”); } TestMethod(); } TraceMethod();</p>
    </li>
    <li>
    <p>Time, TimeLog, and TimeEnd methods You can use the console.time() method to measure the execution time of the functions. It helps you improve application performance by identifying low-performing functions. For example, if you need to measure the performance of a for loop, you can use the console.time() method as shown below.</p>
    <pre><code> console.time(&quot;MyTimer&quot;)
     for (var i = 0; i &lt; addToCartButtons.length; i++) {
     var button = addToCartButtons[i];
     button.addEventListener('click', addToCartClicked)
     }
     console.timeEnd(&quot;MyTimer&quot;)
    
     # MyTimer: 0.408935546875 ms
    </code></pre>
    </li>
    <li>
    <p>Group, GroupEnd, and GroupCollapsed methods You can generate a group of messages in the console using these methods. The group method also accepts a label as a parameter (optional), and you need to place it right before a console message to start the grouping.</p>
    <pre><code> console.log(&quot;This is the first level&quot;);
    
     console.group(&quot;First group&quot;);
     console.log(&quot;In the first group&quot;);
    
     console.group(&quot;Second group&quot;);
     console.log(&quot;In the second group under first group&quot;);
     console.warn(&quot;Still in the second group&quot;);
    
     console.groupEnd();
    
     console.log(&quot;Back to the first group&quot;);
     console.groupEnd();
    </code></pre>
    </li>
    <li>
    <p>Table method When you have a complex set of objects, you will either use the console.log() method or scroll through the list of objects to inspect the issue. However, you can use the console.table() method to improve the debugging process in such situations. You can use it to report tabular versions of arrays and objects to the console. The tabular data format works beautifully, allowing you to understand your data better and debug your code quickly. You may also sort columns very fast. This method uses any object type, arrays, arrays of arrays, arrays of objects, and nested objects as a parameter.</p>
    </li>
    </ol>
    <p>As an object If you pass an object, the index column represents the keys, and the value column represents the values that are related to the given key.</p>
    <pre><code>    var user = {
        name:&quot;Ravidu&quot;,
        age:25,
        job:&quot;writer&quot;,
        }
    
        console.table(user);
    </code></pre>
    <p>Array The index column will have the indexes of the array starting from zero. Check this example and its output below.</p>
    <pre><code>    var cities =[&quot;Washington&quot;,&quot;Delhi&quot;,&quot;London&quot;,&quot;Stockholm&quot;];
        console.table(cities);
    </code></pre>
    <p>Arrays of arrays In this case, column names will be increased as the index increases.</p>
    <pre><code>    var Destinations =[[&quot;USA&quot;, &quot;Washington&quot;],[&quot;India&quot;,&quot;Delhi&quot;],[&quot;UK&quot;,&quot;London&quot;],[&quot;Sweden&quot;,&quot;Stockholm&quot;]];
        console.table(Destinations);
    </code></pre>
    <p>Arrays of objects Here, values and properties are separated into columns.</p>
    <pre><code>    var users = [
        {
            name: &quot;Sam&quot;,
            age: 30
        },
        {
            name: &quot;John&quot;,
            age: 45
        },
        {
            name: &quot;Peter&quot;,
            age: 20
        }
        ];
        console.table(users);
    </code></pre>
    <p>Nested objects Suppose your values are nested objects. The console.table() method labels the output index appropriately.</p>
    <pre><code>    var roles = {
        writer: {
        firstname: &quot;Ravindu&quot;,
        lastname: &quot;Shehan&quot;, 
        email: &quot;ravindu@gmail.com&quot;
        }, 
        reviewer: {
        firstname: &quot;Ravindu&quot;,
        lastname: &quot;Shehan&quot;, 
        email: &quot;ravindu@gmail.com&quot;
        }
        }
    
        console.table (roles);
    </code></pre>
    <ol start="11">
    <li>
    <p>Clear method The clear() method helps you clean your browser console after all the debugging processes. You can use the console.clear() method before your debugging and at the end of it. It will ensure that no other printed messages are displayed in the console.</p>
    <p>console.count(label)</p>
    </li>
    </ol>
    

</body>
</html>

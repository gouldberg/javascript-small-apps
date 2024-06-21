## Stack Visualizer

This is totally from GeeksForGeeks.org JavaScript projects.
<br />

Stack is a well-known linear data structure that may follow the order LIFO(Last In First Out) or FILO(First In Last Out).
In this stack visualizer, we have a bucket in which we can put the elements and the bucket has a limit of containing a certain number of elements. When the limit is crossed, but we try to put an element the stack overflow message will be displayed in the message box and then we need to pop the element from the stack to insert new elements. Also when we want to pop an element from an empty stack then the stack underflow message will be displayed in the message box.
<br />

### HTML Code + CSS Code

- Now first create the interface of the visualizer using HTML & CSS. First Create a heading. Then after the heading create a container box which will contain the whole visualizer.
- Now inside this container add one input box and three buttons for pushing an element, popping an element and resetting the visualizer.
  Then below the input and the buttons create a bucket using a div and give the border left, right and the bottom and make the top border none in the CSS. This way you can create the bucket.
- On the left side of the bucket make four options to show the top of the stack, recently popped element, recently pushed element and the size of the stack.
- Also, create a message box under the info section to show the message. Use flexbox properties to align and justify all content in the right place.

### JavaScript Code

- First, select all elements which you need to use in javascript using the **"document.querySelector"** and store them inside variables. Also, declare an empty array which we use and maintain as an internal stack.
- Now make two functions, one to disable the three buttons and the second one to enable three buttons. Use the **button.disabled = true** to disable the button and **button.disabled = false**.
- You can also add any style for disabled buttons by **"classList.add"** if needed.
- **push button**
  - First, add a click **"eventListener"** to the push button.
  - Then add a **call-back function** to the event listener. In this function, first, add an if condition for blank input and show an error message and return.
  - After that add another if condition for checking the stack overflow condition.
  - At last, write the code to a new element in the bucket. Use **document.createElement("div")** to create a new element and add this element to the bucket using the **bucket.appendChild( )** function.
  - Also, update the internal stack or the array.
  - You can also add the **setTimeout** function to show the adding element delay. Also, disable the three buttons during the element pushing time. After pushing the element, update the value of the top, recently pushed element details and show a successful message in the message box.
- **Pop button**
  - First, check the stack underflow condition using the if statement. If the stack has no element then show a message of stack underflow. If not, then pop the last element by using **bucket.removeChild** and also delete the last element of the internal stack.
  - At last update the top and the recently popped element. You can also add the **setTimeout** function to show the popping element delay with animation.
- **reset button**
  - First, clear the internal stack.
  - Then make all info content blank by using **.innerHTML**
  - and delete all elements from the bucket by using **bucket.removeChild**.

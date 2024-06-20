# PIN Pad

This is totally from GeeksForGeeks.org JavaScript projects.
<br />

A numeric keypad/PIN pad through which the user can input the PIN. Once the user enters a PIN and hits “OK”, the code validates the PIN and provides an alert on whether the PIN is correct or not.
<br />

- Create an HTML structure with a <h2> heading mentioning the project name and a main container <div> to contain all the elements. The container element with have a width of 100%.
- Create a card like structure with a width of 30% of the parent container and center it on the page by setting left and right margins as “auto”
  Here, we use flexbox for formatting the various buttons and card
- Create a read only input textbox on the top which will display the entered pin in a password format
- Create multiple rows with each row containing 3 buttons with last row containing “Del” button to delete the last entered input number and “Ok” button to submit the PIN
- Add proper styling for the elements using their class and id values
- In the JS file, first set the predefined correct PIN value to the desired numeric value
- On click of various numeric buttons present, it should append that number to the overall PIN value present on the top input control
- On click of “Del” the last entered input should be removed from the output textbox. On click of “Ok”, it should validate the PIN entered against the predefined PIN and display whether the user entered the correct PIN or not.
- User should not be able to type anything to the input box directly
- User should be able to click on the buttons and it should be reflected in the input box on the top
- All the JS click events are handled from the JavaScript file

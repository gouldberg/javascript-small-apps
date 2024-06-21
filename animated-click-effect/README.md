## Animated Click Effect

This is totally from GeeksForGeeks.org JavaScript projects.
<br />

We will see when the user clicks on the button only then some animation would appear. The animation works after the button is clicked this is used in websites to confirm the user activity is done.
<br />

### HTML Code

- Create the card structure using HTML tags, like \<div\>, \<h1\> for heading, \<p\> to display the word with corresponding classes and id’s.

### CSS Code

- Add different styling properties in the CSS file using classes and elements that will define margin, padding, height, and border to the specific elements.

### JavaScript Code

- Give animation to the Heading when the page gets loaded.
- Make function animateonce, and in the body of that function call **setTimeout()** which manipulates DOM when the user clicks a button and performs animation on the button.
- Then, get the particular button element using **getElementById** and then **add eventlistener** after that call the function animateonce.

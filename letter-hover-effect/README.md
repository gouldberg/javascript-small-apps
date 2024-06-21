## Bouncing Letter Hover Effect

This is totally from GeeksForGeeks.org JavaScript projects.
<br />

### HTML Code

- To achieve a dynamic bouncing text effect, start by enclosing each letter of a \<h1\> heading in \<span\> tags. This letter-level control, combined with CSS and JavaScript, results in an engaging bounce animation, perfect for grabbing attention in headers, banners, and other emphasized text.

### CSS Code

- The .bounce class selector applies the **"bounce" keyframes animation** to an HTML element, specifically to \<span\> elements wrapped around heading letters. Elements with this class showcase the animation behavior.

### JavaScript Code

- \<span\> elements within the "bouncing-letters" container are targeted.
- When these \<span\> elements are hovered over, the bounce() function is triggered, passing the hovered element.
- bounce() ensures smooth animation. It checks if the \<span\> doesn't have the "bounce" class to avoid repeated animations. If not present, it adds the "bounce" class for the CSS animation.
- Using **setTimeout()**, the class is removed after 1 second, restoring the element to its original state.

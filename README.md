# Old School Solar Calculator
Throw your math back to the 80's with this fully functioning, 'solar-powered', CSS created and JavaScript run awesome calculator! (Hand-coded with love by Jennifer Lee Dev!)

![The OG Bazik 3000 Solar-Powered Calculator](/assets/OSCalculator.jpg)

## This project uses : 
HTML5, CSS3, JavaScript, Local Storage, and GSAP (for the Silly Billy Bubbles Tour)

## Features summary :
- A Life-like Calculator that doesn't need batteries! 
- The ON button turns the calculator on, and also doubles as a Clear button 
- The delete button will delete the last number or decimal input
- Functions like a real calculator would with basic functions of add, subtract, multiply, divide, modulo and squareroot
- A single click of the MRC (Memory Recall button) will record the number you want in the memory and recall that number if one has already been recorded.
- A double click of the MRC button will clear the memory number recorded.
- The M- button will subtract the memory number from your currently displayed number (or display the number as a negative if no number is currently displayed)
- The M+ button will add the memory number to your currently displayed number (or display the memory number itself if no number is currently displayed)
- You will see the total of your calculation(s) when you hit the = button. It will continue to compute as you enter functions and numbers even if you don't hit the = button, but you will not see the total until you do.
- A brief tour of the app, provided by The Silly Billy Bubbles Tour, which you can close and restart at any time.

## Why I built this :

Being in charge of my own learning journey, I assigned myself the task of creating a calculator. At the time, I had read that Object Oriented Programming was the preferred style of JavaScript coding (which I now think might have been an older article), so I chose to make this an OOP practice as well as challenging my JavaScript and CSS skills.

The calculator itself is completely made with CSS and the design is based on the solar-powered calculators used back in the 1980s (when we weren't allowed to use calculators in school, so they were wicked cool to have). Using pseudo-classes, creative shadows and gradients, it was pretty fun to design.  


I was fairly new to constructor classes at the time, so the Javascript began with a few different calculator tutorials, which I took knowledge from and adapted to the needs of this project. I find I learn better when I see how other people code the same things.

The additions of the Power On, Modulo, Squareroot, Memory Recall, Memory Clear, Memory Plus and Memory Minus functionalities I can say were completely original, as I had not seen any other teachers use these things.

The Calculator Size control was something I also just recently added as a creative way to make the calculator more device responsive without having to change the CSS units used in all of the different parts that make up the Calculator.

## Silly Billy's Bubble Tour
I've also installed my very own **Silly Billy Bubbles Tour guide** to give some bts of the project for those interested. (see the silly-billy-bubbles-tour repo!).


### What I've learned and future development : 
This was great practice with Object Oriented Programming and I really enjoyed being able to bring this idea to life using only CSS to design it. This project helped solidify some skills, such as adding and using methods within class constructors and using the 'this' keyword. 

If I were to built such an app again, I would use functionaly programming, since there's no need for a class constructor when there's only going to be one calculator. I would also make space in the display to show more of what the calculation is doing, such as the operand and function button string that's being input as well as the running total. I would use vw units with calcs and clamps in order to make the CSS portion able to resize itself on different sized devices. I also need to check it for accessibility. I am very sure some ARIA properties would benefit the screen-reading of this app, as well as the Silly Billy Bubbles Tour. I will come back to my projects to upgrade their accessibility.  

If you see any errors or have any comments or suggestions, please let me know! Feel free to email me at jennifer_lee_dev@protonmail.com

### Credits :
Thanks to Joanna Kosinska on Unsplash for the nice original background photo 

A shout out to the biggest influences on my Web Dev journey :
Kevin Powell (Youtube, courses on Scrimba and https://www.kevinpowell.co/)
Developed By Ed (Youtube, Udemy, courses at https://developedbyed.com/)
Web Dev Simplified (Youtube, courses at https://courses.webdevsimplified.com/)
FreeCodeCamp (Youtube https://www.youtube.com/@freecodecamp)
DesignCourse (Youtube https://www.youtube.com/@DesignCourse/videos)
Zero To Mastery Academy (school, https://zerotomastery.io/)
Promineo Tech (school, https://promineotech.com/)


_Please enjoy and thanks for checking it out!_

![some CSS code for this app](/assets/OSC-CSScode.jpg)

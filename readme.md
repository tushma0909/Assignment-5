##### Answer the following questions clearly:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 answer:  getElementById: it helps to find unique one  element from DOM
   getElementsByClassName: it helps to find some element which is in same class name.
   querySelector: it  finds first element that match the given css selector
   querySelectorAll:it  finds all elements that match the given css selector


2.How do you create and insert a new element into the DOM?
   answer:if i want to create a element:
      const createElement = document.createElement('p)
     
     if i want to insert a element

    parent.appendChild(element)



3.What is Event Bubbling and how does it work?
   answer: Event bubbling means a system when happens a event in a element, that event implements in that element at first then it's parents then another parents.

   it works like this: child element -> parent-> Document.


4.What is Event Delegation in JavaScript? Why is it useful?
answer:Event Delegation means allows to handle events for multiple child elements by adding the one event listener to parent element.
useful:
1.a single parent event listener can handle multiple child
2.it does not consume extra memory




5.What is the difference between preventDefault() and stopPropagation() methods?

answer: preventDefault() method used for stop loading console page.
 stopPropagation() method used for stop event bubbling
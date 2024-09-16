About

This project is 


How each of the components work 

List: The way the list is created is from a change in state in the textarea by the user entering text. Then once the user is happy with their input they then hit submit which triggers another change in state in the list. Everytime the submit button is hit an if statement checks if the field isn't empty. If true then creates a object called newItem. This object has 3 attributes which are its id, the actual text that the user inputed, and a boolean called done which is set to false by default. After the object creation then the function sets the current list by passing in a function that takes the current state as a argument. The function returns the sortList function so that when this new item is added the list stays sorted, with the input as an array with all the elements of the previous array plus the newItem. After the new item is added and the list is sorted the input field in the textarea is cleared, back to its default state. The method i used to change the items when they were completed was using css to add some text decoration of a line through the text. I used a ternary operator to check the condition in this case if the item is done and if true it switchs the classname to the one with the text decoration of line through.


Delete Button: For this project I added a button which can be used to delete items in the list if say the user whats to change or doesnt want that item in the list anymore either because they completed it or their goals have changed. It works by making a new list with all the items in it expect the item with the corresponding id to which item the button was clicked. It uses the filter method and checks all the ids of all the items in the list to see if it matches the id that is inputed in the function from the click of the delete button or trash can in this case.


Sorting the list: I wanted to make it so that when the user completes a item in the list that the list gets sorted, moving the completed items to the bottom and out of focus but not delete the item. I implemented it as such so that the user can see how much they have accomplished in there list and so that they could reflect. I might implement other features such as a progress bar but to better visualize their progress but that will be in the future. The way I solved this was by creating a simple sorting function called sortList which takes a list, in our case the list the user created, and uses the sort method to compare two items in the list. If they have the same value for the done attribute they do not change postion. If they have different values then it uses a ternary operator to check if the value for the done attribute is true for the first item. If so then the item is moved down the array or in our case 1 down in the list relative to the second item. If the first item done value is false and the second item is true then the first item moves back 1 in the array, up the list in the context of the application. It repeats this until the first conditon is met and the return value remains 0, leaving the list in an unchanged state. 


List Save: In order to have the list not deleted when the page was rerendered I had to add a way to save the list upon a change in state. I changed the intial state from just an array to the function savedItems. What this function does is it basically sees if there is a item in the list and if there is, it saves that item to the list as a string. If there isn't then an empty array is returned. In the second part we use the hook useEffect which will tell the component that something needs to happen upon each render. Whenever the array myList changes it will save the list to the local storage with the key name as myBucketList and converts the array into a string if it isn't already. So basically everytime the state of myList component changes it will save the array that is turned into a string to a local storage called myBucketList. I choose to use local storage instead of session storage as local storage would not save the list when the program is closed.


To-do's

[X]- Add a sort to move the items in the list that are check off to the bottom and the ones that arent to the top

[X]- Make it so that the checked items are crossed out

[X]- Improve the CSS/formating and design of the page

[]- Work on the home page 

[X]- Finish delete button design and implementation 

[X]- Add a save feature to the app so the list does not reset when the user switchs pages

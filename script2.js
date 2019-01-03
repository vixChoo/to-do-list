// 1. Select the element 
const myList = document.getElementById("my-list")
// when user hover , cursor will become pointer
const toDoInput = document.getElementById("my-Input")
myList.style.cursor = "pointer"

// Execute a function when the user releases a key on the keyboard
toDoInput.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the function of the button element with a click
        document.getElementById("addBtn").click();
    }
});

// handles add list when the button has been click
function addList() {
    let myInput = document.getElementById("my-Input").value

    if (myInput != "") {
        myList.innerHTML = myList.innerHTML + "<li>" + myInput + "</li>"
        document.getElementById("my-Input").value = ""
    }
    else
        alert("I asked for a task, not gibberish!");
}



myList.onclick = function (event) {
    // handles scenario where list has been done
    if (event.target.style.textDecoration == "line-through") {
        event.target.style.textDecoration = "none"
    }
    // TO checked list
    else {
        event.target.style.textDecoration = "line-through"
    }
}

/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

 $(document).ready(function () {
    // code goes here
    $(".fa-plus").click(function(event){
        const textVal = $(".textBox").val();
        
        if(!textVal){
            alert("Error: Please enter a task first");
        } else {
            $(".notCompleted").append(
                `<div class="task">${textVal}
                <span id="done" class="fas fa-check"></span>
                <span id="delete" class="fas fa-trash-alt"></span>
                </div>`
            );
        }
        $(".textBox").val("");

        $(".fa-check").click(function(){
            const doneBtn = $(this).parent();
            doneBtn.fadeIn(1000, function(){
                doneBtn.hide().appendTo('.completed').fadeIn(1000)
            })
        });


        $(".fa-trash-alt").click(function(){
            const deleteBtn = $(this).parent();
            deleteBtn.fadeOut(1000, function(){
                deleteBtn.remove();
            });
        });
    });
});
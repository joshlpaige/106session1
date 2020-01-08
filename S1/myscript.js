function createToDo(){
    // get the text
    var text2 = $('#txtText').val();

    // create an li
    var li = '<li>' + text2 + ' <button class="btn btn-outline-danger"> Complete! </button></li>';

    // add the li to the ul
    $("#pending").append(li);

    // clear the input field
    $("#txtText").val("");

    // set the focus to the field

    $("#txtText").focus();
    

}

function init(){
    console.log("Hi, I'm working.");
    console.log($);

    // get text from input field

    var text2 = $("#txtText").val();

    // hook events

    $("#btnSave").click(createToDo);  

    // when a click happens on element btnSave, it executes the createToDo function

    $("#txtText").keypress(function(e){
        //console.log(e);

        if(e.key == "Enter" ){
            createToDo();
        }
    });
}


// when the browser finishes rendering all html elements
// will execute a function called init

window.onload = init;
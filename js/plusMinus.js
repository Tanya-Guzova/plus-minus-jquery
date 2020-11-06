//the function below is performed to set up the default value, executes once at the start up
$(() => {
    //get the access to the input box object and set the default value of 0 in the input box
    let inputBox = $("#inputBox").val(0);
})

const stylePattern = (result)=>{
    
    if (result % 2 == 0) {
        let inputBox = $("#inputBox").val(result).css("color", "red");
    }
    else{
        let inputBox = $("#inputBox").val(result).css("color", "black");  
    }
    if (result % 3 == 0) {
        let inputBox = $("#inputBox").val(result).css("fontWeight", "bold");
    }
    else{
        let inputBox = $("#inputBox").val(result).css("fontWeight", "normal");  
    }
    if (result % 5 == 0) {
        let inputBox = $("#inputBox").val(result).css("fontStyle", "italic");
    }
    else{
        let inputBox = $("#inputBox").val(result).css("fontStyle", "normal");  
    }
}

$(
    () => {
        $("#minus").on("click",
            () => {
                let inputNum = $("#inputBox").val();
                let subtractionResult = Number(inputNum) - 1;
                let inputBox = $("#inputBox").val(subtractionResult);
                stylePattern(subtractionResult);
            })
            
    }
)

$(
    () => {
        $("#plus").on("click",
            () => {
                let inputNum = $("#inputBox").val();
                let additionResult = Number(inputNum) + 1;
                let inputBox = $("#inputBox").val(additionResult);
                stylePattern(additionResult);
            })
    }
)

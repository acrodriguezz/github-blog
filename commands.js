document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("sendBtn").addEventListener("click", function(e) {
        
        let command = document.getElementById("inputCommand");
        let description = document.getElementById("inputDescription");
        console.log(command.value);
        console.log(description);
        
        if(command.value === '' ){
            let commandError = document.getElementById("commandError");
            commandError.style.display = 'block';
        }
        else if(description.value === ''){
            let commandError = document.getElementById("descriptionError");
            commandError.style.display = 'block';
        }
        else{
            clearForm();
            alert("Command saved! ");
        }

        //"limpiamos" los datos de cada uno de los elementos del form 
        function clearForm(){
            document.getElementById("inputCommand").value = '';
            document.getElementById("inputDescription").value = '';
            document.getElementById("commandError").style.display = 'none';
            document.getElementById("descriptionError").style.display = 'none';
        }
    });
});
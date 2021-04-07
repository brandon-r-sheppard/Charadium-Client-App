var modal;

$(document).ready(function(){
    modal = document.getElementById("myModal");
    loadCharade();
    $('.btn').click(loadCharade);
    
})

function loadCharade(){
    const url='https://charadium.azurewebsites.net/Charades';
    modal.style.display = "block";
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            var r = result.split(';');
            $('.charade').text(r[0])
            $('.time').text(`${r[1]} Seconds`)
        },
        error: function(error){
            console.log(`Error ${error}`)
        }
    })
    modal.style.display = "none";
}
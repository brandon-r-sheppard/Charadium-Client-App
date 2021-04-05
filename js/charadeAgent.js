$(document).ready(function(){
    loadCharade();
    $('.btn').click(loadCharade);
})

function loadCharade(){
    const url='http://mezorno-001-site1.etempurl.com/Charades';
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
}
$(document).ready(function () {
   
    $("#nav_list a").click(function (event) {
        event.preventDefault(); 

        let title = $(this).attr("title"); 
        let filename = "json_files/" + title + ".json"; 

        $.getJSON(filename, function (data) {
            let speaker = data.speakers[0]; 
            let html = "<h1>" + speaker.title + "</h1>";
            html += "<img src='" + speaker.image + "' alt='" + speaker.speaker + "'>";
            html += "<h2>" + speaker.month + "<br>" + speaker.speaker + "</h2>";
            html += "<p>" + speaker.text + "</p>";

            $("main").empty();
            $("main").html(html);
        });
    });
});

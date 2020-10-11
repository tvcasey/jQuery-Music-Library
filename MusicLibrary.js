

$(document).ready(function () {});



function grabMusic() {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: "get",
        success: function (data, textStatus, jQxhr) {
            //runs if API is successful
            console.log(data);
            for(let i = 0; i < data.length; i++){
            $("#musicTitles").append("<th>" + data[i].title+ "</th>");
            $("#musicAlbums").append("<th>" + data[i].album + "</th>");
        
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            //if API fails, console errorThrown
            console.log(errorThrown);
        }
    });
}


grabMusic();












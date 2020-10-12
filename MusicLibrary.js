

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
            $("#musicTitles").append("<tr><td>" + data[i].title + "</tr></td>");
            $("#musicAlbums").append("<tr><td>" + data[i].album + "</tr></td>");
            $("#musicArtists").append("<tr><td>" + data[i].artist + "</tr></td>");
            $("#musicGenres").append("<tr><td>" + data[i].genre + "</tr></td>");
            $("#musicReleaseDates").append("<tr><td>" + data[i].releaseDate + "</tr></td>");
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            //if API fails, console errorThrown
            console.log(errorThrown);
        }
    });
}


grabMusic();












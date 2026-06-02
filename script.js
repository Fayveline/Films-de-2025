async function FillMovieTableWithJson() {
    var table = document.getElementById("movies-tbody");
    var movies = await LoadMoviesFromJson();
    console.log(movies);
    let i = 1;
    movies.forEach(function(movie) {
        /*if (movie["Note"] < 4 || movie["Release Year"] > 1990) {
            return;
        }*/
        var row = table.insertRow();
        var watchnumber = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var releaseYear = row.insertCell(2);
        var seenInCinema = row.insertCell(3);
        var firstWatch = row.insertCell(4);
        var note = row.insertCell(5);
        var cellComment = row.insertCell(6);
        watchnumber.innerHTML = i;
        i++;
        cellTitle.innerHTML = movie["Title"];
        cellComment.innerHTML = movie["Commentaire"] ? movie["Commentaire"] : "";
        releaseYear.innerHTML = movie["ReleaseYear"];
        seenInCinema.innerHTML = movie["SeenInCinema"] ? "Oui !" : "Non...";
        note.innerHTML = movie["Note"];
        firstWatch.innerHTML = movie["FirstWatch"] ? "Oui !" : "Non...";
    });
}

async function LoadMoviesFromJson() {
    const url = "./films.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

FillMovieTableWithJson();
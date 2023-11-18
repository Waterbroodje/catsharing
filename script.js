function generateNewCat() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let newCatImage = document.getElementById("catImage");

            newCatImage.src = data[0].url;

            window.currentCatID = data[0].id;
            window.catURL = data[0].url;
        }
    };

    xhr.open("GET", "https://api.thecatapi.com/v1/images/search/", true);
    xhr.send();
}
/*
function shareCat() {
    let catID = window.currentCatID;
    let shareURL = "https://cdn2.thecatapi.com/images/" + catID + ".jpg";

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(shareURL).then(r => {
        let popup = document.createElement("div");
        popup.className = "custom-popup";
        popup.textContent = "URL copied to clipboard!";

        // Append the popup to the body
        document.body.appendChild(popup);

        // Remove the popup after a short delay (e.g., 3 seconds)
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 1000);
    });
}
 */

/*
function shareCat() {
    let catID = window.currentCatID;
    // Redirect to the shared cat page
    window.location.href = `share.html?catId=${catID}`;
}
 */

function shareCat() {
    let shareURL = window.catURL;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(shareURL).then(() => {
        let popup = document.createElement("div");
        popup.className = "custom-popup";
        popup.textContent = "URL copied to clipboard!";

        // Append the popup to the body
        document.body.appendChild(popup);

        // Remove the popup after a short delay (e.g., 3 seconds)
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 1000);
    }).catch(error => {
        console.error('Error copying URL to clipboard:', error);
    });
}
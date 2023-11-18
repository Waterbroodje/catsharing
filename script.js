function generateNewCat() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            updateCatImage(JSON.parse(xhr.responseText)[0]);
        }
    };

    xhr.open("GET", "https://api.thecatapi.com/v1/images/search/", true);
    xhr.send();
}

function updateCatImage(data) {
    let newCatImage = document.getElementById("catImage");
    newCatImage.src = data.url;

    window.currentCatID = data.id;
    window.catURL = data.url;
}

function shareCat() {
    let shareURL = window.catURL;

    navigator.clipboard.writeText(shareURL).then(() => {
        showCopyConfirmation();
    }).catch(error => {
        console.error('Error copying URL to clipboard:', error);
    });
}

function showCopyConfirmation() {
    let popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.textContent = "URL copied to clipboard!";

    document.body.appendChild(popup);

    setTimeout(function () {
        document.body.removeChild(popup);
    }, 1000);
}

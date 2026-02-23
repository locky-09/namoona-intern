function loadSection(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}
loadSection("name", "name.html");
loadSection("home", "home.html");
loadSection("profile", "profile.html");
loadSection("positions", "positions.html");
loadSection("awards", "awards.html");
loadSection("groupcompanies", "groupcompanies.html");
loadSection("communityservices", "communityservices.html");   
loadSection("letsconnect", "letsconnect.html");
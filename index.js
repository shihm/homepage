

function showProject() {

}
function showCV() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "CV.html", false);
    ajax.send();
    document.getElementById('contents').innerHTML = ajax.responseText;
}
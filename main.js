// main function that loads the page

function main() {
    createNavBar();
}

function createNavBar() {
    document.writeln("<nav class ="navbar navbar-default" role ="navigator>");
}

window.addEventListener("load", main, false)
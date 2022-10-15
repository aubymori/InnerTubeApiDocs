const PAGENAME_REGEX = /#!\/(.*)/;
const SPINNER_HTML = `
<div class="spinner">
    <span class="spinner-icon sprite"></span>
    <span class="spinner-label">Loading...</span>
</div>
`;

nunjucks.configure("template", {
    trimBlocks: true,
    autoescape: true
});

if (document.querySelector("#sidebar")) {
    (async () => {
        var sidebar = await fetch("sidebar.json");
        var response = await sidebar.json();

        if (response) {
            document.querySelector("#sidebar").innerHTML =
                nunjucks.render("sidebar.html", response);
        };
    })();
}

window.addEventListener("hashchange", (e) => {
    var page = (PAGENAME_REGEX.exec(e.newURL))[1];
    console.log(page);
});
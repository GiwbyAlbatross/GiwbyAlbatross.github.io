// load an entire page's content

const src_loc = document.location.origin +'/pages/'+ document.location.pathname.split('/').at(-1)+'.html';

// DEBUG
window.alert("Requesting page at " + src_loc)

const req = XMLHttpRequest();

function actuallyLoadThePage(e) {
    if (req.responseCode == 404) {
        req.open("GET", document.location.origin + '/pages/404.html');
    } else {
        document.writeln(req.responseText);
    }
}

req.addEventListener("load", actuallyLoadThePage);
req.open("GET", src_loc);

// alert("Hello from your Chrome extension!")

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if(request.message === "clicked_browser_action") {
//             var firstHref = $("a[href^='http']").eq(0).attr("href");
//             console.log(firstHref);
//             chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//         }
//     }
// );

var pause = 20

var allowed_urls = ["classroom.udacity.com",
                    "discussions.udacity.com"]

var delay_page_load = function() {
    var host = location.href;
    var num_allowed = allowed_urls.length;
    var allowed = 0;
    for (i = 0; i < num_allowed; i++) {
        reg_exp = "^.*" + allowed_urls[i] + ".*$";
        if (host.match(reg_exp)) {
            allowed = 1;
            break;
        }
    }
    if (!allowed) {
        console.log("Not an important page");
        console.log(host);
        url = chrome.extension.getURL("redirect.html");
        console.log(url);
        //window.location.href = url;
    }
}

delay_page_load()

document.getElementsByTagName("yt-live-chat-item-list-renderer")[0].addEventListener("click", function(e) {
    if (e.target.classList.contains("yt-live-chat-author-chip") && e.target.wrappedJSObject.offsetParent.data.authorExternalChannelId !== "undefined") {
    	window.open("https://youtube.com/channel/" + e.target.wrappedJSObject.offsetParent.data.authorExternalChannelId);
    }
});

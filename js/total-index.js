function showDescription(gameId) {
    document.getElementById(gameId + "-description").style.display = "block";
}

function hideDescription(gameId) {
    document.getElementById(gameId + "-description").style.display = "none";
}
//<!--实现将鼠标放在图片上就出现图片的说明-->
function goToLink(gameId) {
    var link = document.getElementById(gameId + "-link").href;
    window.location.href = link;
}
//超链接
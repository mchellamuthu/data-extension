window.onload = function() {
chrome.storage.local.get("subject", function (data) {
  if (typeof data.subject == "undefined") {
    // That's kind of bad
  } else {
    // Use data.count
        document.getElementById("subject").value = data.subject;
  }
});
}
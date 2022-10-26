window.onload = function () {
  chrome.storage.local.get("subject", function (data) {
    if (typeof data.subject == "undefined") {
    } else {
      document.getElementById("title").value = data.subject;
    }
  });
  let projects = document.getElementById('project');
  projects.addEventListener('change', function () {
    document.getElementById('milestone').disabled = false;
  });
}
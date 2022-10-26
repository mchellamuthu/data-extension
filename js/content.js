// content.js
window.onload = function () {
     let subject = document.querySelectorAll(".hP")[0].innerText;
     chrome.storage.local.set({ subject: subject });
}


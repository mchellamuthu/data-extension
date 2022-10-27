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

  let toggleDescription = document.getElementById('toggleDescription');
  toggleDescription.addEventListener('click',function(){
    document.getElementById('descriptionBox').classList.toggle('hidden');
    document.getElementById('description').toggleAttribute('disabled');
  });

  let form = document.getElementById('task_form');
  form.addEventListener('submit',function(){
    document.getElementById("overlay").style.display = "block";
  });
  let overlay = document.getElementById('overlay');
  overlay.addEventListener('click',function(){
    overlay.style.display = "none";
  });
}
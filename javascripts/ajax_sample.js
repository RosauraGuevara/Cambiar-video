
let videosData = []; 
let currentVideoIndex = 0; 

function ajax() {
  const btn = document.getElementById('btn');
  const titleArea = document.getElementById("title");
  const contentArea = document.getElementById("content");
  const videoArea = document.getElementById("video");

  
  const req = new XMLHttpRequest();
  
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      videosData = JSON.parse(req.responseText);
      
      showVideo(currentVideoIndex);
    }
  };
  
  req.open("GET", "ajax.json");
  req.send();

  
  btn.addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videosData.length;
    showVideo(currentVideoIndex);
  });

  
  function showVideo(index) {
    videoArea.src = videosData[index].url;
    titleArea.textContent = videosData[index].title;
    contentArea.textContent = videosData[index].content;
  }
}

window.onload = ajax;


document.addEventListener("DOMContentLoaded", function () {

  var http_request = new XMLHttpRequest();
  let url = "/data.json"; // Example URL
  http_request.onreadystatechange = function () {
    if (http_request.readyState !== 4)
      return;
    if (http_request.status !== 200)
      throw new Error('request was defeated');
    do_something_with_object(http_request.responseText);
    http_request = null;
  };
  http_request.open("GET", url, true);
  http_request.send(null);

});



function do_something_with_object(data) {
  let array = JSON.parse(data);
  for(item of array) {
    let fig = document.createElement("figure");
    fig.className = "item";
    let img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    //img.width = 300; 
    //img.height = 300;
    fig.appendChild(img);
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = item.title;
    fig.appendChild(figcaption);
    gallery.appendChild(fig);
  }
}
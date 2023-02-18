const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const fileUrl = './media/Homogloblin_sorsolo-v1.3.apk';
  const fileName = 'Homogloblin_sorsolo-v1.3.apk';
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.querySelector('body').style.backgroundColor = randomColor;
      document.querySelector('html').style.backgroundColor = randomColor;
    });
});
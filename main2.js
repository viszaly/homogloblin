const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
 if(event.code === "Enter") {
        search();
    }	
});
function search() {
	 const input = searchInput.value;
	   window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
} 

function lucky() {
  window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
}

function darkTheme() {
  document.querySelector('body').style.backgroundColor = "rgb(16, 16, 16)";
  document.querySelector('html').style.backgroundColor = "rgb(16, 16, 16)";
  document.querySelector('footer').style.backgroundColor = "rgb(19, 23, 26)";
  document.getElementById("hu").style.color = "white";
  document.getElementById("search-input").style.backgroundColor = "rgb(16, 16, 16)";
  document.getElementById("search-input").style.color = "white";
  document.getElementById("gs-btn").style.backgroundColor = "rgb(69, 69, 69)";
  document.getElementById("ls-btn").style.backgroundColor = "rgb(69, 69, 69)";
  document.getElementById("gs-btn").style.color = "white";
  document.getElementById("ls-btn").style.color = "white";
  document.getElementById("dark-btn").style.display = "none";
  document.getElementById("light-btn").style.display = "block";
}

function lightTheme() {
  document.querySelector('body').style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector('html').style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector('footer').style.backgroundColor = "rgb(242, 242, 242)";
  document.getElementById("hu").style.color = "gray";
  document.getElementById("search-input").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("search-input").style.color = "black";
  document.getElementById("gs-btn").style.backgroundColor = "rgb(248, 249, 250)";
  document.getElementById("ls-btn").style.backgroundColor = "rgb(248, 249, 250)";
  document.getElementById("gs-btn").style.color = "black";
  document.getElementById("ls-btn").style.color = "black";
  document.getElementById("dark-btn").style.display = "block";
  document.getElementById("light-btn").style.display = "none";
}
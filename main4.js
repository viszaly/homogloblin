let names = [];

      document.getElementById("name").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          addName();
        }
      });

      function addName() {
        let name = document.getElementById("name").value.trim();
        if (name !== "") {
          names.push(name);
          document.getElementById("name").value = "";
          displayNames();
        }
        if (names.length > 9) {
          document.getElementById("content").style.height = "auto";
          }
      }

      function displayNames() {
        let html = "";
        for (let i = 0; i < names.length; i++) {
          html += names[i] + "<br>";
        }
        document.getElementById("names").innerHTML = html;
      }

      function drawWinner() {
        if (names.length > 1) {
          document.getElementById("names").innerHTML = "";
          document.getElementById("draw-btn").disabled = true;
          document.getElementById("add-btn").disabled = true;
          document.getElementById("loading").style.display = "block";
          document.getElementById("content").style.height = "300px"
          setTimeout(() => {
            let index = Math.floor(Math.random() * names.length);
            let winner = names[index];
            document.getElementById("result").innerHTML =
              "<h2>A mai glöblin: " + winner + "</h2>";
            document.getElementById("loading").style.display = "none";
          }, 2500);
        } else {
          alert("Adj meg legalább két nevet!");
        }
      }

let fields = [null, null, null,null, null, null, null, null, null];
let currentPlayer = "circle";
function init() {
  render();
}
function render() {
  let contentDiv = document.getElementById("content");

  let tableHTML = "<table>";
  for (let i = 0; i < 3; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = "";
      if (fields[index] === "circle") {
        symbol = createRing();
      } else if (fields[index] === "cross") {
        symbol = createCross();
      }
      tableHTML += `<td onclick="handleClick(${index})">${symbol}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById("content").innerHTML = tableHTML;
}

function handleClick(index) {
  if (fields[index] === null) {
    fields[index] = currentPlayer;
    render(); // Die Tabelle wird erneut gerendert, um das geänderte Symbol anzuzeigen

    // Wechseln Sie den Spieler für den nächsten Zug
    currentPlayer = currentPlayer === "circle" ? "cross" : "circle";

    // Entfernen Sie die onclick-Funktion des angeklickten <td>-Elements
    const tdElement = document.getElementsByTagName("td")[index];
    tdElement.onclick = null;
  }
}

function createRing() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <circle cx="32" cy="32" r="20" stroke="#00B0EF" stroke-width="5" fill="transparent">
                  <animate attributeName="r" from="0" to="25" dur="0.125s" fill="freeze" />
                  <animate attributeName="stroke-width" from="0" to="5" dur="0.125s" fill="freeze" />
              </circle>
          </svg>`;
}

function createCross() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <line x1="8" y1="8" x2="56" y2="56" stroke="#FFC000" stroke-width="0" stroke-linecap="round">
                  <animate attributeName="stroke-width" from="0" to="5" dur="200ms" fill="freeze" />
              </line>
              <line x1="8" y1="56" x2="56" y2="8" stroke="#FFC000" stroke-width="0" stroke-linecap="round">
                  <animate attributeName="stroke-width" from="0" to="5" dur="200ms" fill="freeze" />
              </line>
          </svg>`;
}

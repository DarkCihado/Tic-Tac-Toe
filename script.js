let fields = ['circle', "circle", null, null, null, null, null, "cross", null];
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
        symbol = "o";
      } else if (fields[index] === "cross") {
        symbol = "x";
      }
      tableHTML += `<td>${symbol}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById("content").innerHTML = tableHTML;
}

// Funktion zur Behandlung des Klick-Events
function handleClick(index) {
  if (fields[index] === null) {
    fields[index] = "cross"; // Ändern Sie hier den Spieler (z. B. auf 'circle'), wenn Sie abwechselnde Züge möchten.
  }
}

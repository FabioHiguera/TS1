
import { series } from "./data"; 
import { Serie } from "./serie";


function renderSeries(series: Serie[]): void {
  console.log("Renderizando series:", series);
  const tableBody = document.getElementById("series-table-body");

  if (tableBody) {
    tableBody.innerHTML = '';

    let totalSeasons = 0;

    series.forEach((serie) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      tableBody.appendChild(row);
      totalSeasons += serie.seasons;
    });

    const averageSeasons = totalSeasons / series.length;

    const averageRow = document.createElement("tr");
    averageRow.innerHTML = `
      <td colspan="3"><strong>Promedio de Temporadas:</strong></td>
      <td><strong>${averageSeasons.toFixed(2)}</strong></td>
    `;
    tableBody.appendChild(averageRow);
  } else {
    console.error("El elemento de la tabla no se encontró.");
  }
}

// Llama a la función para renderizar las series
renderSeries(series);

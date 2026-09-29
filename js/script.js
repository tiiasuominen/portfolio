// Kuukaudet 0-11
const syntymapaiva = new Date(2004, 11, 23);

function laskeIka(syntynyt) {
  const nyt = new Date();
  let ika = nyt.getFullYear() - syntynyt.getFullYear();
  const eiVielaSyntymapaivaa =
    nyt.getMonth() < syntynyt.getMonth() ||
    (nyt.getMonth() === syntynyt.getMonth() && nyt.getDate() < syntynyt.getDate());
  if (eiVielaSyntymapaivaa) ika--;
  return ika;
}

document.getElementById("age").textContent = laskeIka(syntymapaiva);
document.getElementById("year").textContent = new Date().getFullYear();

function PWGen(längeDesPws) {
  let pw = ""; // Verwende let statt const, um den Wert zu ändern
  const PWZeichen =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (let i = 0; i < längeDesPws; i++) {
    pw += PWZeichen.charAt(Math.floor(Math.random() * PWZeichen.length));
  }

  return pw;
}

document.getElementById("pwBtn").addEventListener("click", function () {
  const längeDesPws = prompt("Bitte gib die Länge des Passworts ein:");
  if (längeDesPws >= 8) {
    const pw = PWGen(längeDesPws);
    console.log("Generiertes Passwort:", pw);
  } else {
    console.log("Passwortlänge muss mindestens 8 Zeichen betragen!");
  }
});

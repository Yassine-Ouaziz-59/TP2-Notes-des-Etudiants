const etudiants = [
  { id: 1, nom: 'Amine', note: 16 },
  { id: 2, nom: 'Youssef', note: 8 },
  { id: 3, nom: 'Salma', note: 14 },
  { id: 4, nom: 'Omar', note: 12 }
];

function noteValide(note) {
  return Number.isFinite(note) && note >= 0 && note <= 20;
}

function moyenne(notes) {
  if (notes.length === 0) return null;
  const total = notes.reduce((somme, note) => somme + note, 0
);
  return total / notes.length;
}

const notes = etudiants.map((e) => e.note);
const admis = etudiants.filter((e) => e.note >= 10);
const ajournes = etudiants.filter((e) => e.note < 10);

const lignes = etudiants.map((e) => {
  const decision = e.note >= 10 ? 'Admis' : 'Ajourné';
  return `${e.nom} - ${e.note}/20 - ${decision}`;
});

console.log('=== GESTION DES NOTES DES ÉTUDIANTS ===');
console.log('\n--- Liste des étudiants ---');
for (const ligne of lignes) console.log(ligne);

console.log('\n--- Statistiques ---');
console.log('Moyenne de classe :', moyenne(notes));
console.log("Nombre d'admis   :", admis.length);
console.log("Nombre d'ajournés:", ajournes.length);

console.log('\n--- Déstructuration ---');
const { nom, note } = etudiants[0];
console.log(`${nom} : ${note}/20`);

// Vérification noteValide
console.log('\n--- Vérification noteValide ---');
console.log('noteValide(16) :', noteValide(16));
console.log('noteValide(-2) :', noteValide(-2));
console.log('noteValide(25) :', noteValide(25));
console.log('noteValide("14"): ', noteValide('14'));

// Comparaisons
console.log('\n--- Comparaisons === vs == ---');
console.log('0 == "0" :', 0 == '0');
console.log('0 === "0":', 0 === '0');

// Cas tableau vide
console.log('\n--- Cas tableau vide ---');
console.log('moyenne([]) :', moyenne([]));



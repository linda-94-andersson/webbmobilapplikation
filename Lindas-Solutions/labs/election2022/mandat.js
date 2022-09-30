const valData = require("./data.json");

// "partiMandat": [
//     {
//       "partiforkortning": "M",
//       "partibeteckning": "Moderaterna",
//       "antalMandat": 67
//     },

function getVotePercentage() {
    console.log(`Valdeltagande 2022: ${valData.valdeltagande}`);
}

getVotePercentage();

function mandates(party) {
    const foundParty = valData.partiMandat.find(
        (p) => p.partiforkortning === party
    );

    return console.log(`${foundParty.partibeteckning}: ${foundParty.antalMandat} mandat`);
}

mandates("L");
mandates("MP");

function allMandates() {
    const result = valData.partiMandat.map((p) => {
      return `${p.partiforkortning}: ${p.antalMandat}`;
    });
  
    return result.join(", ");
  }

console.log(allMandates()); 

function calculateMandates(parties){
    const result = valData.partiMandat.filter((p) =>
    parties.includes(p.partiforkortning)
  );

  let mandateCount = 0;
  result.forEach((p) => (mandateCount += p.antalMandat));

  return console.log(`${parties.join(", ")}: ${mandateCount} av 349 totalt`);
}

calculateMandates(["C", "L", "KD"]); 
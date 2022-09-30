const valData = require("./data.json");

// "valkretsar": [
//     {
//       "namn": "Stockholms kommun",
//       "kod": "",
//       "antalRostberattigade": "0",
//       "antalRaknadeRoster": "0",
//       "antalRostberattigadeIRaknadeValdistrikt": "0",
//       "antalValdistriktRaknade": "0",
//       "antalValdistriktSomSkaRaknas": "0",
//       "meddelandetext": "",
//       "rosterPaverkaMandat": {
//         "antalRoster": "0",
//         "partiroster": [
//           {
//             "partibeteckning": "",
//             "partiforkortning": "M",
//             "fargkod": "#F9C992",
//             "ordningsnummer": "0",
//             "antalRoster": "109 236",
//             "antal": 109236,
//             "andelRoster": "18,9%",
//             "andel": 18.9,
//             "visa": 0,
//             "listRoster": []
//           },

function listDistricts() {
    const district = valData.valkretsar.map((p) => p.namn);
    return console.log(district.join(", "));
}

listDistricts();

function districtResults(districtName) {
    const foundDistrict = valData.valkretsar.find(
        (vk) => vk.namn === districtName
    );

    const result = foundDistrict.rosterPaverkaMandat.partiroster.map((pr) => {
        return `${pr.partiforkortning}: ${pr.antalRoster} (${pr.andelRoster})`;
    });

    result.unshift(districtName);

    return result.join("\n");
}

console.log(districtResults("Södermanlands län")); 

function partyResults(party) {
    const districtResults = valData.valkretsar.map((vk) => {
      const partyResults = vk.rosterPaverkaMandat.partiroster.find(
        (pr) => pr.partiforkortning === party
      );
  
      return `${vk.namn}: ${partyResults.antalRoster} (${partyResults.andelRoster})`;
    });
  
    districtResults.unshift(`Resultat för ${party} per valkrets`);
  
    return districtResults.join("\n");
  }
  
  console.log(partyResults("MP"));
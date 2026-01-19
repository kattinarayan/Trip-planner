function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

// 30 districts with sample visiting places
const samplePlans = {
  "Bagalkot": ["Badami Caves", "Pattadakal Temples", "Lunch", "Aihole Monuments"],
  "Bengaluru Rural": ["Nandi Hills", "Devanahalli Fort", "Lunch", "Skandagiri Trek"],
  "Bengaluru Urban": ["Lalbagh Botanical Garden", "Cubbon Park", "Lunch at MG Road", "Bangalore Palace"],
  "Belagavi": ["Belagavi Fort", "Kamal Basti", "Lunch", "Gokak Falls"],
  "Ballari": ["Ballari Fort", "Tungabhadra Dam", "Lunch", "Hampi ruins nearby"],
  "Bidar": ["Bidar Fort", "Bahmani Tombs", "Lunch", "Guru Nanak Jhira Sahib"],
  "Chamarajanagar": ["Biligiriranga Hills", "Hogenakkal Falls", "Lunch", "Male Mahadeshwara Hills"],
  "Chikballapur": ["Nandi Hills", "Muddenahalli", "Lunch", "Bhoga Nandeeshwara Temple"],
  "Chikkamagaluru": ["Mullayanagiri", "Baba Budangiri", "Lunch", "Coffee Plantations Tour"],
  "Chitradurga": ["Chitradurga Fort", "Chandravalli Caves", "Lunch", "Vedavati River Viewpoint"],
  "Dakshina Kannada": ["Mangaluru Beaches", "St. Aloysius Chapel", "Lunch", "Pilikula Zoo"],
  "Davanagere": ["Kunduvada Cave Temple", "Bhadra Dam", "Lunch", "Harihara River View"],
  "Dharwad": ["Unkal Lake", "Nrupatunga Hill", "Lunch", "Indira Gandhi Glass House"],
  "Gadag": ["Trikuteshwara Temple", "Veeranarayana Temple", "Lunch", "Lakkundi Temples"],
  "Hassan": ["Belur Temple", "Halebidu Temples", "Lunch", "Shravanabelagola"],
  "Haveri": ["Ranebennur Blackbuck Sanctuary", "Sonda Fort", "Lunch", "Hangal Temples"],
  "Kalaburagi": ["Gulbarga Fort", "Khwaja Bande Nawaz Dargah", "Lunch", "Narayanpet Lake"],
  "Kodagu": ["Abbey Falls", "Talakaveri", "Lunch", "Madikeri Fort"],
  "Kolar": ["Kolar Gold Fields", "Someshwara Temple", "Lunch", "Antaragange Trek"],
  "Koppal": ["Hampi Nearby Ruins", "Koppal Fort", "Lunch", "Maski Archaeological Site"],
  "Mandya": ["Krishna Raja Sagar Dam", "Ranganathittu Bird Sanctuary", "Lunch", "Srirangapatna"],
  "Mysuru": ["Mysore Palace", "Chamundi Hill", "Lunch at Devaraja Market", "Brindavan Gardens"],
  "Raichur": ["Raichur Fort", "Narayanpur Dam", "Lunch", "Maski Archaeological Site"],
  "Ramanagara": ["Ramadevara Betta", "Rock Climbing Spots", "Lunch", "Janapada Loka Museum"],
  "Shimoga": ["Jog Falls", "Sharavathi River View", "Lunch", "Sakrebailu Elephant Camp"],
  "Tumakuru": ["Devarayanadurga Hills", "Siddara Betta", "Lunch", "Shivagange"],
  "Udupi": ["Sri Krishna Temple", "Malpe Beach", "Lunch", "St. Mary’s Island"],
  "Uttara Kannada": ["Karwar Beach", "Kali River", "Lunch", "Dandeli Wildlife Sanctuary"],
  "Vijayapura": ["Gol Gumbaz", "Ibrahim Rauza", "Lunch", "Bara Kaman"],
  "Yadgir": ["Yadgir Fort", "Devapur Lake", "Lunch", "Baichi Basthi Temple"]
};

// Populate district dropdown automatically
const districtSelect = document.getElementById("district");
Object.keys(samplePlans).forEach(district => {
  let option = document.createElement("option");
  option.value = district;
  option.text = district;
  districtSelect.add(option);
});

function generatePlan() {
  const district = document.getElementById("district").value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;

  if (!district || !days || !budget) {
    alert("Please select all fields");
    return;
  }

  const output = document.getElementById("output");
  const plan = samplePlans[district];

  let html = `<h3>Sample Trip Plan</h3>
              <p><strong>District:</strong> ${district}</p>
              <p><strong>Days:</strong> ${days}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <hr>`;

  plan.forEach(item => {
    html += `<p>${item}</p>`;
  });

  html += `<hr><small>*This is a demo preview, not a real plan</small>`;
  output.innerHTML = html;
}

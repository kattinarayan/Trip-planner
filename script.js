function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

// Sample visiting places with price for 30 districts
const samplePlans = {
  "Bagalkot": [
    { name: "Badami Caves", price: 50 },
    { name: "Pattadakal Temples", price: 30 },
    { name: "Lunch", price: 150 },
    { name: "Aihole Monuments", price: 20 }
  ],
  "Bengaluru Rural": [
    { name: "Nandi Hills", price: 0 },
    { name: "Devanahalli Fort", price: 20 },
    { name: "Lunch", price: 200 },
    { name: "Skandagiri Trek", price: 50 }
  ],
  "Bengaluru Urban": [
    { name: "Lalbagh Botanical Garden", price: 40 },
    { name: "Cubbon Park", price: 0 },
    { name: "Lunch at MG Road", price: 200 },
    { name: "Bangalore Palace", price: 230 }
  ],
  "Belagavi": [
    { name: "Belagavi Fort", price: 10 },
    { name: "Kamal Basti", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Gokak Falls", price: 30 }
  ],
  "Ballari": [
    { name: "Ballari Fort", price: 20 },
    { name: "Tungabhadra Dam", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Hampi ruins nearby", price: 50 }
  ],
  "Bidar": [
    { name: "Bidar Fort", price: 10 },
    { name: "Bahmani Tombs", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Guru Nanak Jhira Sahib", price: 0 }
  ],
  "Chamarajanagar": [
    { name: "Biligiriranga Hills", price: 0 },
    { name: "Hogenakkal Falls", price: 50 },
    { name: "Lunch", price: 150 },
    { name: "Male Mahadeshwara Hills", price: 0 }
  ],
  "Chikballapur": [
    { name: "Nandi Hills", price: 0 },
    { name: "Muddenahalli", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Bhoga Nandeeshwara Temple", price: 10 }
  ],
  "Chikkamagaluru": [
    { name: "Mullayanagiri", price: 0 },
    { name: "Baba Budangiri", price: 0 },
    { name: "Lunch", price: 200 },
    { name: "Coffee Plantation Tour", price: 100 }
  ],
  "Chitradurga": [
    { name: "Chitradurga Fort", price: 30 },
    { name: "Chandravalli Caves", price: 20 },
    { name: "Lunch", price: 150 },
    { name: "Vedavati River Viewpoint", price: 0 }
  ],
  "Dakshina Kannada": [
    { name: "Mangaluru Beaches", price: 0 },
    { name: "St. Aloysius Chapel", price: 0 },
    { name: "Lunch", price: 200 },
    { name: "Pilikula Zoo", price: 150 }
  ],
  "Davanagere": [
    { name: "Kunduvada Cave Temple", price: 0 },
    { name: "Bhadra Dam", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Harihara River View", price: 0 }
  ],
  "Dharwad": [
    { name: "Unkal Lake", price: 0 },
    { name: "Nrupatunga Hill", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Indira Gandhi Glass House", price: 30 }
  ],
  "Gadag": [
    { name: "Trikuteshwara Temple", price: 0 },
    { name: "Veeranarayana Temple", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Lakkundi Temples", price: 10 }
  ],
  "Hassan": [
    { name: "Belur Temple", price: 10 },
    { name: "Halebidu Temples", price: 20 },
    { name: "Lunch", price: 150 },
    { name: "Shravanabelagola", price: 0 }
  ],
  "Haveri": [
    { name: "Ranebennur Blackbuck Sanctuary", price: 50 },
    { name: "Sonda Fort", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Hangal Temples", price: 10 }
  ],
  "Kalaburagi": [
    { name: "Gulbarga Fort", price: 10 },
    { name: "Khwaja Bande Nawaz Dargah", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Narayanpet Lake", price: 0 }
  ],
  "Kodagu": [
    { name: "Abbey Falls", price: 30 },
    { name: "Talakaveri", price: 0 },
    { name: "Lunch", price: 200 },
    { name: "Madikeri Fort", price: 20 }
  ],
  "Kolar": [
    { name: "Kolar Gold Fields", price: 50 },
    { name: "Someshwara Temple", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Antaragange Trek", price: 0 }
  ],
  "Koppal": [
    { name: "Hampi Nearby Ruins", price: 50 },
    { name: "Koppal Fort", price: 10 },
    { name: "Lunch", price: 120 },
    { name: "Maski Archaeological Site", price: 20 }
  ],
  "Mandya": [
    { name: "Krishna Raja Sagar Dam", price: 0 },
    { name: "Ranganathittu Bird Sanctuary", price: 50 },
    { name: "Lunch", price: 150 },
    { name: "Srirangapatna", price: 20 }
  ],
  "Mysuru": [
    { name: "Mysore Palace", price: 70 },
    { name: "Chamundi Hill", price: 0 },
    { name: "Mysore Zoo", price: 200 },
    { name: "Brindavan Gardens", price: 50 }
  ],
  "Raichur": [
    { name: "Raichur Fort", price: 10 },
    { name: "Narayanpur Dam", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Maski Archaeological Site", price: 20 }
  ],
  "Ramanagara": [
    { name: "Ramadevara Betta", price: 0 },
    { name: "Rock Climbing Spots", price: 50 },
    { name: "Lunch", price: 150 },
    { name: "Janapada Loka Museum", price: 20 }
  ],
  "Shimoga": [
    { name: "Jog Falls", price: 50 },
    { name: "Sharavathi River View", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Sakrebailu Elephant Camp", price: 30 }
  ],
  "Tumakuru": [
    { name: "Devarayanadurga Hills", price: 0 },
    { name: "Siddara Betta", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Shivagange", price: 20 }
  ],
  "Udupi": [
    { name: "Sri Krishna Temple", price: 0 },
    { name: "Malpe Beach", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "St. Mary’s Island", price: 20 }
  ],
  "Uttara Kannada": [
    { name: "Karwar Beach", price: 0 },
    { name: "Kali River", price: 0 },
    { name: "Lunch", price: 150 },
    { name: "Dandeli Wildlife Sanctuary", price: 50 }
  ],
  "Vijayapura": [
    { name: "Gol Gumbaz", price: 20 },
    { name: "Ibrahim Rauza", price: 10 },
    { name: "Lunch", price: 120 },
    { name: "Bara Kaman", price: 0 }
  ],
  "Yadgir": [
    { name: "Yadgir Fort", price: 10 },
    { name: "Devapur Lake", price: 0 },
    { name: "Lunch", price: 120 },
    { name: "Baichi Basthi Temple", price: 0 }
  ]
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

  plan.forEach(place => {
    html += `
      <div class="place-card">
        <p><strong>${place.name}</strong></p>
        <p>Entry Fee: ₹${place.price}</p>
      </div>
    `;
  });

  html += `<hr><small>*This is a demo preview, not a real plan</small>`;
  output.innerHTML = html;
}

         

document.addEventListener("DOMContentLoaded", function () {
    const mapping = [
      { key: "2", value: "A" },
      { key: "22", value: "B" },
      { key: "222", value: "C" },
      { key: "3", value: "D" },
      { key: "33", value: "E" },
      { key: "333", value: "F" },
      { key: "4", value: "G" },
      { key: "44", value: "H" },
      { key: "444", value: "I" },
      { key: "5", value: "J" },
      { key: "55", value: "K" },
      { key: "555", value: "L" },
      { key: "6", value: "M" },
      { key: "66", value: "N" },
      { key: "666", value: "O" },
      { key: "7", value: "P" },
      { key: "77", value: "Q" },
      { key: "777", value: "R" },
      { key: "7777", value: "S" },
      { key: "8", value: "T" },
      { key: "88", value: "U" },
      { key: "888", value: "V" },
      { key: "9", value: "W" },
      { key: "99", value: "X" },
      { key: "999", value: "Y" },
      { key: "9999", value: "Z" },
      { key: "0", value: "SPACE" }
    ];

    const mappingContainer = document.getElementById("mapping");
    mappingContainer.classList.add(
      "grid",
      "gap-4",
      "px-4", // Padding kecil untuk semua ukuran layar
      "grid-cols-2",  // Default untuk layar kecil (xs, sm)
      "sm:grid-cols-2", 
      "md:grid-cols-4", // Untuk layar sedang (md)
      "lg:grid-cols-6", // Untuk layar besar (lg)
      "xl:grid-cols-8"  // Untuk layar ekstra besar (xl)
    );
    mapping.forEach(item => {
      const div = document.createElement("div");
      div.className = "appear-animate text-white text-lg p-2 border border-gray-400 rounded-lg text-center hover:bg-white hover:text-gray-700";
      div.innerText = `${item.key} = ${item.value}`;
      mappingContainer.appendChild(div);
    });
  });

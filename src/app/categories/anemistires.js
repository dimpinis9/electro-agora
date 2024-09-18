// src/app/categories/anemistires.js

export default function Anemistires() {
  const epidapedioi = [
    "367534",
    "358181",
    "358204",
    "357948",
    "357935",
    "293741",
    // Περισσότερα προϊόντα εδώ...
  ];

  const grafeiou = [
    "330422",
    "3304415",
    "330408",
    "330354",
    "330392",
    // Περισσότερα προϊόντα εδώ...
  ];

  const epitrapezioi = ["330316", "330286", "330552", "184916"];

  const xeiros = ["330385", "330378", "330361"];

  return (
    <div>
      <h1>Ανεμιστήρες</h1>
      <h2>Επιδαπέδιοι</h2>
      <ul>
        {epidapedioi.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>

      <h2>Γραφείου</h2>
      <ul>
        {grafeiou.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>

      <h2>Επιτραπέζιοι</h2>
      <ul>
        {epitrapezioi.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>

      <h2>Χειρός</h2>
      <ul>
        {xeiros.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>
    </div>
  );
}

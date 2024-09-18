// src/app/categories/thermansi.js

export default function Thermansi() {
  const kalorifer = [
    "504304",
    "503055",
    "206956",
    "503048",
    "504243",
    "504311",
    "290191",
    "314514",
    "216016",
    "216009",
  ];

  const aerotherma = [
    "290818",
    "314477",
    "371531",
    "371548",
    "371456",
    "371463",
    "371487",
    "188351",
  ];

  return (
    <div>
      <h1>Θέρμανση</h1>
      <h2>Καλοριφέρ</h2>
      <ul>
        {kalorifer.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>

      <h2>Αερόθερμα</h2>
      <ul>
        {aerotherma.map((code) => (
          <li key={code}>Κωδικός Προϊόντος: {code}</li>
        ))}
      </ul>
    </div>
  );
}

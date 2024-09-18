// src/app/categories/[category].js
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  // Dummy data για τα προϊόντα της κατηγορίας
  const products = [
    { name: "Air Fryer", price: 99 },
    { name: "Καλοριφέρ", price: 49 },
    { name: "Πιστολάκι Μαλλιών", price: 35 },
  ];

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}

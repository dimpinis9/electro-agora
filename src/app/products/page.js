const products = [
  { id: 1, name: "Ψυγείο", category: "refrigerators", price: 499.99 },
  { id: 2, name: "Πλυντήριο", category: "washing-machines", price: 399.99 },
  { id: 3, name: "Φούρνος μικροκυμάτων", category: "microwaves", price: 89.99 },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Όλα τα προϊόντα</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.category}/${product.id}`}>
              {product.name} - €{product.price}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Impossible de récupérer les produits');
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <h1>Indieva</h1>
      <p>Commerce infrastructure for independent creators.</p>

      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — {product.price} €
          </li>
        ))}
      </ul>
    </main>
  );
}
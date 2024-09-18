// src/app/products/[id].js

import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Προϊόν Κωδικός: {id}</h1>
      <p>Εδώ μπορείτε να δείτε λεπτομέρειες για το προϊόν με κωδικό {id}.</p>
    </div>
  );
}

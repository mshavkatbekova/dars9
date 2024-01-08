import Link from "next/link";
import { headers } from "next/headers";

async function NotFoundPage() {
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <div className="prose">
      <h1>Not Found: {domain}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        animi natus aspernatur consectetur facere ab culpa eligendi soluta amet
        architecto?
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFoundPage;

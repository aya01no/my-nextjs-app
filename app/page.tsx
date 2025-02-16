import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>トップページ</h1>
      <p>このページからaboutページへ移動できます。</p>
      <Link href="/about">
      <button>Aboutページへ移動</button>
      </Link>
      </div>
  );
}
'use client';

import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <h1>トップページ</h1>
      <p>このページからaboutページへ移動できます。</p>
       <Button href="/about">Aboutページへ移動</Button>
    </div>
  );
}
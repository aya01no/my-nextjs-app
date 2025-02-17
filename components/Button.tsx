"use client";

import Link from "next/link";
import React from "react";

export default function Button({ children, href}: {children: React.ReactNode; href: string}) {
    return (
        <Link href={href}>
        <button
        className="px -4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
            {children}
        </button>
        </Link>
    );
}
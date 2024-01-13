"use client";
import React from "react";
import Link from "next/link";

// Todoアプリの中身
const About = () => {
  return (
    <div className="container mx-auto p-8 text-center max-w-2xl">
      <h1 className="text-2xl mb-4">About</h1>
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

export default About;

import { useState } from "react";

// MY FIRST EXEMPLE FROM NEXT JS & TAILWIND

import fetch from "node-fetch";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css"
import Head from "next/head";

function Blog({ posts }) {
  return (
    <>
    <Head>
      <title>Oeuvre Liste | Home</title>
      <meta name="description" content="oeuvres"></meta>
    </Head>
    <div className={styles.container}>
      
      <h1>home</h1>
      <Link href="/oeuvres">
        <a>See All oeuvres</a>
      </Link>
      
      {/* <ul>
        {posts.map((post) => {
          return (
            <Link href="/pages/blog/[id].js" key={post.id}>
              <a className="text-3xl font-bold underline">
                <li>{post.title}</li>
              </a>
            </Link>
          );
        })}
      </ul> */}
    </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://beta.api.danae.io/test");
  const data = await res.json();
  const posts = await data;

  return {
    props: {
      posts,
    },
  };
}

export default Blog;

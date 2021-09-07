import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from './../components/Layout'
import { db } from './../lib/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

const IndexPage = () => {
  const [fbData, setFbData] = useState([])
  useEffect(() => {
    const f = async () => {
      const docRef = doc(db, "sample", "Vx7kUyUpVC86AXegEE7o");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setFbData([docSnap.data().age, docSnap.data().name])
    };
    f();
  }, [])
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>{fbData}</p>
    </Layout>
  )
}

export default IndexPage


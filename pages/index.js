import Head from "next/head";
import Link from "next/link";
import PostLink from "../components/PostLink";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Hello from the index</h1>
    <Link href="/about">About Page222</Link>
    <a>About Page</a>
    <Link href="/about"><a>About Page333</a></Link>
    <div>
      <ul>
        <li>
          <PostLink title="Something" id={0} />
        </li>
        <li>
          <PostLink title="Something else" id={1} />
        </li>
      </ul>
    </div>
  </div>
);

export default withLayout(Index);
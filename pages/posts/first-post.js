import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <div className='container'>
        <Head>
            <title>Main Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className='name-banner'>
      <h1 id='name-banner-text'>David Francisco</h1>
      </div>
      <div className='link-boxes-div'>
        <a id='linkedin' target="_blank" href="https://www.linkedin.com/in/davidn0tdave">
            <Image id='linkedin-logo' src='/linkedin.png' width={100} height={100} />
        </a>
        <a id='github-link' target="_blank" href="https://github.com/dfrancisco26">
        <Image id='github-logo' src='/github.png' width={100} height={100} />
        </a>
      </div>
      <div className='business-card-div'>
        <Image id='business-card-img' src='/Business_Card.png' width={450} height={250} />
      </div>
    </div>

  );
}
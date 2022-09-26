import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <div className='container'>
        <Head>
            <title>Main Page</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400&family=Ms+Madi&family=Oxygen:wght@300;400&display=swap" rel="stylesheet" />
        </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className='name-banner'>
      <h1 id='name-banner-text'>David, n0t Dave</h1>
      </div>
      <h1>
  <span>Always</span>
  <div class="message">
    <div class="word1">creative</div>
    <div class="word2">driven</div>
    <div class="word3">honest</div>
  </div>
</h1>
      <div className='link-boxes-div'>
        <a id='linkedin' target="_blank" href="https://www.linkedin.com/in/davidn0tdave">
            <Image id='linkedin-logo' src='/linkedin.png' width={100} height={100} />
        </a>
        <a id='github' target="_blank" href="https://github.com/dfrancisco26">
        <Image id='github-logo' src='/github.png' width={100} height={100} />
        </a>
      </div>
      <div className='business-card-div'>
        <Image id='business-card-img' src='/Business_Card.png' width={450} height={220} />
      </div>
    </div>

  );
}
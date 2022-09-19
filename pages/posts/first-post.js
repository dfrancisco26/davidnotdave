import Link from 'next/link';


export default function FirstPost() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div class='name-banner'>
      <h1 id='name-banner-text'>David Francisco</h1>
      </div>
      <div class='link-boxes-div'>
        <a target="_blank" href="https://www.linkedin.com/in/davidn0tdave/">LinkedIn</a>
      </div>
    </>
  );
}
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {

  const ids = [...Array(100).keys()]
  return {
    paths: ids.map((id) => {
      return {
        params: {
          id: `${id}`,
        },
      }
    }),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  console.log("pulling data for " + params.id);
  const response =  new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("done pulling data for " + params.id);
        resolve(params);
    }, 1000); // add an artifical delay to simulate web server response
 });
  const props = await response;
  return {
    props,
  }
}


export default function Post({ id }) {
  return (
    <main>
      <Head>
        <title>Hello #{id}!</title>
      </Head>

      <h1>{id}</h1>

      <p>{id}</p>

      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  )
}

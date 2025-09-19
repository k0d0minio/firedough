import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Footer from 'components/Footer';
import Contacts from 'components/Contact';
import MenuIntro from 'components/MenuIntro';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';

import { getAllDataWithSlug, getDataFromBucket } from 'lib/api';
import { menuItems } from 'data/restaurantData';
import chooseByType from 'utils/chooseValueByType';

function Menu({ data }) {
  const {
    query: {slug},
  } = useRouter();

  return (
    <>
      <Head>
        <title>Firedough Restaurant Menu</title>
        <meta name="description" content="Firedough Restaurant Menu - Fine dining experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={chooseByType(data, 'navigation')}>
        <MenuIntro info={[chooseByType(data, 'food'), chooseByType(data, 'drink')]} slug={slug} />
        <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'food')]}/>
      </Layout>
      <Footer>
        <VideoIntro url={chooseByType(data, 'sushi')}/>
        <Contacts info={chooseByType(data, 'contact')}/>
      </Footer>
    </>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = (await getDataFromBucket(preview)) || [];
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const dataWithSlug = (await getAllDataWithSlug()) || [];
  
  return {
    paths: dataWithSlug.map((menu) => `/menu/${menu.slug}`),
    fallback: false, // Changed to false since we have all static data
  }
}

export default Menu;
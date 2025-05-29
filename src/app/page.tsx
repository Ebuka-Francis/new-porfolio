import MyProfile from '@/components/my-profile/MyProfile';
import MyArticles from '@/components/arcticles/MyArticles';
import Head from 'next/head';
import { Metadata } from 'next';
import ClientWrapper from '@/components/clientWrapper/ClientWrapper';
// Create this component

export const metadata: Metadata = {
   verification: {
      google: '1FQbpEsqb6qeBvjQAOe6e4CH_Ga9bpLk0rQI4uXl2g4',
   },
};

export default function Home() {
   return (
      <>
         <Head>
            <meta
               name="google-site-verification"
               content="1FQbpEsqb6qeBvjQAOe6e4CH_Ga9bpLk0rQI4uXl2g4"
            />
         </Head>
         <ClientWrapper>
            <MyProfile />
            <MyArticles />
         </ClientWrapper>
      </>
   );
}

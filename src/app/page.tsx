import MyProfile from '@/components/my-profile/MyProfile';
import MyArticles from '@/components/arcticles/MyArticles';
import ClientWrapper from '@/components/clientWrapper/ClientWrapper';

// Metadata is now inherited from layout.tsx
// You can add page-specific overrides here if needed, but the verification tag is global.

export default function Home() {
   return (
      <ClientWrapper>
         <MyProfile />
         <MyArticles />
      </ClientWrapper>
   );
}

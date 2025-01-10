import MyProfile from '@/components/my-profile/MyProfile';
import MyArticles from '@/components/arcticles/MyArticles';

export default function Home() {
  return (
    <div className=" p-5 justify-between flex mx-auto max-w-7xl bg-slate-900 h-full">
      <MyProfile />
      <MyArticles />
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default function ClientLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => {
      NProgress.start();

      const timer = setTimeout(() => {
         NProgress.done();
      }, 500);

      // Prefetch common routes
      router.prefetch('/charts');

      return () => {
         clearTimeout(timer);
         NProgress.done();
      };
   }, [pathname, router]);

   return <>{children}</>;
}

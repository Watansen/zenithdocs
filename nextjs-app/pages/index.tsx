import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import DocumentList from '../components/DocumentList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    }
  }, [session, loading, router]);

  if (loading) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {session && <DocumentList />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
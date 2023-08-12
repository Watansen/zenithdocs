import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocumentList from '../components/DocumentList';
import { getDocuments } from '../utils/api';

const Dashboard = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [session, loading]);

  useEffect(() => {
    if (session) {
      getDocuments(session.user.email).then(setDocuments);
    }
  }, [session]);

  if (loading || !session) {
    return null;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mt-8">Your Documents</h1>
        <DocumentList documents={documents} />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
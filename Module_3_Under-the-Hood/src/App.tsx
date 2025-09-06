import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Narbar';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 h-full flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App

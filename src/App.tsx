import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CVViewer from './components/CVViewer';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setShowCV(false);
  };

  const handleViewCV = () => {
    setShowCV(true);
  };

  const handleBackFromCV = () => {
    setShowCV(false);
  };

  const navItems = [
    { id: 'dashboard', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderPage = () => {
    if (showCV) {
      return <CVViewer onBack={handleBackFromCV} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onViewCV={handleViewCV} />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience onHireMe={() => navigateToPage('contact')} />;
      case 'contact':
        return <Contact />;
      default:
        return <Dashboard onViewCV={handleViewCV} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              {["Dashboard", "Skills", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.toLowerCase()
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
}
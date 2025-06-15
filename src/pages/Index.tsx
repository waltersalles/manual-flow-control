
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import ManualPage from '../components/ManualPage';
import DocumentLibrary from '../components/DocumentLibrary';
import { Button } from '../components/ui/button';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <LoginForm />
            <div className="text-center">
              <p className="text-gray-600 mb-4">Ou visite nossa página de demonstração:</p>
              <Link to="/android">
                <Button variant="outline">Ver Projeto Android</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <DocumentLibrary />;
      case 'operational':
      case 'security':
      case 'hr':
      case 'finance':
        return <ManualPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;

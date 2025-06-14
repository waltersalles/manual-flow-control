
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { 
  Home, 
  BookOpen, 
  Download, 
  MessageSquare, 
  Settings, 
  FileText,
  Users,
  Shield,
  TrendingUp
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const { isAdmin, isAuditor } = useAuth();

  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'documents', label: 'Documentos', icon: Download },
    { id: 'comments', label: 'Comentários', icon: MessageSquare, adminOnly: true }
  ];

  const manualSections = [
    { id: 'operational', label: 'Proc. Operacionais', icon: Settings },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'hr', label: 'Recursos Humanos', icon: Users },
    { id: 'finance', label: 'Financeiro', icon: TrendingUp }
  ];

  const auditSection = [
    { id: 'audit', label: 'Auditoria', icon: FileText }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-4">
        <nav className="space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navegação
            </h3>
            <div className="space-y-1">
              {mainNavItems.map(item => {
                if (item.adminOnly && !isAdmin) return null;
                
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    className="w-full justify-start gap-3"
                    onClick={() => onNavigate(item.id)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Manual Sections */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Seções do Manual
            </h3>
            <div className="space-y-1">
              {manualSections.map(section => (
                <Button
                  key={section.id}
                  variant={currentPage === section.id ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => onNavigate(section.id)}
                >
                  <section.icon className="h-4 w-4" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Audit Section - Only for Auditors and Admins */}
          {(isAuditor || isAdmin) && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Auditoria
              </h3>
              <div className="space-y-1">
                {auditSection.map(section => (
                  <Button
                    key={section.id}
                    variant={currentPage === section.id ? "default" : "ghost"}
                    className="w-full justify-start gap-3"
                    onClick={() => onNavigate(section.id)}
                  >
                    <section.icon className="h-4 w-4" />
                    {section.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Admin Section */}
          {isAdmin && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Administração
              </h3>
              <div className="space-y-1">
                <Button
                  variant={currentPage === 'settings' ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => onNavigate('settings')}
                >
                  <Settings className="h-4 w-4" />
                  Configurações
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Navigation;

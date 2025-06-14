
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import SearchBar from './SearchBar';
import { 
  FileText, 
  Users, 
  MessageSquare, 
  Download, 
  Plus,
  BookOpen,
  Shield,
  Settings,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin, isAuditor } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In production, this would trigger a search across all manual content
    console.log('Searching for:', query);
  };

  const manualSections = [
    {
      id: 1,
      title: 'Procedimentos Operacionais',
      description: 'Processos padrão e fluxos de trabalho',
      icon: Settings,
      pages: 12,
      lastUpdated: '2024-01-15',
      category: 'operational'
    },
    {
      id: 2,
      title: 'Políticas de Segurança',
      description: 'Diretrizes e protocolos de segurança',
      icon: Shield,
      pages: 8,
      lastUpdated: '2024-01-10',
      category: 'security'
    },
    {
      id: 3,
      title: 'Recursos Humanos',
      description: 'Políticas de pessoal e benefícios',
      icon: Users,
      pages: 15,
      lastUpdated: '2024-01-12',
      category: 'hr'
    },
    {
      id: 4,
      title: 'Processos Financeiros',
      description: 'Controles financeiros e relatórios',
      icon: TrendingUp,
      pages: 10,
      lastUpdated: '2024-01-14',
      category: 'finance'
    }
  ];

  const quickStats = [
    {
      label: 'Total de Páginas',
      value: '45',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      label: 'Comentários Pendentes',
      value: isAdmin ? '7' : '—',
      icon: MessageSquare,
      color: 'text-orange-600'
    },
    {
      label: 'Documentos',
      value: '23',
      icon: Download,
      color: 'text-green-600'
    },
    {
      label: 'Últimas Atualizações',
      value: '3',
      icon: BookOpen,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">
          Bem-vindo, {user?.name}!
        </h1>
        <p className="text-blue-100 mb-4">
          Acesse rapidamente as informações do manual operacional
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {user?.role === 'admin' ? 'Administrador' : 
             user?.role === 'auditor' ? 'Auditor' : 'Usuário'}
          </Badge>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Buscar Conteúdo</h2>
        <SearchBar onSearch={handleSearch} />
        {searchQuery && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Buscando por: <span className="font-medium">"{searchQuery}"</span>
            </p>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Manual Sections */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Seções do Manual
          </h2>
          {isAdmin && (
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Seção
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manualSections.map((section) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <section.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{section.pages} páginas</span>
                  <span>Atualizado em {section.lastUpdated}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Visualizar
                  </Button>
                  {isAdmin && (
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <Download className="h-5 w-5" />
            <span className="text-xs">Documentos</span>
          </Button>
          
          <Button variant="outline" className="h-auto flex-col gap-2 p-4">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs">Comentários</span>
          </Button>
          
          {isAuditor && (
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Auditoria</span>
            </Button>
          )}
          
          {isAdmin && (
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <Settings className="h-5 w-5" />
              <span className="text-xs">Configurações</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

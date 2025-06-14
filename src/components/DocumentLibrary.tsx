
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Download, 
  Upload, 
  FileText, 
  File, 
  Plus,
  Search,
  Calendar,
  User,
  AlertCircle
} from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  uploadedBy: string;
  downloadCount: number;
  category: string;
}

interface DocumentSuggestion {
  id: string;
  name: string;
  justification: string;
  suggestedBy: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const DocumentLibrary = () => {
  const { user, isAdmin } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSuggestionDialog, setShowSuggestionDialog] = useState(false);
  const [newSuggestion, setNewSuggestion] = useState({
    name: '',
    justification: '',
    file: null as File | null
  });

  const documents: Document[] = [
    {
      id: '1',
      name: 'Manual de Segurança Completo.pdf',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '2024-01-15',
      uploadedBy: 'Administrador',
      downloadCount: 45,
      category: 'seguranca'
    },
    {
      id: '2',
      name: 'Política de RH 2024.docx',
      type: 'DOCX',
      size: '1.2 MB',
      uploadDate: '2024-01-14',
      uploadedBy: 'Administrador',
      downloadCount: 23,
      category: 'rh'
    },
    {
      id: '3',
      name: 'Formulário de Auditoria.xlsx',
      type: 'XLSX',
      size: '0.8 MB',
      uploadDate: '2024-01-12',
      uploadedBy: 'Auditor Principal',
      downloadCount: 12,
      category: 'auditoria'
    },
    {
      id: '4',
      name: 'Procedimentos Financeiros.pdf',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2024-01-10',
      uploadedBy: 'Administrador',
      downloadCount: 31,
      category: 'financeiro'
    }
  ];

  const documentSuggestions: DocumentSuggestion[] = [
    {
      id: '1',
      name: 'Manual de Integração de Novos Funcionários',
      justification: 'Seria útil ter um documento padronizado para integração de novos colaboradores.',
      suggestedBy: 'João Silva',
      date: '2024-01-16',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Checklist de Auditoria Interna',
      justification: 'Um checklist detalhado facilitaria as auditorias regulares.',
      suggestedBy: 'Maria Santos',
      date: '2024-01-15',
      status: 'approved'
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'rh', label: 'Recursos Humanos' },
    { value: 'auditoria', label: 'Auditoria' },
    { value: 'financeiro', label: 'Financeiro' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (doc: Document) => {
    console.log('Downloading:', doc.name);
    // In production, this would handle the actual file download
  };

  const handleSuggestionSubmit = () => {
    if (newSuggestion.name.trim() && newSuggestion.justification.trim()) {
      console.log('Submitting suggestion:', newSuggestion);
      setNewSuggestion({ name: '', justification: '', file: null });
      setShowSuggestionDialog(false);
      // In production, save to database
    }
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-600" />;
      case 'docx':
      case 'doc':
        return <FileText className="h-6 w-6 text-blue-600" />;
      case 'xlsx':
      case 'xls':
        return <FileText className="h-6 w-6 text-green-600" />;
      default:
        return <File className="h-6 w-6 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Biblioteca de Documentos
          </h1>
          <p className="text-gray-600">
            Acesse e gerencie todos os documentos do manual
          </p>
        </div>
        
        <div className="flex gap-2">
          <Dialog open={showSuggestionDialog} onOpenChange={setShowSuggestionDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Sugerir Documento
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sugerir Novo Documento</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nome do Documento</label>
                  <Input
                    value={newSuggestion.name}
                    onChange={(e) => setNewSuggestion({...newSuggestion, name: e.target.value})}
                    placeholder="Ex: Manual de Procedimentos de Emergência"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Justificativa</label>
                  <Textarea
                    value={newSuggestion.justification}
                    onChange={(e) => setNewSuggestion({...newSuggestion, justification: e.target.value})}
                    placeholder="Explique por que este documento seria útil..."
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Arquivo (opcional)</label>
                  <Input
                    type="file"
                    onChange={(e) => setNewSuggestion({...newSuggestion, file: e.target.files?.[0] || null})}
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setShowSuggestionDialog(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSuggestionSubmit}>
                    Enviar Sugestão
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {isAdmin && (
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              Fazer Upload
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar documentos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Suggestions for Admins */}
      {isAdmin && documentSuggestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Sugestões de Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documentSuggestions.filter(s => s.status === 'pending').map(suggestion => (
                <div key={suggestion.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{suggestion.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{suggestion.justification}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {suggestion.suggestedBy}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {suggestion.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        Aprovar
                      </Button>
                      <Button size="sm" variant="outline">
                        Rejeitar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map(document => (
          <Card key={document.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getFileIcon(document.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {document.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {document.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{document.size}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {document.uploadedBy}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      {document.uploadDate}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Download className="h-3 w-3" />
                      {document.downloadCount} downloads
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  onClick={() => handleDownload(document)}
                  className="w-full gap-2"
                  size="sm"
                >
                  <Download className="h-4 w-4" />
                  Baixar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum documento encontrado
          </h3>
          <p className="text-gray-600">
            {searchQuery 
              ? 'Tente ajustar sua busca ou filtros'
              : 'Nenhum documento disponível nesta categoria'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default DocumentLibrary;

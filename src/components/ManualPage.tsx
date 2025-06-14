import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Edit, 
  Save, 
  X, 
  MessageSquare, 
  FileText, 
  Clock,
  User,
  AlertCircle,
  Check
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface AuditNote {
  id: string;
  auditor: string;
  content: string;
  date: string;
}

const ManualPage = () => {
  const { user, isAdmin, isAuditor } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(`
    <h2>Procedimentos de Segurança</h2>
    <p>Este documento estabelece os procedimentos essenciais de segurança que devem ser seguidos por todos os colaboradores.</p>
    
    <h3>1. Equipamentos de Proteção Individual (EPI)</h3>
    <p>Todos os colaboradores devem utilizar os EPIs apropriados conforme a atividade realizada:</p>
    <ul>
      <li>Capacete de segurança em áreas de risco</li>
      <li>Óculos de proteção quando necessário</li>
      <li>Luvas adequadas para cada tipo de material</li>
      <li>Calçados de segurança</li>
    </ul>
    
    <h3>2. Procedimentos de Emergência</h3>
    <p>Em caso de emergência, siga os seguintes passos:</p>
    <ol>
      <li>Mantenha a calma</li>
      <li>Avalie a situação</li>
      <li>Acione o alarme de emergência</li>
      <li>Siga para a saída de emergência mais próxima</li>
      <li>Aguarde no ponto de encontro designado</li>
    </ol>
  `);

  const [newComment, setNewComment] = useState('');
  const [newAuditNote, setNewAuditNote] = useState('');
  
  const [comments] = useState<Comment[]>([
    {
      id: '1',
      author: 'João Silva',
      content: 'Seria interessante adicionar informações sobre os novos EPIs que chegaram na empresa.',
      date: '2024-01-15',
      status: 'approved'
    },
    {
      id: '2',
      author: 'Maria Santos',
      content: 'Os procedimentos de emergência estão claros, mas podemos incluir um fluxograma visual.',
      date: '2024-01-14',
      status: 'pending'
    }
  ]);

  const [auditNotes] = useState<AuditNote[]>([
    {
      id: '1',
      auditor: 'Auditor Principal',
      content: 'Verificado conformidade com norma ISO 45001. Documento atualizado e em conformidade.',
      date: '2024-01-10'
    }
  ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In production, save to database
    console.log('Saving content:', editableContent);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset content to original
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log('Adding comment:', newComment);
      setNewComment('');
      // In production, save to database with pending status
    }
  };

  const handleAddAuditNote = () => {
    if (newAuditNote.trim()) {
      console.log('Adding audit note:', newAuditNote);
      setNewAuditNote('');
      // In production, save to database
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Procedimentos de Segurança
          </h1>
          <p className="text-gray-600 mt-1">
            Última atualização: 15 de Janeiro, 2024 por Administrador
          </p>
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar
                </Button>
                <Button variant="outline" onClick={handleCancel} className="gap-2">
                  <X className="h-4 w-4" />
                  Cancelar
                </Button>
              </>
            ) : (
              <Button onClick={handleEdit} className="gap-2">
                <Edit className="h-4 w-4" />
                Editar
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <Card>
        <CardContent className="p-6">
          {isEditing ? (
            <div className="space-y-4">
              <Textarea
                value={editableContent}
                onChange={(e) => setEditableContent(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
              />
              <p className="text-xs text-gray-500">
                Dica: Use HTML básico para formatação (h2, h3, p, ul, ol, li)
              </p>
            </div>
          ) : (
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: editableContent }}
            />
          )}
        </CardContent>
      </Card>

      {/* Audit Notes Section - Visible only to Auditors and Admins */}
      {(isAuditor || isAdmin) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Notas de Auditoria
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {auditNotes.map((note) => (
              <div key={note.id} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-orange-600" />
                    <span className="font-medium text-orange-800">{note.auditor}</span>
                  </div>
                  <span className="text-sm text-orange-600">{note.date}</span>
                </div>
                <p className="text-orange-700">{note.content}</p>
              </div>
            ))}

            {isAuditor && (
              <div className="border-t pt-4">
                <Textarea
                  placeholder="Adicionar nova nota de auditoria..."
                  value={newAuditNote}
                  onChange={(e) => setNewAuditNote(e.target.value)}
                  className="mb-3"
                />
                <Button onClick={handleAddAuditNote} disabled={!newAuditNote.trim()}>
                  Adicionar Nota
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Comments Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comentários e Sugestões
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Existing Comments */}
          {comments.map((comment) => (
            <div key={comment.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{comment.author}</span>
                  <Badge 
                    variant={comment.status === 'approved' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {comment.status === 'approved' ? (
                      <><Check className="h-3 w-3 mr-1" />Aprovado</>
                    ) : (
                      <><Clock className="h-3 w-3 mr-1" />Pendente</>
                    )}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              
              {/* Admin Actions for Pending Comments */}
              {isAdmin && comment.status === 'pending' && (
                <div className="flex gap-2 mt-3 pt-3 border-t">
                  <Button size="sm" variant="outline" className="gap-1">
                    <Check className="h-3 w-3" />
                    Aprovar
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1 text-red-600">
                    <X className="h-3 w-3" />
                    Rejeitar
                  </Button>
                </div>
              )}
            </div>
          ))}

          {/* Add New Comment */}
          <div className="border-t pt-4">
            <Textarea
              placeholder="Deixe seu comentário, dúvida ou sugestão..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mb-3"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Seu comentário será enviado para análise antes de ser publicado.
              </p>
              <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                Enviar Comentário
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Navigation */}
      <div className="flex justify-between items-center pt-6 border-t">
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Página Anterior
        </Button>
        <span className="text-sm text-gray-500">
          Página 1 de 12 - Procedimentos Operacionais
        </span>
        <Button variant="outline" className="gap-2">
          Próxima Página
          <FileText className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ManualPage;

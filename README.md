# Plataforma de Manual Operacional Interativo (manual-flow-control)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este repositório contém o código de uma plataforma web completa projetada para substituir manuais operacionais estáticos por um sistema vivo, interativo e de fácil gerenciamento. A aplicação centraliza informações críticas, otimiza a colaboração entre equipes e simplifica processos de auditoria.

Este é um dos principais projetos do meu portfólio, demonstrando a capacidade de construir uma aplicação full-stack com regras de negócio complexas.

## 🎯 Objetivo do Projeto

O objetivo é fornecer uma solução onde manuais operacionais possam ser facilmente criados, editados e consultados, permitindo a interação dos usuários através de comentários e a avaliação de auditores, tudo em um ambiente seguro e com controle de acesso.

## ✨ Principais Funcionalidades

* **Painel de Controle (Dashboard):** Página inicial com acesso rápido às seções do manual e uma barra de busca global.
* **Sistema de Autenticação com 3 Níveis de Acesso:**
    * **Usuário Padrão:** Visualiza o manual, faz comentários e sugere documentos.
    * **Administrador:** Controle total sobre conteúdo, usuários, comentários e documentos.
    * **Auditor:** Perfil especializado para adicionar notas de auditoria confidenciais.
* **Edição de Conteúdo "In-line":** Administradores podem editar o texto diretamente na página, sem a necessidade de um painel de administração complexo, agilizando as atualizações.
* **Sistema de Comentários com Moderação:** Usuários podem comentar nas seções, mas os comentários só se tornam públicos após a aprovação de um administrador.
* **Módulo de Auditoria:** Seção dedicada em cada página, visível apenas para Auditores e Administradores, para anotações e avaliações.
* **Gerenciamento de Documentos:** Funcionalidades para upload, download e sugestão de novos documentos de apoio.

## 🛠️ Tecnologias Utilizadas

* **Frontend:**
    * **React:** Biblioteca para construção da interface de usuário reativa e componentizada.
    * **Tailwind CSS:** Framework CSS para estilização rápida, moderna e responsiva.
* **Backend & Banco de Dados (BaaS):**
    * **Supabase:** Utilizado como a solução de backend completa, fornecendo:
        * **Banco de Dados PostgreSQL:** Para armazenar todo o conteúdo, usuários, comentários e notas.
        * **Autenticação:** Gerenciamento de login, senhas e perfis de usuário.
        * **Storage:** Para o upload e armazenamento dos documentos.
        * **Row Level Security (RLS):** Para implementar as regras de permissão complexas entre os diferentes tipos de usuário.

## 🚀 Como Executar o Projeto (Instruções Futuras)

*(Esta seção é um placeholder para quando você tiver o projeto funcional)*

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/waltersalles/manual-flow-control.git](https://github.com/waltersalles/manual-flow-control.git)
    ```
2.  **Instale as dependências:**
    ```bash
    cd manual-flow-control
    npm install
    ```
3.  **Configure as variáveis de ambiente:**
    * Crie um arquivo `.env.local` na raiz do projeto.
    * Adicione suas chaves do Supabase (URL e Anon Key).
    ```env
    REACT_APP_SUPABASE_URL=SUA_URL_AQUI
    REACT_APP_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_AQUI
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

---

Desenvolvido por Walter Salles.


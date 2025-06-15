
import React from 'react';
import { Play } from 'lucide-react';

const AndroidPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 shadow-lg">
        <nav className="max-w-4xl mx-auto px-4 py-4">
          <ul className="flex space-x-8 text-white">
            <li><a href="#" className="hover:text-green-200 transition-colors font-medium">Home</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors font-medium">Notícias</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors font-medium">Curiosidades</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors font-medium">Fale Conosco</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8 text-center">
          História do Mascote do Android
        </h1>

        {/* Content Section */}
        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Provavelmente você sabe que o sistema operacional <strong>Android</strong>, mantido pelo Google é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas talvez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.
          </p>

          <h2 className="text-2xl font-bold text-green-600 mb-4 mt-8">A primeira versão</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado <a href="#" className="text-green-600 hover:text-green-700 underline">Dan Morrill</a>. Ele conta que abriu o <a href="#" className="text-green-600 hover:text-green-700 underline">Inkscape</a> (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.
          </p>

          {/* Image with caption */}
          <figure className="my-8">
            <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
              <div className="w-full max-w-md h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Imagem dos primeiros mascotes Android</span>
              </div>
            </div>
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              Essa foi a primeira versão do mascote do Android
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-6">
            Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os <strong>Dandroids</strong>.
          </p>

          {/* Highlighted section */}
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg my-8 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">Surge um novo mascote</h3>
            <p className="text-gray-700 leading-relaxed">
              A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora russa <strong>Irina Blok</strong>, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o <strong>Bugdroid</strong>, o novo mascote do Android.
          </p>

          {/* Another image */}
          <figure className="my-8">
            <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
              <div className="w-full max-w-md h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Mascote atual do Android - Bugdroid</span>
              </div>
            </div>
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              O mascote atual do Android, carinhosamente chamado de Bugdroid
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-8">
            A principal inspiração para os traços do novo <strong>Bugdroid</strong> veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta. Conta a lenda que a artista estava criando em sua mesa no escritório do <strong>Google</strong> e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.
          </p>

          {/* Video section */}
          <div className="my-12">
            <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center">
              <div className="w-full max-w-2xl aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-white opacity-80" />
              </div>
              <p className="text-white text-center">
                Vídeo sobre a história do mascote do Android
              </p>
            </div>
          </div>

          {/* Extra content box */}
          <aside className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-green-700 mb-4">Quer aprender mais?</h3>
            <p className="text-gray-700 mb-4">
              Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.
            </p>
            <ul className="space-y-2">
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">1.5 - Cupcake</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">1.6 - Donut</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">3.0 - Eclair</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">2.2 - Froyo</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">2.3 - Gingerbread</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">3.0 - Honeycomb</a>
              </li>
              <li className="flex">
                <span className="text-green-600 mr-2">✓</span>
                <a href="#" className="text-green-600 hover:text-green-700 underline">4.0 - Ice Cream Sandwich</a>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Infelizmente, o <strong>Android Q</strong> não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.
            </p>
            <p className="text-gray-700 mt-4">
              Acesse aqui o site <a href="#" className="text-green-600 hover:text-green-700 underline font-semibold">Android History</a> para conhecer a sequência das versões "adocicadas" e o que cada uma trouxe para o sistema Android.
            </p>
          </aside>

          <p className="text-gray-700 leading-relaxed mb-8">
            Então é isso! Espero que você tenha gostado do nosso artigo sobre essa curiosidade do sistema Android e seu simpático mascote.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>Site criado como exercício do Curso em Vídeo</p>
        </div>
      </footer>
    </div>
  );
};

export default AndroidPage;

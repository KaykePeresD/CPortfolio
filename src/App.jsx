'use client'
import perfil from './assets/perfil.png'
import symbol from './assets/symbol.svg'
import github from './assets/github.svg'
import html from './assets/html.svg'
import css from './assets/CSS.svg'
import js from './assets/JS.svg'
import rs from './assets/RS.svg'
import nd from './assets/ND.svg'
import down from './assets/down.svg'
import image1 from './assets/image 2.png'
import image2 from './assets/image 3.png'
import image3 from './assets/image 4.png'
import image4 from './assets/image 5.png'
import image5 from './assets/image 6.png'
import image6 from './assets/image 7.png'
import { Computer, Server, Infinity, ArrowUpRight, Mail, Instagram } from 'lucide-react'


export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="relative mb-6 mt-14">
        <img
          src={perfil}
          alt="Avatar"
          className="rounded-full w-24 h-24 mx-auto border-4 border-red-700"
        />
        <img
          src={symbol}
          alt="Ícone"
          className="absolute top-[60%] right-0 w-6 h-6 transform translate-x-1/4 translate-y-1/4"
        />
      </div>

      {/* Apresentação */}
      <h1 className="text-2xl font-extralight mb-2">Hello World! Meu nome é <span className="text-red-400">Martina Santos</span> e sou</h1>
      <h2 className="text-5xl font-bold">Desenvolvedora Fullstack</h2>

      {/* Descrição */}
      <p className="mt-4 flex items-center justify-center whitespace-nowrap text-gray-400 max-w-xl mx-auto">
        Transformo necessidades em aplicações reais, evolventes e funcionais.
        Desenvolvo sistemas através da<br /> minha paixão pela tecnologia,
        contribuindo com soluções inovadoras e eficazes para desafios complexos.
      </p>

      {/* Ícones de tecnologias */}
      <div className="mt-11 flex justify-center space-x-10">
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">

          <img src={github} alt="GitHub" className="w-8 h-8" />
          Github
        </a>
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">
          <img src={html} alt="HTML" className="w-8 h-8" />
          HTML
        </a>
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">
          <img src={css} alt="CSS" className="w-8 h-8" />
          CSS
        </a>
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">
          <img src={js} alt="JavaScript" className="w-8 h-8" />
          JavaScript
        </a>
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">
          <img src={rs} alt="React" className="w-8 h-8" />
          React
        </a>
        <a href="#" className="bg-gray-800 flex gap-3 items-center rounded-full p-4">
          <img src={nd} alt="Node.js" className="w-8 h-8" />
          Node.Js
        </a>
      </div>

      <div className='flex items-center cursor-pointer justify-center p-24'>
        <img src={down} />
      </div>

      <h3 className='text-red-400 mt-14 mb-4 text-lg'>Meu Trabalho</h3>
      <h1 className='text-3xl font-bold'>Veja os projetos em destaque</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mb-20 text-white mt-16">
        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image1} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Travelgram</h2>
          <p class="mt-2">Rede social onde as pessoas mostram os<br /> registros de suas viagens pelo mundo</p>
        </div>

        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image2} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Tech News</h2>
          <p class="mt-2">Homepage de um portal de notícias sobre a<br /> área de tecnologia</p>
        </div>

        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image3} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Página de Receita</h2>
          <p class="mt-2">Página com o passo a passo de uma receita<br /> para cupcakes</p>
        </div>

        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image4} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Zingen</h2>
          <p class="mt-2">Landing Page completa e responsiva de um<br /> aplicativo de Karaokê</p>
        </div>

        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image5} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Refund</h2>
          <p class="mt-2">Um sistema para pedido e acompanhamento<br /> de reembolso</p>
        </div>

        <div class="bg-gray-700 rounded-lg p-8 border border-transparent hover:border-zinc-400 transition cursor-pointer min-h-[350px] max-w-md">
          <img src={image6} className="w-full rounded-md" />
          <h2 class="mt-4 text-xl font-semibold">Página de Turismo</h2>
          <p class="mt-2">Página com as principais informações para<br /> quem quer viajar para Busan</p>
        </div>
      </div>


      <div className='w-full bg-gray-950'>
        <h3 className='text-red-400 mt-14 mb-4 text-lg flex items-center justify-center'>Meu Serviços</h3>
        <h1 className='text-3xl font-bold flex items-center justify-center'>Como posso ajudar o seu negócio</h1>

        <div class="flex flex-wrap mt-5 justify-center  space-x-0 lg:space-x-24 p-20">
  <div class="bg-gray-950 border border-gray-900 text-white p-8 rounded-lg w-full sm:w-80 lg:w-96 flex flex-col items-start space-y-4 hover:bg-gray-800 transition ease-in-out duration-300 hover:shadow-lg mb-6 lg:mb-0">
    <div class="text-purple-400">
      <Computer  className='h-12 w-12 '/>
    </div>
    <div>
      <h3 class="text-xl font-semibold">Websites e Aplicativos</h3>
      <p class="text-gray-400 whitespace-nowrap">Desenvolvimento de interfaces</p>
    </div>
  </div>

  <div class="bg-gray-950 border border-gray-900 text-white p-8 rounded-lg w-full sm:w-80 lg:w-96 flex flex-col items-start space-y-4 hover:bg-gray-800 transition ease-in-out duration-300 hover:shadow-lg mb-6 lg:mb-0">
    <div class="text-yellow-400">
      <Server className='h-12 w-12 ' />
    </div>
    <div>
      <h3 class="text-xl font-semibold">API e banco de dados</h3>
      <p class="text-gray-400 whitespace-nowrap">Criação de serviços do sistema</p>
    </div>
  </div>

  <div class="bg-gray-950 border border-gray-900 text-white p-8 rounded-lg w-full sm:w-80 lg:w-96 flex flex-col items-start space-y-4 hover:bg-gray-800 transition ease-in-out duration-300 hover:shadow-lg mb-6 lg:mb-0">
    <div class="text-green-400">
      <Infinity className='h-12 w-12  '/>
    </div>
    <div>
      <h3 class="text-xl font-semibold">DevOps</h3>
      <p class="text-gray-400 whitespace-nowrap">Gestão e infraestrutura da aplicação</p>
    </div>
  </div>
</div>
      </div>

      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
  <div class="text-center mb-8">
    <h2 class="text-purple-400 text-lg">Contato</h2>
    <h1 class="text-white text-2xl font-bold mt-2">Gostou do meu trabalho?</h1>
    <p class="text-gray-400 mt-1">Entre em contato ou acompanhe as minhas redes sociais!</p>
  </div>

  <div class="space-y-4">
    <a href="#" class="flex items-center justify-between w-64 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.5 1.12 2.5 2.5zM.47 7h4.94V23H.47V7zm7.03 0h4.73v2.29h.07c.66-1.25 2.28-2.58 4.68-2.58 5 0 5.91 3.3 5.91 7.6V23h-4.94v-6.88c0-1.64-.03-3.75-2.29-3.75s-2.64 1.79-2.64 3.63V23H7.5V7z"/>
        </svg>
        <span class="text-gray-400">Linkedin</span>
      </div>
      <ArrowUpRight className='text-gray-400' />
    </a>

    <a href="#" class="flex items-center justify-between w-64 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
       <Instagram className='text-gray-400'/>
        <span class="text-gray-400">Instagram</span>
      </div>
      <ArrowUpRight className='text-gray-400'/>
    </a>

    <a href="#" class="flex items-center justify-between w-64 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.87.57.1.78-.25.78-.55 0-.27-.01-1.17-.01-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.14.08 1.75 1.17 1.75 1.17 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.46-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18a10.83 10.83 0 012.86-.38c.97 0 1.95.13 2.86.38 2.17-1.49 3.13-1.18 3.13-1.18.63 1.59.24 2.76.12 3.05.72.81 1.17 1.84 1.17 3.1 0 4.42-2.71 5.39-5.29 5.67.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.79.55C20.71 21.36 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5z"/>
        </svg>
        <span class="text-gray-400">GitHub</span>
      </div>
      <ArrowUpRight className='text-gray-400'/>
    </a>

    <a href="#" class="flex items-center justify-between w-64 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <Mail className='text-gray-400'/>
        <span class="text-gray-400">E-mail</span>
      </div>
      <ArrowUpRight className='text-gray-400'/>
    </a>
  </div>
</div>


    </div>
  )
}
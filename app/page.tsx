import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Users, Star } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
    // Dados da estrutura fornecida
    const data = {
        navigation: {
            home: "Home",
            about: "Sobre",
            costumes: "Trajes",
            gallery: "Fotos & Vídeos",
            blog: "Blog",
            contact: "Contato"
        },
        home: {
            hero: {
                welcome: "Willkommen",
                title: "Grupo Folclórico Alemão Heimatland",
                description: "Preservando e divulgando a cultura alemã através da dança folclórica desde 1987 em Cerro Largo, Rio Grande do Sul.",
                aboutButton: "Conheça Nossa História",
                galleryButton: "Ver Galeria"
            },
            history: {
                title: "Nossa História",
                founded: "Fundado em 1987 na cidade de Cerro Largo, Rio Grande do Sul, o Grupo Folclórico Alemão Heimatland nasceu do desejo de preservar e divulgar as tradições culturais alemãs através da dança folclórica.",
                experience: "Ao longo de mais de 37 anos, o grupo tem se dedicado à manutenção das tradições alemãs, realizando apresentações em festivais, eventos culturais e celebrações, sempre com o compromisso de manter viva a cultura de nossos antepassados.",
                stats: {
                    years: "Anos de História",
                    members: "Integrantes",
                    performances: "Apresentações"
                },
                learnMore: "Conheça Mais"
            },
            events: {
                title: "Próximos Eventos",
                description: "Acompanhe nossas próximas apresentações e eventos culturais",
                viewAll: "Ver Todos os Eventos"
            },
            news: {
                title: "Últimas Notícias",
                description: "Fique por dentro das novidades e atividades do nosso grupo",
                readMore: "Ler mais",
                viewAll: "Ver Todas as Notícias"
            }
        },
        events: {
            oktoberfest: "Oktoberfest de Cerro Largo",
            winterFestival: "Festival de Inverno",
            culturalPresentation: "Apresentação Cultural",
            eventCenter: "Centro de Eventos",
            centralSquare: "Praça Central",
            municipalTheater: "Teatro Municipal"
        },
        news: {
            childrenCostume: {
                title: "Novo traje infantil é apresentado pelo grupo",
                excerpt: "O Heimatland apresentou oficialmente o novo traje infantil, desenvolvido com tecidos tradicionais alemães...",
                image: "/news/traje-infantil.svg"
            },
            internationalFestival: {
                title: "Grupo participa do Festival Internacional de Folclore",
                excerpt: "Heimatland representou o Rio Grande do Sul no Festival Internacional de Folclore realizado em São Paulo...",
                image: "/news/festival-internacional.svg"
            },
            danceWorkshop: {
                title: "Oficina de dança alemã para iniciantes",
                excerpt: "Nova turma de iniciantes começará em abril. As inscrições já estão abertas para todas as idades...",
                image: "/news/oficina-danca.svg"
            }
        }
    }

    const upcomingEvents = [
        {
            id: 1,
            title: data.events.oktoberfest,
            date: "15 de Outubro, 2024",
            time: "19:00",
            location: data.events.eventCenter
        },
        {
            id: 2,
            title: data.events.winterFestival,
            date: "20 de Julho, 2024",
            time: "18:30",
            location: data.events.centralSquare
        },
        {
            id: 3,
            title: data.events.culturalPresentation,
            date: "05 de Setembro, 2024",
            time: "20:00",
            location: data.events.municipalTheater
        }
    ]

    const latestNews = [
        {
            id: 1,
            title: data.news.childrenCostume.title,
            excerpt: data.news.childrenCostume.excerpt,
            date: "12 de Agosto, 2024",
            slug: "novo-traje-infantil",
            image: "/news/traje-infantil.jpg"
        },
        {
            id: 2,
            title: data.news.internationalFestival.title,
            excerpt: data.news.internationalFestival.excerpt,
            date: "08 de Agosto, 2024",
            slug: "festival-internacional",
            image: "/news/festival-internacional.jpg"
        },
        {
            id: 3,
            title: data.news.danceWorkshop.title,
            excerpt: data.news.danceWorkshop.excerpt,
            date: "05 de Agosto, 2024",
            slug: "oficina-danca",
            image: "/news/oficina-danca.jpg"
        }
    ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/grupo-apresentacao.JPG"
            alt="Grupo Heimatland em apresentação"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* Logo with Animation */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/logo/heimatland-escudo.jpg"
              alt="Escudo do Grupo Heimatland"
              width={120}
              height={120}
              className="mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-300" 
              style={{ fontFamily: 'UnifrakturCook, serif', color: '#FFD500', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {data.home.hero.welcome}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in delay-500" 
              style={{ color: '#FFD500', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            {data.home.hero.title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-700 leading-relaxed">
            {data.home.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
            <Link href="/sobre" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.home.hero.aboutButton}
            </Link>
            <Link href="/galeria" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.home.hero.galleryButton}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-20 bg-gray-50 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gothic-title" 
                style={{ fontFamily: 'UnifrakturCook, serif', color: '#D41B1B' }}>
              {data.home.history.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.home.history.founded}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.home.history.experience}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">37</div>
                  <div className="text-sm text-gray-600">{data.home.history.stats.years}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">{data.home.history.stats.members}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">{data.home.history.stats.performances}</div>
                </div>
              </div>

              <Link href="/sobre" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mt-6">
                {data.home.history.learnMore}
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/about/grupo-historico.svg"
                alt="Foto histórica do Grupo Heimatland"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">1987</div>
                <div className="text-sm">Fundação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gothic-title" 
                style={{ fontFamily: 'UnifrakturCook, serif', color: '#D41B1B' }}>
              {data.home.events.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.home.events.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg border-l-4 border-red-600 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eventos" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              {data.home.events.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Últimas Notícias Section */}
      <section className="py-20 bg-gray-50 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gothic-title" 
                style={{ fontFamily: 'UnifrakturCook, serif', color: '#D41B1B' }}>
              {data.home.news.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.home.news.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <Link href={`/blog/${news.id}`} 
                        className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
                    {data.home.news.readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              {data.home.news.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Package, Target, Users, Award, MapPin, Star, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface AboutPageProps {
  onBackToHome: () => void;
}

export default function AboutPage({ onBackToHome }: AboutPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const team = [
    {
      name: "Ahmed El Mansouri",
      role: "Fondateur & CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      description: "15 ans d'expérience en logistique et innovation digitale"
    },
    {
      name: "Fatima Zahra", 
      role: "Directrice Technique",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      description: "Expertise en développement mobile et expérience utilisateur"
    },
    {
      name: "Mehdi Benjelloun",
      role: "Responsable Logistique",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Spécialiste en optimisation des chaînes d'approvisionnement"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Colis Livrés" },
    { number: "98%", label: "Taux de Satisfaction" },
    { number: "150+", label: "Villes Desservies" },
    { number: "24/7", label: "Support Client" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous utilisons la technologie pour simplifier et améliorer chaque étape de la livraison.",
      icon: Target
    },
    {
      title: "Fiabilité",
      description: "Votre confiance est notre priorité, chaque colis est traité avec le plus grand soin.",
      icon: Award
    },
    {
      title: "Proximité",
      description: "Un service client disponible et une présence dans plus de 150 villes marocaines.",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation identique à l'accueil */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#246475] to-[#1a4a5a] z-50 border-b border-[#1a4a5a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo orange directement sur fond bleu */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Logo Taswiligo" 
                className="w-15 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-white">
                Taswiligo
              </span>
            </div>

            {/* Desktop Menu avec texte blanc */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={onBackToHome} className="text-white/90 hover:text-white transition-colors font-medium">
                Accueil
              </button>
              <button className="text-white font-semibold relative group">
                À propos
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
              </button>
              <button onClick={onBackToHome} className="text-white/90 hover:text-white transition-colors font-medium">
                Services
              </button>
              <button onClick={onBackToHome} className="text-white/90 hover:text-white transition-colors font-medium">
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={onBackToHome}
                className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hidden sm:block"
              >
                Suivre un colis
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu avec fond coloré */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => { onBackToHome(); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => { onBackToHome(); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  Services
                </button>
                <button 
                  className="text-white text-left py-2 font-medium"
                >
                  À propos
                </button>
                <button 
                  onClick={() => { onBackToHome(); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  Contact
                </button>
                <button 
                  onClick={() => { onBackToHome(); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Suivre un colis
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero avec Image Fond */}
      <section className="relative pt-28 pb-20 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Notre <span className="text-[#f44d0b]">Histoire</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Redéfinir l'expérience de livraison au Maroc avec passion, innovation 
            et un engagement sans faille envers l'excellence.
          </p>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Notre <span className="text-[#246475]">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez Taswiligo, nous croyons que chaque livraison mérite d'être 
                une expérience exceptionnelle. Nous combinons technologie de pointe 
                et expertise humaine pour offrir un service incomparable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre objectif : rendre le suivi de colis aussi simple et transparent 
                que possible, en mettant la technologie au service de votre tranquillité d'esprit.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Équipe Taswiligo"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-[#f44d0b] rounded-2xl rotate-12 shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#246475]">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Les principes fondamentaux qui guident chaque décision et chaque action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#246475] to-[#1a4a5a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Rencontrez notre <span className="text-[#246475]">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Des passionnés dévoués à révolutionner la logistique au Maroc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover mx-auto shadow-xl border-4 border-white group-hover:border-[#f44d0b] transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 bg-[#f44d0b] rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 text-white fill-current" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#f44d0b] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Chiffres */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#246475] to-[#1a4a5a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm lg:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Prêt à vivre l'expérience Taswiligo ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et découvrez 
              une nouvelle façon de gérer vos livraisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBackToHome}
                className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <span>Commencer maintenant</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button 
                onClick={onBackToHome}
                className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:border-[#246475] hover:text-[#246475] transition-all duration-300 text-sm lg:text-base"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Élégant */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#f44d0b] p-2 rounded-xl">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Taswiligo</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Votre partenaire de confiance pour une expérience de livraison 
                moderne, transparente et fiable au Maroc.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={onBackToHome} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={onBackToHome} className="hover:text-white transition-colors">Services</button></li>
                <li><button className="text-[#f44d0b]">À propos</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">contact@taswiligo.ma</li>
                <li className="hover:text-white transition-colors cursor-pointer">+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-gray-500">
            <p>© 2024 Taswiligo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
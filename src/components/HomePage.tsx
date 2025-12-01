import { useState } from 'react';
import { Package, MapPin, Clock, Shield, Truck, ArrowRight, Sparkles, Menu, X, Smartphone, Zap, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onTrack: (code: string) => void;
  onNavigate: (page: 'services' | 'about' | 'contact') => void;
}

function HomePage({ onTrack, onNavigate }: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleTrackPackage = () => {
    onTrack('');
  };

  const features = [
    {
      icon: MapPin,
      title: "Suivi en Temps Réel",
      description: "Localisation GPS précise de votre colis à chaque instant",
      color: "#f44d0b"
    },
    {
      icon: Clock,
      title: "Notifications Instantanées", 
      description: "Alertes push pour chaque étape de la livraison",
      color: "#246475"
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Vos colis assurés et suivis de manière sécurisée",
      color: "#f44d0b"
    },
    {
      icon: Truck,
      title: "Livraison Rapide",
      description: "Service express dans les plus brefs délais",
      color: "#246475"
    }
  ];

  const appFeatures = [
    "Interface intuitive et facile à utiliser",
    "Notifications en temps réel",
    "Historique complet des livraisons",
    "Support client 24/7",
    "Multi-langues disponible"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation avec fond bleu et logo orange direct */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#246475] to-[#1a4a5a] z-50 border-b border-[#1a4a5a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo orange directement sur fond bleu */}
            <div className="flex items-center space-x-3">
              {/* Logo orange sans fond blanc */}
              <img 
                src="/logo.png" 
                alt="Logo Taswiligo" 
                className="w-15 h-12 object-contain" // Logo orange qui ressort directement
              />
              <span className="text-2xl font-bold text-white">
                Taswiligo
              </span>
            </div>

            {/* Desktop Menu avec texte blanc */}
            <div className="hidden md:flex items-center space-x-8">
             
              <button onClick={() => onNavigate('about')} className="text-white/90 hover:text-white transition-colors font-medium">
                À propos
              </button>
               <button onClick={() => onNavigate('services')} className="text-white/90 hover:text-white transition-colors font-medium">
                Services
              </button>
              <button onClick={() => onNavigate('contact')} className="text-white/90 hover:text-white transition-colors font-medium">
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={handleTrackPackage}
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
                  onClick={() => { onNavigate('services'); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  Services
                </button>
                <button 
                  onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  À propos
                </button>
                <button 
                  onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
                >
                  Contact
                </button>
                <button 
                  onClick={() => { handleTrackPackage(); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Suivre un colis
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Design Moderne */}
      <section className="pt-28 pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
                <Sparkles className="w-4 h-4 text-[#f44d0b]" />
                <span className="text-sm font-medium text-gray-700">L'application de livraison intelligente</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Suivi de colis
                  <span className="block text-transparent bg-gradient-to-r from-[#246475] to-[#f44d0b] bg-clip-text">
                    révolutionnaire
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Découvrez une nouvelle façon de suivre vos livraisons. Simple, rapide et totalement transparent.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleTrackPackage}
                  className="group bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('services')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-[#246475] hover:text-[#246475] transition-all duration-300"
                >
                  Explorer les services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "50K+", label: "Livraisons" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "24h", label: "Délai moyen" }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Showcase */}
            <div className="relative">
              <div className="relative mx-auto lg:mx-0 max-w-sm">
                {/* Main Phone */}
                <div className="relative z-10 bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-4 h-96 overflow-hidden">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="bg-[#f44d0b] p-1 rounded-lg">
                          <Package className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-bold text-sm">Taswiligo</span>
                      </div>
                      <div className="text-white text-xs">14:30</div>
                    </div>
                    
                    {/* App Content */}
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#f44d0b] to-[#e3440a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Colis en route !</h3>
                      <p className="text-gray-300 text-sm mb-4">Livraison prévue dans 2h</p>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                        <div className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] h-2 rounded-full w-3/4"></div>
                      </div>
                      
                      <div className="space-y-3 text-left">
                        {['Préparé', 'En transit', 'En livraison', 'Livré'].map((step, index) => (
                          <div key={index} className={`flex items-center space-x-3 ${index === 2 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              index < 2 ? 'bg-green-500' : index === 2 ? 'bg-[#f44d0b]' : 'bg-gray-600'
                            }`}>
                              {index < 3 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{step}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#246475] rounded-lg rotate-12 shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#f44d0b] rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Design Cartes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Une expérience <span className="text-transparent bg-gradient-to-r from-[#246475] to-[#f44d0b] bg-clip-text">unique</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi des milliers de personnes font confiance à Taswiligo pour leurs livraisons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#f44d0b] transition-all duration-500 hover:shadow-xl"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#246475] to-[#1a4a5a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-[#f44d0b]" />
                <span className="text-sm font-medium">Application Mobile</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Téléchargez l'application
                <span className="block text-[#f44d0b]">Taswiligo</span>
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Disponible sur iOS et Android. Suivez vos colis où que vous soyez, avec des notifications en temps réel et une interface intuitive.
              </p>

              <div className="space-y-4 mb-8">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f44d0b] flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#246475] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  App Store
                </button>
                <button className="bg-white text-[#246475] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Google Play
                </button>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 bg-gray-900 rounded-[2rem] p-4 shadow-2xl">
                  <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[1.5rem] p-4 h-96">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#f44d0b] to-[#e3440a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">Taswiligo</h3>
                      <p className="text-gray-300 text-sm mb-6">Votre assistant livraison</p>
                      
                      <div className="space-y-3">
                        <button className="w-full bg-[#f44d0b] text-white py-3 rounded-lg font-semibold">
                          Suivre un colis
                        </button>
                        <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold">
                          Historique
                        </button>
                        <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold">
                          Paramètres
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Prêt à révolutionner vos livraisons ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez la communauté Taswiligo et découvrez une nouvelle façon de suivre vos colis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleTrackPackage}
                className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Suivre un colis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-[#246475] hover:text-[#246475] transition-all duration-300"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#f44d0b] p-2 rounded-xl">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Taswiligo</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Votre partenaire de confiance pour une expérience de livraison moderne, transparente et fiable.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">À propos</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>contact@taswiligo.ma</li>
                <li>+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 Taswiligo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
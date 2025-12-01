import { useState } from 'react';
import { Package, Truck, Clock, Shield, Globe, Headphones, ArrowRight, Star, CheckCircle, Zap, MapPin, Users, Award, Menu, X } from 'lucide-react';

interface ServicesPageProps {
  onBackToHome: () => void;
}

export default function ServicesPage({ onBackToHome }: ServicesPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Livraison sous 24h dans les principales villes du Maroc avec suivi en temps réel",
      features: ["Délai garanti 24h", "Suivi en temps réel", "Notifications SMS", "Priorité absolue"],
      color: "#f44d0b",
      popular: true,
      delay: "24H",
      coverage: "25 villes"
    },
    {
      icon: Clock,
      title: "Livraison Standard", 
      description: "Service économique avec délai de 2-3 jours ouvrables et couverture nationale",
      features: ["Tarif économique", "Couverture nationale", "Suivi basic", "Assurance incluse"],
      color: "#246475",
      popular: false,
      delay: "2-3J",
      coverage: "150+ villes"
    },
    {
      icon: Shield,
      title: "Livraison Sécurisée",
      description: "Solution premium pour vos envois de valeur et documents confidentiels",
      features: ["Assurance premium", "Signature obligatoire", "Emballage renforcé", "Traçabilité complète"],
      color: "#246475",
      popular: false,
      delay: "48H",
      coverage: "National"
    },
    {
      icon: Globe,
      title: "International Premium",
      description: "Expédition vers +50 pays avec gestion douanière intégrée",
      features: ["+50 destinations", "Douanes gérées", "Suivi international", "Délais optimisés"],
      color: "#f44d0b", 
      popular: true,
      delay: "3-5J",
      coverage: "50+ pays"
    },
    {
      icon: Package,
      title: "Solution Entreprise",
      description: "Logistique complète avec intégration API et analytics avancés",
      features: ["Tarifs dégressifs", "API d'intégration", "Compte dédié", "Rapports analytics"],
      color: "#246475",
      popular: false,
      delay: "Flexible",
      coverage: "Sur mesure"
    },
    {
      icon: Headphones,
      title: "Support Premium",
      description: "Assistance dédiée 24h/24 avec gestionnaire attitré personnel",
      features: ["Support prioritaire", "Gestionnaire dédié", "Résolution express", "Contact direct"],
      color: "#246475",
      popular: false,
      delay: "Immédiat",
      coverage: "24/7"
    }
  ];

  const stats = [
    { number: "50K+", label: "Colis livrés", icon: Package, color: "#f44d0b" },
    { number: "98%", label: "Satisfaction client", icon: Star, color: "#246475" },
    { number: "24h", label: "Délai moyen", icon: Clock, color: "#f44d0b" },
    { number: "150+", label: "Villes desservies", icon: MapPin, color: "#246475" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Rapidité",
      description: "Livraison express dans les plus brefs délais"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Vos colis entre de bonnes mains"
    },
    {
      icon: Users,
      title: "Support",
      description: "Équipe dédiée à votre service"
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Service premium garanti"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation identique aux autres pages */}
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
                Services
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
              </button>
              <button onClick={onBackToHome} className="text-white/90 hover:text-white transition-colors font-medium">
                À propos
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
                  className="text-white text-left py-2 font-medium"
                >
                  Services
                </button>
                <button 
                  onClick={() => { onBackToHome(); setIsMenuOpen(false); }}
                  className="text-white/90 hover:text-white transition-colors text-left py-2 font-medium"
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

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 min-h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 lg:mb-8">
            <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#f44d0b]" />
            <span className="text-sm font-semibold text-white">🚀 Services Premium</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
            Nos <span className="text-[#f44d0b]">Services</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Découvrez notre gamme complète de services innovants, conçus pour 
            révolutionner votre expérience de livraison au Maroc et au-delà.
          </p>
        </div>
      </section>

      {/* Statistiques avec Icônes */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center border border-slate-200 hover:border-[#246475] transition-all duration-500 hover:shadow-lg group"
              >
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1 lg:mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Rapides */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#246475]" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm lg:text-base mb-1">{feature.title}</h3>
                <p className="text-slate-600 text-xs lg:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid avec Animations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
              Nos <span className="text-[#246475]">Solutions</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Choisissez la solution qui correspond parfaitement à vos besoins logistiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-3xl p-6 lg:p-8 border-2 transition-all duration-500 hover:shadow-2xl ${
                  hoveredCard === index 
                    ? 'border-[#f44d0b] scale-105 shadow-xl' 
                    : 'border-slate-200 hover:border-slate-300 shadow-lg'
                }`}
              >
                {/* Badge Populaire Animé */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Populaire
                    </div>
                  </div>
                )}

                {/* Header avec Métriques */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg ${
                      hoveredCard === index ? 'rotate-12' : ''
                    }`}
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-[#246475]">{service.delay}</div>
                    <div className="text-xs lg:text-sm text-slate-500">{service.coverage}</div>
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4 group-hover:text-[#246475] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-slate-700 text-sm lg:text-base transition-all duration-300 hover:translate-x-2"
                    >
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 border-2 flex items-center justify-center space-x-2 group/btn ${
                    service.popular 
                      ? 'bg-gradient-to-r from-[#f44d0b] to-[#e3440a] border-[#f44d0b] text-white hover:shadow-lg' 
                      : 'bg-white border-slate-300 text-slate-700 hover:border-[#246475] hover:text-[#246475]'
                  }`}
                >
                  <span className="relative z-10">Choisir ce service</span>
                  <ArrowRight className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${
                    service.popular ? 'group-hover/btn:translate-x-1' : ''
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#246475] to-[#1a4a5a] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Prêt à révolutionner votre logistique ?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers d'entreprises qui nous font confiance 
              pour leurs livraisons au Maroc et à l'international.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#f44d0b] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#e3440a] transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg">
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
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
                Votre partenaire logistique innovant pour des solutions sur mesure 
                au Maroc et à l'international.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {services.slice(0, 3).map((service, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer flex items-center space-x-2 group">
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    <span>{service.title}</span>
                  </li>
                ))}
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
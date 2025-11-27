import { Package, Truck, Clock, Shield, Globe, Headphones, ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';

interface ServicesPageProps {
  onBackToHome: () => void;
}

export default function ServicesPage({ onBackToHome }: ServicesPageProps) {
  const services = [
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Livraison sous 24h dans les principales villes du Maroc",
      features: ["Délai garanti 24h", "Suivi en temps réel", "Notifications SMS", "Priorité absolue"],
      gradient: "from-orange-500 to-red-500",
      popular: true
    },
    {
      icon: Clock,
      title: "Livraison Standard",
      description: "Service économique avec délai de 2-3 jours ouvrables",
      features: ["Tarif économique", "Couverture nationale", "Suivi basic", "Assurance incluse"],
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: Shield,
      title: "Livraison Sécurisée",
      description: "Pour vos envois de valeur et documents confidentiels",
      features: ["Assurance premium", "Signature obligatoire", "Emballage renforcé", "Traçabilité complète"],
      gradient: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: Globe,
      title: "International Premium",
      description: "Expédition vers +50 pays avec gestion douanière",
      features: ["+50 destinations", "Douanes gérées", "Suivi international", "Délais optimisés"],
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: Package,
      title: "Solution Entreprise",
      description: "Logistique complète pour les professionnels",
      features: ["Tarifs dégressifs", "API d'intégration", "Compte dédié", "Rapports analytics"],
      gradient: "from-indigo-500 to-purple-500",
      popular: false
    },
    {
      icon: Headphones,
      title: "Support Premium",
      description: "Assistance dédiée 24h/24 et 7j/7 avec gestionnaire attitré",
      features: ["Support prioritaire", "Gestionnaire dédié", "Résolution express", "Contact direct"],
      gradient: "from-amber-500 to-orange-500",
      popular: false
    }
  ];

  const stats = [
    { number: "50K+", label: "Colis livrés mensuellement" },
    { number: "98%", label: "Taux de satisfaction client" },
    { number: "24h", label: "Délai moyen de livraison" },
    { number: "150+", label: "Villes desservies au Maroc" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-rose-50">
      {/* Navigation Élégante */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-[#f44d0b] to-orange-500 p-2 rounded-xl shadow-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Taswwiligo
              </span>
            </div>
            
            <button
              onClick={onBackToHome}
              className="group flex items-center space-x-2 text-gray-600 hover:text-[#f44d0b] transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-orange-50"
            >
              <ArrowRight className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Retour à l'accueil</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section Spectaculaire */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f44d0b]/5 to-orange-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200 shadow-lg mb-8">
            <Zap className="w-5 h-5 text-[#f44d0b] animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Services Premium</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Des solutions{' '}
            <span className="bg-gradient-to-r from-[#f44d0b] to-orange-500 bg-clip-text text-transparent">
              sur mesure
            </span>
          </h1>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Découvrez notre gamme complète de services logistiques innovants, 
            conçus pour répondre à tous vos besoins d'expédition
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Modern */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Effet de bordure animée */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100 group-hover:border-transparent transition-all duration-500 h-full">
                  
                  {/* Badge Populaire */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Populaire
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#f44d0b] group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 py-4 rounded-xl font-bold hover:from-gray-200 hover:to-gray-100 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#f44d0b] group-hover:to-orange-500 group-hover:text-white group-hover:shadow-lg border border-gray-200 group-hover:border-transparent">
                    Choisir ce service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Élégante */}
      <section className="py-20 bg-gradient-to-r from-[#f44d0b] to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-5xl font-black mb-6">
              Prêt à révolutionner votre logistique ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers d'entreprises qui nous font confiance pour leurs livraisons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#f44d0b] px-8 py-4 rounded-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-black hover:bg-white/10 transition-all transform hover:scale-105">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Complet */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#f44d0b] p-2 rounded-xl">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Taswwiligo</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Votre partenaire logistique de confiance pour des solutions de livraison 
                innovantes et fiables dans tout le Maroc et à l'international.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded"></div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded"></div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Livraison Express</li>
                <li className="hover:text-white cursor-pointer transition-colors">International</li>
                <li className="hover:text-white cursor-pointer transition-colors">Service Entreprise</li>
                <li className="hover:text-white cursor-pointer transition-colors">Support Premium</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>contact@taswwiligo.ma</li>
                <li>+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
                <li className="text-[#f44d0b] font-semibold">24h/24 - 7j/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 Taswwiligo. Tous droits réservés. | Service de livraison leader au Maroc</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
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
      color: "#f44d0b",
      popular: true
    },
    {
      icon: Clock,
      title: "Livraison Standard",
      description: "Service économique avec délai de 2-3 jours ouvrables",
      features: ["Tarif économique", "Couverture nationale", "Suivi basic", "Assurance incluse"],
      color: "#246475",
      popular: false
    },
    {
      icon: Shield,
      title: "Livraison Sécurisée",
      description: "Pour vos envois de valeur et documents confidentiels",
      features: ["Assurance premium", "Signature obligatoire", "Emballage renforcé", "Traçabilité complète"],
      color: "#f44d0b",
      popular: false
    },
    {
      icon: Globe,
      title: "International Premium",
      description: "Expédition vers +50 pays avec gestion douanière",
      features: ["+50 destinations", "Douanes gérées", "Suivi international", "Délais optimisés"],
      color: "#246475",
      popular: true
    },
    {
      icon: Package,
      title: "Solution Entreprise",
      description: "Logistique complète pour les professionnels",
      features: ["Tarifs dégressifs", "API d'intégration", "Compte dédié", "Rapports analytics"],
      color: "#f44d0b",
      popular: false
    },
    {
      icon: Headphones,
      title: "Support Premium",
      description: "Assistance dédiée 24h/24 et 7j/7 avec gestionnaire attitré",
      features: ["Support prioritaire", "Gestionnaire dédié", "Résolution express", "Contact direct"],
      color: "#246475",
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
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-[#246475] p-2 rounded-xl">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#246475]">
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

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-8">
            <Zap className="w-5 h-5 text-[#f44d0b]" />
            <span className="text-sm font-semibold text-gray-700">Services Premium</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Des solutions{' '}
            <span className="text-[#246475]">
              sur mesure
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Découvrez notre gamme complète de services logistiques innovants, 
            conçus pour répondre à tous vos besoins d'expédition
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#246475]">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#f44d0b] transition-all duration-300 h-full hover:shadow-lg"
              >
                {/* Badge Populaire */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-[#f44d0b] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-sm">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Populaire
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-[#f44d0b] hover:text-white transition-all duration-300 border border-gray-300 hover:border-[#f44d0b]"
                  style={{ backgroundColor: service.popular ? '#f44d0b' : '', color: service.popular ? 'white' : '' }}
                >
                  Choisir ce service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#246475]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à révolutionner votre logistique ?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers d'entreprises qui nous font confiance pour leurs livraisons
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#f44d0b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e3440a] transition-all flex items-center justify-center space-x-2">
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li className="hover:text-white cursor-pointer transition-colors">contact@taswwiligo.ma</li>
                <li className="hover:text-white cursor-pointer transition-colors">+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 Taswwiligo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
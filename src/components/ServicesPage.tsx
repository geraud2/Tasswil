import { Package, Truck, Clock, Shield, Globe, Headphones } from 'lucide-react';

interface ServicesPageProps {
  onBackToHome: () => void;
}

export default function ServicesPage({ onBackToHome }: ServicesPageProps) {
  const services = [
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Livraison sous 24h dans les principales villes du Maroc",
      features: ["Délai garanti 24h", "Suivi en temps réel", "Notifications SMS"]
    },
    {
      icon: Clock,
      title: "Livraison Standard",
      description: "Service économique avec délai de 2-3 jours",
      features: ["Économique", "Couverture nationale", "Suivi basic"]
    },
    {
      icon: Shield,
      title: "Livraison Sécurisée",
      description: "Pour vos envois de valeur et documents importants",
      features: ["Assurance incluse", "Signature obligatoire", "Emballage renforcé"]
    },
    {
      icon: Globe,
      title: "International",
      description: "Expédition vers l'Europe, l'Afrique et l'Amérique",
      features: ["Douanes gérées", "Suivi international", "Délais optimisés"]
    },
    {
      icon: Package,
      title: "Service Entreprise",
      description: "Solutions logistiques pour les professionnels",
      features: ["Tarifs préférentiels", "API d'intégration", "Compte dédié"]
    },
    {
      icon: Headphones,
      title: "Support Premium",
      description: "Assistance dédiée 24h/24 et 7j/7",
      features: ["Support prioritaire", "Gestionnaire dédié", "Résolution express"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-[#f44d0b] p-2 rounded-xl shadow-sm">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold text-gray-800">Taswwiligo</span>
            </div>
            
            <button
              onClick={onBackToHome}
              className="text-gray-600 hover:text-[#f44d0b] transition-colors font-medium"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-[#f44d0b]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de livraison adaptés à tous vos besoins
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f44d0b] transition-colors">
                  <service.icon className="w-8 h-8 text-[#f44d0b] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#f44d0b] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-orange-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à expédier ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choisissez le service qui correspond le mieux à vos besoins
            </p>
            <button className="bg-[#f44d0b] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#e0450a] transition-colors">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
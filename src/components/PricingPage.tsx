import { Package, Check, Star } from 'lucide-react';

interface PricingPageProps {
  onBackToHome: () => void;
}

export default function PricingPage({ onBackToHome }: PricingPageProps) {
  const plans = [
    {
      name: "Express",
      price: "49",
      period: "colis",
      popular: true,
      features: [
        "Livraison 24h garantie",
        "Suivi GPS en temps réel",
        "Notifications push et SMS",
        "Assurance jusqu'à 1000 DH",
        "Support prioritaire",
        "Emballage standard"
      ]
    },
    {
      name: "Standard",
      price: "29",
      period: "colis",
      popular: false,
      features: [
        "Livraison 2-3 jours",
        "Suivi basic",
        "Notifications email",
        "Assurance jusqu'à 500 DH",
        "Support standard",
        "Emballage économique"
      ]
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      period: "mensuel",
      popular: false,
      features: [
        "Livraison illimitée",
        "API d'intégration",
        "Compte dédié",
        "Assurance complète",
        "Support 24/7",
        "Rapports analytics"
      ]
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
            Nos <span className="text-[#f44d0b]">Tarifs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions de livraison adaptées à tous les budgets, sans compromis sur la qualité
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-[#f44d0b] ring-2 ring-[#f44d0b] ring-opacity-20 transform -translate-y-2' 
                    : 'border-orange-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#f44d0b] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Populaire
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Sur mesure" && (
                      <span className="text-gray-600 ml-2">DH/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">Pour les envois standards jusqu'à 5kg</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-[#f44d0b] text-white hover:bg-[#e0450a]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Choisir ce plan' : 'Découvrir'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Informations complémentaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frais supplémentaires</h4>
                <ul className="space-y-2">
                  <li>• +10 DH/kg au-delà de 5kg</li>
                  <li>• +20 DH pour emballage renforcé</li>
                  <li>• +15 DH pour livraison le week-end</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Zones de livraison</h4>
                <ul className="space-y-2">
                  <li>• Casablanca, Rabat, Marrakech : 24h</li>
                  <li>• Autres grandes villes : 48h</li>
                  <li>• Zones rurales : 3-5 jours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
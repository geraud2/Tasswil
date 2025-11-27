import { Package, Check, Star, ArrowRight, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

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
      description: "Pour les livraisons urgentes et prioritaires",
      features: [
        "Livraison 24h garantie",
        "Suivi GPS en temps réel", 
        "Notifications push et SMS",
        "Assurance jusqu'à 1000 DH",
        "Support prioritaire 24/7",
        "Emballage premium inclus",
        "Livraison week-end possible",
        "Statut prioritaire"
      ],
      gradient: "from-orange-500 to-red-500",
      cta: "Choisir l'Express"
    },
    {
      name: "Standard",
      price: "29", 
      period: "colis",
      popular: false,
      description: "Solution économique pour vos envois courants",
      features: [
        "Livraison 2-3 jours ouvrables",
        "Suivi basic avec notifications",
        "Assurance jusqu'à 500 DH",
        "Support standard 9h-18h",
        "Emballage standard",
        "Couverture nationale",
        "Rapport de livraison",
        "Satisfaction garantie"
      ],
      gradient: "from-blue-500 to-cyan-500",
      cta: "Choisir le Standard"
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      period: "mensuel",
      popular: false,
      description: "Solution complète pour les professionnels",
      features: [
        "Forfait mensuel personnalisé",
        "API d'intégration complète",
        "Compte dédié avec gestionnaire",
        "Assurance illimitée incluse",
        "Support premium 24/7",
        "Rapports analytics détaillés",
        "Formation de votre équipe",
        "Accès early aux nouvelles features"
      ],
      gradient: "from-purple-500 to-pink-500", 
      cta: "Devis personnalisé"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Sécurisé",
      description: "Tous vos colis sont assurés et tracés"
    },
    {
      icon: Clock, 
      title: "Délais Garantis",
      description: "Respect des délais ou remboursement"
    },
    {
      icon: TrendingUp,
      title: "Rapidité",
      description: "Livraison la plus rapide du marché"
    },
    {
      icon: Zap,
      title: "Support 24/7",
      description: "Assistance disponible à tout moment"
    }
  ];

  const faqs = [
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, tous nos tarifs sont transparents. Les seuls frais supplémentaires sont clairement indiqués (emballage renforcé, livraison week-end, etc.)."
    },
    {
      question: "Puis-je changer de forfait ?",
      answer: "Oui, vous pouvez changer de forfait à tout moment. Le nouveau tarif s'applique aux prochains envois."
    },
    {
      question: "Les tarifs incluent-ils la TVA ?",
      answer: "Oui, tous nos prix sont TTC (Toutes Taxes Comprises). Aucun frais supplémentaire ne vous sera facturé."
    },
    {
      question: "Comment payer ?", 
      answer: "Plusieurs moyens de paiement : carte bancaire, virement, chèque ou mandat. Des facilités de paiement sont possibles pour les professionnels."
    }
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
            <TrendingUp className="w-5 h-5 text-[#f44d0b] animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Tarifs Transparents</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Des tarifs{' '}
            <span className="bg-gradient-to-r from-[#f44d0b] to-orange-500 bg-clip-text text-transparent">
              compétitifs
            </span>
          </h1>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Choisissez la formule qui correspond à vos besoins parmi nos solutions 
            de livraison haut de gamme à prix transparents
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid Modern */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Effet de bordure animée */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${
                  plan.popular ? 'opacity-50' : ''
                }`}></div>
                
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100 group-hover:border-transparent transition-all duration-500 h-full ${
                  plan.popular ? 'transform -translate-y-4' : ''
                }`}>
                  
                  {/* Badge Populaire */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 text-white px-6 py-2 rounded-full text-sm font-black flex items-center shadow-2xl">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        LE PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                      {plan.price !== "Sur mesure" && (
                        <span className="text-gray-600 ml-2 text-lg">DH/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">Pour les envois standards jusqu'à 5kg</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-black transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#f44d0b] to-orange-500 text-white hover:shadow-2xl'
                      : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 hover:from-gray-200 hover:to-gray-100 border border-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Frais supplémentaires */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-[#f44d0b] mr-3" />
                Frais supplémentaires
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Poids supplémentaire</span>
                  <span className="text-[#f44d0b] font-black">+10 DH/kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Emballage renforcé</span>
                  <span className="text-[#f44d0b] font-black">+20 DH</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Livraison week-end</span>
                  <span className="text-[#f44d0b] font-black">+15 DH</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Stockage prolongé</span>
                  <span className="text-[#f44d0b] font-black">+5 DH/jour</span>
                </div>
              </div>
            </div>

            {/* Zones de livraison */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-[#f44d0b] mr-3" />
                Délais de livraison
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Casablanca, Rabat, Marrakech</span>
                  <span className="text-green-600 font-black">24h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Autres grandes villes</span>
                  <span className="text-orange-500 font-black">48h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Zones rurales</span>
                  <span className="text-gray-500 font-black">3-5 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-[#f44d0b] to-orange-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-black mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-white/90">Toutes les réponses à vos questions sur nos tarifs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-black mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de clients satisfaits et bénéficiez de nos tarifs compétitifs dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#f44d0b] px-8 py-4 rounded-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                <span>Choisir un forfait</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-black hover:bg-white/10 transition-all transform hover:scale-105">
                Contact commercial
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
                Des solutions de livraison innovantes à des tarifs transparents et compétitifs.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Forfaits</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Express</li>
                <li className="hover:text-white cursor-pointer transition-colors">Standard</li>
                <li className="hover:text-white cursor-pointer transition-colors">Entreprise</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>contact@taswwiligo.ma</li>
                <li>+212 5 20 30 40 50</li>
                <li className="text-[#f44d0b] font-semibold">Service client 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 Taswwiligo. Tous droits réservés. | Tarifs transparents et sans engagement</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
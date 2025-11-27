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
      color: "#f44d0b",
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
      color: "#246475",
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
      color: "#246475",
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
            <TrendingUp className="w-5 h-5 text-[#f44d0b]" />
            <span className="text-sm font-semibold text-gray-700">Tarifs Transparents</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Des tarifs{' '}
            <span className="text-[#246475]">
              compétitifs
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Choisissez la formule qui correspond à vos besoins parmi nos solutions 
            de livraison haut de gamme à prix transparents
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                  style={{ backgroundColor: index % 2 === 0 ? "#f44d0b" : "#246475" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 h-full ${
                  plan.popular 
                    ? 'border-[#f44d0b] shadow-lg transform -translate-y-2' 
                    : 'border-gray-200 hover:border-[#f44d0b] hover:shadow-md'
                }`}
              >
                {/* Badge Populaire */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#f44d0b] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-sm">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      POPULAIRE
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Sur mesure" && (
                      <span className="text-gray-600 ml-2">DH/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">Pour les envois standards jusqu'à 5kg</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-[#f44d0b] text-white hover:bg-[#e3440a]'
                      : 'bg-gray-100 text-gray-800 hover:bg-[#246475] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frais supplémentaires */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 text-[#f44d0b] mr-2" />
                Frais supplémentaires
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Poids supplémentaire</span>
                  <span className="text-[#f44d0b] font-semibold">+10 DH/kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Emballage renforcé</span>
                  <span className="text-[#f44d0b] font-semibold">+20 DH</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Livraison week-end</span>
                  <span className="text-[#f44d0b] font-semibold">+15 DH</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Stockage prolongé</span>
                  <span className="text-[#f44d0b] font-semibold">+5 DH/jour</span>
                </div>
              </div>
            </div>

            {/* Zones de livraison */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-[#246475] mr-2" />
                Délais de livraison
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Grandes villes</span>
                  <span className="text-green-600 font-semibold">24h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Villes secondaires</span>
                  <span className="text-orange-500 font-semibold">48h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Zones rurales</span>
                  <span className="text-gray-500 font-semibold">3-5 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#246475]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-white/80">Toutes les réponses à vos questions sur nos tarifs</p>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#246475] rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Rejoignez les milliers de clients satisfaits et bénéficiez de nos tarifs compétitifs dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-[#f44d0b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e3440a] transition-colors flex items-center justify-center space-x-2">
                <span>Choisir un forfait</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact commercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#f44d0b] p-2 rounded-xl">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Taswwiligo</span>
              </div>
              <p className="text-gray-400 text-sm">
                Des solutions de livraison innovantes à des tarifs transparents et compétitifs.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Forfaits</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Express</li>
                <li className="hover:text-white cursor-pointer transition-colors">Standard</li>
                <li className="hover:text-white cursor-pointer transition-colors">Entreprise</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>contact@taswwiligo.ma</li>
                <li>+212 5 20 30 40 50</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2024 Taswwiligo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
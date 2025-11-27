import { Package, Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle, Headphones, Zap } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false);
      alert('Message envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone Principal",
      content: "+212 5 20 30 40 50",
      description: "Lun - Ven, 8h - 18h",
      gradient: "from-blue-500 to-cyan-500",
      emergency: false
    },
    {
      icon: Headphones,
      title: "Support Urgent",
      content: "+212 6 00 00 00 00",
      description: "24h/24 - 7j/7",
      gradient: "from-red-500 to-pink-500",
      emergency: true
    },
    {
      icon: Mail,
      title: "Email Principal",
      content: "contact@taswwiligo.ma",
      description: "Réponse sous 2h",
      gradient: "from-green-500 to-emerald-500",
      emergency: false
    },
    {
      icon: MapPin,
      title: "Siège Social",
      content: "123 Avenue Hassan II, Casablanca",
      description: "Maroc",
      gradient: "from-purple-500 to-pink-500",
      emergency: false
    }
  ];

  const departments = [
    {
      icon: MessageCircle,
      title: "Service Client",
      description: "Suivi de colis, réclamations, informations",
      contact: "client@taswwiligo.ma"
    },
    {
      icon: Zap,
      title: "Support Technique", 
      description: "Problèmes techniques, assistance plateforme",
      contact: "support@taswwiligo.ma"
    },
    {
      icon: Package,
      title: "Service Commercial",
      description: "Devis, partenariats, solutions entreprises",
      contact: "commercial@taswwiligo.ma"
    }
  ];

  const faqs = [
    {
      question: "Quel est le délai de réponse ?",
      answer: "Nous répondons à tous les emails dans un délai maximum de 2 heures ouvrées."
    },
    {
      question: "Puis-je modifier ma commande ?",
      answer: "Oui, contactez-nous dans l'heure qui suit votre commande pour toute modification."
    },
    {
      question: "Comment suivre mon colis en temps réel ?",
      answer: "Utilisez votre numéro de suivi sur notre plateforme ou via l'application mobile."
    },
    {
      question: "Proposez-vous des services internationaux ?",
      answer: "Oui, nous livrons dans plus de 50 pays avec gestion douanière incluse."
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
            <MessageCircle className="w-5 h-5 text-[#f44d0b] animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Support 24/7</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Parlons de votre{' '}
            <span className="bg-gradient-to-r from-[#f44d0b] to-orange-500 bg-clip-text text-transparent">
              projet
            </span>
          </h1>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Notre équipe est à votre écoute 24h/24 et 7j/7 pour répondre à toutes vos questions 
            et vous accompagner dans vos projets de livraison
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-500 text-sm font-medium">Support disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                2h
              </div>
              <div className="text-gray-500 text-sm font-medium">Délai réponse moyen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-500 text-sm font-medium">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-500 text-sm font-medium">Pays desservis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Modern */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Envoyez-nous un message</h3>
                  <p className="text-gray-600">Nous vous répondons dans les plus brefs délais</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-gray-50/50"
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-gray-50/50"
                        placeholder="+212 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-gray-50/50"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-gray-50/50"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="demande-info">Demande d'information</option>
                      <option value="devis">Demande de devis</option>
                      <option value="support">Support technique</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-gray-50/50 resize-none"
                      placeholder="Décrivez-nous votre projet ou votre question..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#f44d0b] to-orange-500 text-white py-4 px-6 rounded-xl font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Modern */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-orange-100 group-hover:border-transparent transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-gray-900 text-lg">{info.title}</h4>
                          {info.emergency && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">{info.content}</p>
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Departments */}
              <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                <h4 className="font-bold text-lg mb-4">Services spécialisés</h4>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <dept.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold">{dept.title}</h5>
                        <p className="text-white/80 text-sm">{dept.description}</p>
                        <p className="text-white/90 text-sm font-medium">{dept.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">Trouvez rapidement des réponses à vos questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-black mb-6">
              Besoin d'une réponse immédiate ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Appelez notre service client disponible 24h/24 et 7j/7 pour une assistance en temps réel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#f44d0b] px-8 py-4 rounded-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-black hover:bg-white/10 transition-all transform hover:scale-105">
                Chat en direct
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
                Votre partenaire de confiance pour des solutions de livraison innovantes 
                et un support client d'exception.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>contact@taswwiligo.ma</li>
                <li>+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
                <li className="text-[#f44d0b] font-semibold">Support 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Horaires</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Lun - Ven: 8h-18h</li>
                <li>Samedi: 9h-16h</li>
                <li>Dimanche: Urgences</li>
                <li className="text-green-400 font-semibold">✅ En ligne maintenant</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 Taswwiligo. Tous droits réservés. | Service client premium 24/7</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
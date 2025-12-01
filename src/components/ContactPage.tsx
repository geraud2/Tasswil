import { Package, Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle, Headphones, Zap, Star } from 'lucide-react';
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
      color: "#246475"
    },
    {
      icon: Headphones,
      title: "Support Urgent",
      content: "+212 6 00 00 00 00",
      description: "24h/24 - 7j/7",
      color: "#f44d0b",
      popular: true
    },
    {
      icon: Mail,
      title: "Email Principal",
      content: "contact@taswwiligo.ma",
      description: "Réponse sous 2h",
      color: "#246475"
    },
    {
      icon: MapPin,
      title: "Siège Social",
      content: "123 Avenue Hassan II, Casablanca",
      description: "Maroc",
      color: "#246475"
    }
  ];

  const departments = [
    {
      icon: MessageCircle,
      title: "Service Client",
      description: "Suivi de colis, réclamations, informations",
      contact: "client@taswwiligo.ma",
      color: "#246475"
    },
    {
      icon: Zap,
      title: "Support Technique", 
      description: "Problèmes techniques, assistance plateforme",
      contact: "support@taswwiligo.ma",
      color: "#f44d0b"
    },
    {
      icon: Package,
      title: "Service Commercial",
      description: "Devis, partenariats, solutions entreprises",
      contact: "commercial@taswwiligo.ma",
      color: "#246475"
    }
  ];

  const stats = [
    { number: "24/7", label: "Support disponible", icon: Clock },
    { number: "2h", label: "Délai réponse moyen", icon: Zap },
    { number: "98%", label: "Satisfaction client", icon: Star },
    { number: "50+", label: "Pays desservis", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Fixe - CORRIGÉE */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-[#246475] to-[#1a4a5a] p-2 rounded-xl shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#246475] to-[#1a4a5a] bg-clip-text text-transparent">
                Taswwiligo
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={onBackToHome} className="text-slate-600 hover:text-[#f44d0b] transition-all duration-300 font-medium hover:scale-105">
                Accueil
              </button>
              <button className="text-[#f44d0b] font-semibold relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#f44d0b] transition-all duration-300"></span>
              </button>
              <button onClick={onBackToHome} className="text-slate-600 hover:text-[#f44d0b] transition-all duration-300 font-medium hover:scale-105">
                Services
              </button>
              <button onClick={onBackToHome} className="text-slate-600 hover:text-[#f44d0b] transition-all duration-300 font-medium hover:scale-105">
                À propos
              </button>
            </div>

            <button 
              onClick={onBackToHome}
              className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-4 sm:px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-md"
            >
              Suivre un colis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - AJOUT DU PADDING POUR LA NAV FIXE */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 min-h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 lg:mb-8">
            <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#f44d0b]" />
            <span className="text-sm font-semibold text-white">Support 24/7</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
            Contactez-<span className="text-[#f44d0b]">nous</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Notre équipe est à votre écoute pour répondre à toutes vos questions 
            et vous accompagner dans vos projets de livraison
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-center border border-slate-200 hover:border-[#246475] transition-all duration-500 hover:shadow-lg group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#246475] rounded-2xl flex items-center justify-center mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
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

      {/* Contenu Principal */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulaire de Contact */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  Envoyez-nous un message
                </h3>
                <p className="text-slate-600 text-lg">
                  Nous vous répondons dans les plus brefs délais
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white"
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white resize-none"
                    placeholder="Décrivez-nous votre projet ou votre question..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white py-3 lg:py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-md"
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

            {/* Informations de Contact */}
            <div className="space-y-6 lg:space-y-8">
              {/* Cartes de Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div 
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        style={{ backgroundColor: info.color }}
                      >
                        <info.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1 lg:mb-2">
                          <h4 className="font-semibold text-slate-900 text-sm lg:text-base">{info.title}</h4>
                          {info.popular && (
                            <div className="bg-[#f44d0b] text-white px-2 py-1 rounded-full text-xs font-bold">
                              <Star className="w-3 h-3 inline mr-1 -mt-0.5" />
                              URGENT
                            </div>
                          )}
                        </div>
                        <p className="text-slate-800 font-medium text-sm lg:text-base">{info.content}</p>
                        <p className="text-slate-600 text-xs lg:text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services Spécialisés */}
              <div className="bg-gradient-to-br from-[#246475] to-[#1a4a5a] rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-lg">
                <h4 className="font-bold text-lg lg:text-xl mb-4 lg:mb-6">Services spécialisés</h4>
                <div className="space-y-4 lg:space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-3 lg:space-x-4 group">
                      <div 
                        className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: dept.color }}
                      >
                        <dept.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-base lg:text-lg">{dept.title}</h5>
                        <p className="text-white/80 text-sm lg:text-base mt-1">{dept.description}</p>
                        <p className="text-white/90 text-sm lg:text-base font-medium mt-2">{dept.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Urgent */}
              <div className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white text-center shadow-lg">
                <h4 className="font-bold text-lg lg:text-xl mb-2 lg:mb-3">Urgence ?</h4>
                <p className="text-white/90 text-sm lg:text-base mb-4 lg:mb-6">
                  Appelez notre service d'urgence disponible 24h/24
                </p>
                <button className="bg-white text-[#f44d0b] px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-md">
                  <Phone className="w-5 h-5" />
                  <span>Appeler +212 6 00 00 00 00</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">
              Prêt à simplifier votre logistique ?
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une solution sur mesure adaptée à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBackToHome}
                className="bg-gradient-to-r from-[#f44d0b] to-[#e3440a] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button 
                onClick={onBackToHome}
                className="border-2 border-slate-300 text-slate-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:border-[#246475] hover:text-[#246475] transition-all duration-300 text-sm lg:text-base"
              >
                Voir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <div className="bg-[#f44d0b] p-2 rounded-xl shadow-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl lg:text-2xl font-bold">Taswwiligo</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md text-sm lg:text-base">
                Votre partenaire logistique innovant pour des solutions sur mesure 
                au Maroc et à l'international.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 lg:mb-6">Contact</h4>
              <ul className="space-y-2 lg:space-y-3 text-slate-400 text-sm lg:text-base">
                <li className="hover:text-white transition-colors cursor-pointer">contact@taswwiligo.ma</li>
                <li className="hover:text-white transition-colors cursor-pointer">+212 5 20 30 40 50</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 lg:mb-6">Horaires</h4>
              <ul className="space-y-2 lg:space-y-3 text-slate-400 text-sm lg:text-base">
                <li>Lun - Ven: 8h-18h</li>
                <li>Samedi: 9h-16h</li>
                <li>Dimanche: Urgences</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-slate-500 text-sm lg:text-base">
            <p>© 2024 Taswwiligo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
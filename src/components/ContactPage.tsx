import { Package, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire envoyé:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 5 20 30 40 50",
      description: "Lun - Ven, 8h - 18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@taswwiligo.ma",
      description: "Support 24h/24"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Avenue Hassan II",
      description: "Casablanca, Maroc"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi - Vendredi",
      description: "8h00 - 18h00"
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
            Nous <span className="text-[#f44d0b]">Contacter</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f44d0b] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#e0450a] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#f44d0b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-800 font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <h4 className="font-semibold text-gray-900 text-lg mb-4">Questions fréquentes</h4>
                <div className="space-y-3">
                  {[
                    "Comment suivre mon colis ?",
                    "Quels sont les délais de livraison ?",
                    "Comment créer un compte ?",
                    "Quels documents faut-il ?"
                  ].map((question, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-[#f44d0b] hover:text-[#e0450a] transition-colors text-sm"
                    >
                      {question}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
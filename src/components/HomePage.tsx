import { useState, useRef, useEffect } from 'react';
import { Package, Search, MapPin, Clock, Shield, Truck, ArrowRight, Sparkles, Play, Pause } from 'lucide-react';

interface HomePageProps {
  onTrack: (code: string) => void;
  onNavigate: (page: 'services' | 'pricing' | 'contact') => void;
}

function HomePage({ onTrack, onNavigate }: HomePageProps) {
  const [trackingCode, setTrackingCode] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingCode.trim()) {
      onTrack(trackingCode.trim());
    }
  };

  const handleGetStarted = () => {
    onTrack('');
  };

  // Background animation équilibré
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    // Équilibre entre les deux couleurs
    const colors = ['#24647520', '#f44d0b20'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;

    const animate = () => {
      if (!isPlaying) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(248, 250, 252, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying]);

  const features = [
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Suivi GPS en temps réel avec précision",
      color: "#f44d0b"
    },
    {
      icon: Clock,
      title: "Notifications Smart",
      description: "Alertes personnalisées à chaque étape",
      color: "#246475"
    },
    {
      icon: Shield,
      title: "Sécurité Totale",
      description: "Vos colis protégés de A à Z",
      color: "#f44d0b"
    },
    {
      icon: Truck,
      title: "Livraison Express",
      description: "Service rapide dans tout le Maroc",
      color: "#246475"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Play/Pause Animation */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors border border-gray-200 shadow-sm"
      >
        {isPlaying ? <Pause className="w-4 h-4 text-[#246475]" /> : <Play className="w-4 h-4 text-[#246475]" />}
      </button>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation équilibrée */}
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
              
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-600 hover:text-[#f44d0b] transition-colors font-medium"
                >
                  Services
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="text-gray-600 hover:text-[#f44d0b] transition-colors font-medium"
                >
                  Tarifs
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-600 hover:text-[#f44d0b] transition-colors font-medium"
                >
                  Contact
                </button>
              </div>

              <button 
                onClick={handleGetStarted}
                className="bg-[#f44d0b] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#e3440a] transition-colors"
              >
                Commencer
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#f44d0b]" />
                <span className="text-sm text-gray-600">Service de livraison premium</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Livraison
                <span className="block text-[#246475]">sans compromis</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Un service fiable et transparent pour suivre vos colis en temps réel, 
                avec une simplicité d'utilisation remarquable.
              </p>

              {/* Tracking Form */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-[#246475] p-2 rounded-lg">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Suivre un colis</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                        Numéro de suivi
                      </label>
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          value={trackingCode}
                          onChange={(e) => setTrackingCode(e.target.value)}
                          placeholder="Entrez votre numéro de suivi..."
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors bg-white"
                        />
                        <button
                          type="submit"
                          disabled={!trackingCode.trim()}
                          className="bg-[#f44d0b] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e3440a] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                        >
                          <Search className="w-4 h-4" />
                          <span>Suivre</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                {[
                  { number: "50K+", label: "Colis livrés" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "24h", label: "Livraison express" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#246475]">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Des fonctionnalités{' '}
                <span className="text-[#246475]">exceptionnelles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour une expérience de livraison parfaite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#f44d0b] transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Prêt à simplifier vos livraisons ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Rejoignez des milliers de clients satisfaits par notre service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleGetStarted}
                  className="bg-[#f44d0b] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#e3440a] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="border border-gray-300 text-gray-700 px-8 py-3.5 rounded-xl font-semibold hover:border-[#246475] hover:text-[#246475] transition-colors"
                >
                  Voir les tarifs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#246475] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Taswwiligo</span>
                </div>
                <p className="text-white/80 mb-6 max-w-md text-lg leading-relaxed">
                  Votre partenaire de confiance pour une expérience de livraison 
                  moderne et fiable au Maroc.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-white/80">
                  <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Livraison Express</button></li>
                  <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Suivi Colis</button></li>
                  <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Service Entreprise</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-white/80">
                  <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">contact@taswwiligo.ma</button></li>
                  <li>+212 5 20 30 40 50</li>
                  <li>Casablanca, Maroc</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
              <p>© 2024 Taswwiligo. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
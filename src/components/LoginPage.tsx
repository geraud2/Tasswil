import { useState } from 'react';
import { Package, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
  onForgotPassword: () => void;
}

export default function LoginPage({ onLogin, onSwitchToSignup, onForgotPassword }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de connexion
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-[#f44d0b] p-2 rounded-xl">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold text-gray-800">Taswwiligo</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Connectez-vous</h1>
            <p className="text-gray-600 mt-2">Accédez à votre espace client</p>
          </div>

          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Votre mot de passe"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f44d0b] focus:border-[#f44d0b] outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Mot de passe oublié */}
            <div className="text-right">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm text-[#f44d0b] hover:text-[#e0450a] transition-colors"
              >
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full bg-[#f44d0b] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#e0450a] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Connexion...</span>
                </>
              ) : (
                <>
                  <span>Se connecter</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Lien vers inscription */}
          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600">
              Pas de compte ?{' '}
              <button
                onClick={onSwitchToSignup}
                className="text-[#f44d0b] hover:text-[#e0450a] font-semibold transition-colors"
              >
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
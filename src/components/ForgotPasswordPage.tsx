import { useState } from 'react';
import { Package, Mail, ArrowLeft, CheckCircle } from 'lucide-react';

interface ForgotPasswordPageProps {
  onBackToLogin: () => void;
  onBackToHome: () => void;
}

export default function ForgotPasswordPage({ onBackToLogin, onBackToHome }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  if (isSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Email envoyé !</h1>
            <p className="text-gray-600 mb-6">
              Un lien de réinitialisation a été envoyé à <strong>{email}</strong>. 
              Vérifiez votre boîte de réception.
            </p>
            <button
              onClick={onBackToLogin}
              className="w-full bg-[#f44d0b] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#e0450a] transition-colors"
            >
              Retour à la connexion
            </button>
            <button
              onClick={onBackToHome}
              className="w-full mt-4 border border-gray-300 text-gray-700 py-3.5 px-6 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Mot de passe oublié</h1>
            <p className="text-gray-600 mt-2">Réinitialisez votre mot de passe</p>
          </div>

          {/* Formulaire */}
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
              <p className="text-sm text-gray-500 mt-2">
                Nous enverrons un lien de réinitialisation à cette adresse email.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-[#f44d0b] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#e0450a] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <span>Envoyer le lien</span>
              )}
            </button>
          </form>

          {/* Liens retour */}
          <div className="mt-6 space-y-3 text-center">
            <button
              onClick={onBackToLogin}
              className="text-sm text-gray-600 hover:text-[#f44d0b] transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à la connexion</span>
            </button>
            <button
              onClick={onBackToHome}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ArrowLeft, MapPin, Clock, Package, Truck, Home } from 'lucide-react';
import TrackingMap from './TrackingMap';
import TrackingInfo from './TrackingInfo';

interface TrackingResultsProps {
  trackingCode: string;
  onReset: () => void;
}

function TrackingResults({ trackingCode, onReset }: TrackingResultsProps) {
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
              onClick={onReset}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#f44d0b] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Nouvelle recherche</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
          {/* Header avec le code de suivi */}
          <div className="bg-gradient-to-r from-[#f44d0b] to-orange-500 text-white px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Suivi de colis</h1>
                <p className="text-orange-100">Suivi en temps réel</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-orange-100 mb-1">Code de suivi</p>
                <p className="text-2xl font-bold">{trackingCode}</p>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-8">
            {/* Carte et informations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Localisation en direct</h3>
                <TrackingMap />
              </div>
              
              <div className="space-y-6">
                <TrackingInfo />
                
                {/* Livreur info */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Informations livreur</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nom:</span>
                      <span className="font-semibold">Mohammed A.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Téléphone:</span>
                      <span className="font-semibold">+212 6 12 34 56 78</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Statut:</span>
                      <span className="font-semibold text-green-600">En route</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Historique de livraison */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#f44d0b]" />
                Historique de livraison
              </h3>
              
              <div className="space-y-4">
                {/* Étape actuelle */}
                <div className="flex items-start bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f44d0b] flex items-center justify-center mr-4">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">En cours de livraison</p>
                    <p className="text-sm text-gray-600">Votre colis est en route vers votre adresse</p>
                    <p className="text-xs text-[#f44d0b] font-medium mt-1">Maintenant</p>
                  </div>
                </div>

                {/* Étapes précédentes */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">Arrivé au centre de distribution</p>
                    <p className="text-sm text-gray-600">Casablanca, Maroc</p>
                    <p className="text-xs text-gray-400 mt-1">Aujourd'hui, 14:30</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">Colis réceptionné</p>
                    <p className="text-sm text-gray-600">Centre de tri - Rabat</p>
                    <p className="text-xs text-gray-400 mt-1">Aujourd'hui, 09:15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <Home className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">Colis expédié</p>
                    <p className="text-sm text-gray-600">Entrepôt principal</p>
                    <p className="text-xs text-gray-400 mt-1">Hier, 16:45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingResults;
import { MapPin, Clock, CheckCircle, Truck } from 'lucide-react';

function TrackingInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600">
        <div className="flex items-start">
          <Truck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Statut actuel</h3>
            <p className="text-lg font-bold text-blue-600">En transit</p>
            <p className="text-sm text-gray-600 mt-1">Votre colis est en cours de livraison</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-start mb-4">
          <MapPin className="w-6 h-6 text-gray-600 mr-3 mt-1" />
          <div className="flex-grow">
            <h3 className="font-semibold text-gray-800 mb-1">Localisation actuelle</h3>
            <p className="text-gray-700">Casablanca, Maroc</p>
            <p className="text-sm text-gray-500 mt-1">Centre de distribution régional</p>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <Clock className="w-6 h-6 text-gray-600 mr-3 mt-1" />
          <div className="flex-grow">
            <h3 className="font-semibold text-gray-800 mb-1">Heure estimée de livraison</h3>
            <p className="text-gray-700">Demain, 15:00 - 18:00</p>
            <p className="text-sm text-gray-500 mt-1">Livraison prévue sous 24h</p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
          <div className="flex-grow">
            <h3 className="font-semibold text-gray-800 mb-1">Progression</h3>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">65% complété</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-3">Informations complémentaires</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Poids:</span>
            <span className="font-medium text-gray-800">2.5 kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium text-gray-800">Express</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Origine:</span>
            <span className="font-medium text-gray-800">Rabat</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Destination:</span>
            <span className="font-medium text-gray-800">Casablanca</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingInfo;

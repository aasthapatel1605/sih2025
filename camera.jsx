import React, { useState } from 'react';
import { Camera, Upload, Heart, Brain, Apple } from 'lucide-react';

export default function HealthCenterApp() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">फोटो स्वास्थ्य स्कैनर</h1>
        <p className="text-gray-600 text-sm">बेहतर स्वास्थ्य का एक नया रास्ता है कि फोटो खींचें</p>
      </div>

      {/* Photo Upload Section */}
      <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
        <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center bg-green-50">
          {selectedImage ? (
            <img src={selectedImage} alt="Uploaded" className="max-w-full h-48 mx-auto rounded-lg object-cover mb-4" />
          ) : (
            <div className="mb-4">
              <Camera className="w-16 h-16 mx-auto text-green-400 mb-2" />
            </div>
          )}
          
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="photo-upload"
          />
          
          <label 
            htmlFor="photo-upload" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-green-700 transition-colors inline-flex items-center gap-2 mb-3"
          >
            <Camera className="w-5 h-5" />
            फोटो लें
          </label>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
            <Upload className="w-4 h-4" />
            डेस्क से अपलोड करें
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-200">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-yellow-400 rounded text-white text-xs flex items-center justify-center font-bold">📋</div>
          <h3 className="font-semibold text-gray-800">फोटो टिप्स</h3>
        </div>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• स्पष्ट, अच्छी रोशनी के फोटो लें</li>
          <li>• कम रोशनी वाले फोटो का इस्तेमाल न करें</li>
          <li>• धुंधले फोटो हो तो नई फोटो ले फोटो लें</li>
        </ul>
      </div>

      {/* Health Tracking Section */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800 mb-3">हाल की रिपोर्ट</h3>
        
        {/* Heart Rate Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">हृदयदर गति</h4>
                <p className="text-xs text-gray-500">कुदरती संकेत हैं</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-orange-400 text-white px-2 py-1 rounded text-xs font-semibold">82%</div>
              <p className="text-xs text-gray-500 mt-1">सामान्य</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-blue-600">📈 कुछ देखें</div>
          </div>
        </div>

        {/* Data Analysis Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Apple className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">डाटा का विश्लेषण</h4>
                <p className="text-xs text-gray-500">स्वास्थ्य - बेहद अच्छा है</p>
              </div>
            </div>
            <div className="bg-orange-400 text-white px-2 py-1 rounded text-xs font-semibold">92%</div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-gray-500">सामान्य</div>
            <div className="text-xs text-blue-600">📊 देता देखें</div>
          </div>
        </div>

        {/* AI Health Prediction Card */}
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">AI-आधारित पदार्थन</h4>
              <p className="text-xs text-gray-600">तुरंत 100+ बीमारियों का पता लगाने की रुकवान्य करता है</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

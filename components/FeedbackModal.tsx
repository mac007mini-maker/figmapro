import { useState } from 'react';
import { X } from 'lucide-react';

interface FeedbackModalProps {
  onClose: () => void;
}

export function FeedbackModal({ onClose }: FeedbackModalProps) {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle feedback submission here
    console.log('Feedback:', feedback);
    console.log('Email:', email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Feedback</h2>

        {/* Feedback question */}
        <div className="mb-4">
          <label className="block text-sm mb-2">
            <span className="text-red-500">*</span>What would you like us to improve?
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Describe the issues or suggestions..."
            className="w-full h-32 p-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Email field */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Your email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-2xl font-medium hover:shadow-lg transition-shadow"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
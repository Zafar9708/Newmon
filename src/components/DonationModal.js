'use client';
import { useState } from 'react';

export default function DonationModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('email'); // 'email' or 'payment'
  const [step, setStep] = useState(1); // For payment flow only

  const [emailFormData, setEmailFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'I want to make a donation',
    message: '',
    amount: '',
    frequency: 'one-time'
  });

  const [paymentFormData, setPaymentFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    
    // Donation Information
    amount: '',
    currency: 'USD',
    frequency: 'one-time',
    
    // Payment Information
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' }
  ];

  // Email Form Handlers
  const handleEmailInputChange = (field, value) => {
    setEmailFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // Simulate email sending
    console.log('Sending email with details:', emailFormData);
    alert('Thank you! Your message has been sent. We will contact you shortly to arrange your donation.');
    onClose();
  };

  // Payment Form Handlers
  const handlePaymentInputChange = (field, value) => {
    setPaymentFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmountSelect = (amount) => {
    if (activeTab === 'email') {
      setEmailFormData(prev => ({ ...prev, amount: amount.toString() }));
    } else {
      setPaymentFormData(prev => ({ ...prev, amount: amount.toString() }));
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Process payment
      console.log('Processing payment:', paymentFormData);
      // Simulate payment processing
      setTimeout(() => {
        setStep(3); // Success step
      }, 2000);
    }
  };

  const getCurrencySymbol = () => {
    const currency = currencies.find(c => c.code === paymentFormData.currency);
    return currency ? currency.symbol : '$';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="relative inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="bg-pink-600 px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Support Our Mission</h3>
                <p className="text-pink-100 mt-1">Choose how you'd like to contribute</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('email')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                  activeTab === 'email'
                    ? 'text-pink-600 border-b-2 border-pink-600 bg-pink-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Us</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                  activeTab === 'payment'
                    ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>Donate Online</span>
                </div>
              </button>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {/* Email Contact Tab */}
            {activeTab === 'email' && (
              <EmailContactTab
                formData={emailFormData}
                presetAmounts={presetAmounts}
                onInputChange={handleEmailInputChange}
                onAmountSelect={handleAmountSelect}
                onSubmit={handleEmailSubmit}
              />
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <PaymentTab
                formData={paymentFormData}
                step={step}
                currencies={currencies}
                presetAmounts={presetAmounts}
                onInputChange={handlePaymentInputChange}
                onAmountSelect={handleAmountSelect}
                onSubmit={handlePaymentSubmit}
                getCurrencySymbol={getCurrencySymbol}
                onBack={() => setStep(1)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Email Contact Tab Component
function EmailContactTab({ formData, presetAmounts, onInputChange, onAmountSelect, onSubmit }) {
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us About Donation</h3>
        <p className="text-gray-600">Fill out the form below and we'll get in touch to arrange your donation</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => onInputChange('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Donation Preferences */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Donation Preferences (Optional)</h4>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Amount ($)
              </label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => onInputChange('amount', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                placeholder="Enter amount"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency
              </label>
              <select
                value={formData.frequency}
                onChange={(e) => onInputChange('frequency', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
              >
                <option value="one-time">One-time</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => onAmountSelect(amount)}
                className={`p-3 border rounded-lg text-center transition-all ${
                  formData.amount === amount.toString()
                    ? 'border-pink-500 bg-pink-50 text-pink-700 font-semibold'
                    : 'border-gray-300 hover:border-pink-300 hover:bg-gray-50'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => onInputChange('subject', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => onInputChange('message', e.target.value)}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
            placeholder="Tell us about your donation preferences or any specific instructions..."
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-blue-700">
              <span className="font-semibold">What happens next?</span> We'll contact you within 24 hours to discuss your donation and provide payment options.
            </div>
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

// Payment Tab Component
function PaymentTab({ formData, step, currencies, presetAmounts, onInputChange, onAmountSelect, onSubmit, getCurrencySymbol, onBack }) {
  return (
    <div className="p-6">
      {step === 1 && (
        <PersonalInfoStep
          formData={formData}
          currencies={currencies}
          presetAmounts={presetAmounts}
          onInputChange={onInputChange}
          onAmountSelect={onAmountSelect}
          getCurrencySymbol={getCurrencySymbol}
          onSubmit={onSubmit}
        />
      )}

      {step === 2 && (
        <PaymentStep
          formData={formData}
          onInputChange={onInputChange}
          getCurrencySymbol={getCurrencySymbol}
          onSubmit={onSubmit}
          onBack={onBack}
        />
      )}

      {step === 3 && (
        <SuccessStep formData={formData} />
      )}
    </div>
  );
}

// Personal Information Step for Payment
function PersonalInfoStep({ formData, currencies, presetAmounts, onInputChange, onAmountSelect, getCurrencySymbol, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Make a Secure Donation</h3>
        <p className="text-gray-600">Complete your donation quickly and securely</p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => onInputChange('fullName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Donation Details */}
      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
        <h4 className="font-semibold text-gray-800 mb-4">Donation Details</h4>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              value={formData.currency}
              onChange={(e) => onInputChange('currency', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            >
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frequency
            </label>
            <select
              value={formData.frequency}
              onChange={(e) => onInputChange('frequency', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            >
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Donation Amount
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => onAmountSelect(amount)}
                className={`p-3 border rounded-lg text-center transition-all ${
                  formData.amount === amount.toString()
                    ? 'border-teal-500 bg-teal-50 text-teal-700 font-semibold'
                    : 'border-gray-300 hover:border-teal-300 hover:bg-gray-50'
                }`}
              >
                {getCurrencySymbol()}{amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
              {getCurrencySymbol()}
            </span>
            <input
              type="number"
              required
              placeholder="Enter custom amount"
              value={formData.amount}
              onChange={(e) => onInputChange('amount', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg text-lg"
      >
        Continue to Payment
      </button>
    </form>
  );
}

// Payment Step Component (Simplified for this example)
function PaymentStep({ formData, onInputChange, getCurrencySymbol, onSubmit, onBack }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Information</h3>
        <p className="text-gray-600">Complete your secure donation</p>
      </div>

      {/* Payment form would go here - simplified for example */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="text-sm text-yellow-700">
            This is a demo. In a real implementation, you would integrate with a payment gateway like Stripe or PayPal.
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
        >
          Complete Donation
        </button>
      </div>
    </form>
  );
}

// Success Step Component
function SuccessStep({ formData }) {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Donation!</h3>
      
      <p className="text-gray-600 mb-8">
        Your generous contribution will help us continue our mission.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span>Reference:</span>
            <span className="font-mono font-semibold">NKF-{Date.now().toString().slice(-8)}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount:</span>
            <span className="font-semibold">{formData.currency} {formData.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
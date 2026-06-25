import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertTriangle, MessageSquare, User, AtSign } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error message on change
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    const errors = { name: '', email: '', message: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      hasError = true;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      hasError = true;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Short UI simulation state before triggering redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // WhatsApp configuration with country code (88 for Bangladesh)
      const whatsappNumber = "8801798810051";
      const formattedText = `*New Contact Form Submission*\n\n` +
                            `*Name:* ${formData.name.trim()}\n` +
                            `*Email:* ${formData.email.trim()}\n\n` +
                            `*Message:* ${formData.message.trim()}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
      
      // Fire redirect sequence open
      window.open(whatsappUrl, '_blank');

      // Clear the form fields
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-fuchsia-600/5 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 relative tracking-tight">
        Get In Touch
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mx-auto mb-16" />

      <div className="max-w-2xl mx-auto">
        <div 
          id="contact-form-card"
          className="bg-white dark:bg-[#10101b] border border-gray-150 dark:border-white/5 rounded-[40px] shadow-xl p-8 sm:p-10 relative overflow-hidden"
        >
          {submitSuccess && (
            // Success redirect message banner
            <div className="absolute inset-0 bg-[#0f0f18]/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center animate-[fadeIn_0.3s_ease]">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-wide">
                Opening WhatsApp...
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed mb-6">
                Your form details were securely captured! If your browser blocked the automatic popup tab, you can click back below to write another message.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2.5 bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs tracking-wider rounded-full shadow-md transition cursor-pointer"
              >
                Write a New Message
              </button>
            </div>
          )}

          <div className="text-center sm:text-left mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Let's build something beautiful together!
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fill out the form details below to securely transmit your message live over WhatsApp.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
            {/* Input Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1.5 mb-2 flex items-center gap-1.5">
                <User size={13} className="text-violet-500" />
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name..."
                  className={`w-full px-5 py-3.5 rounded-2xl border bg-gray-50 dark:bg-[#141424] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formErrors.name
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:border-rose-500'
                      : 'border-gray-200 dark:border-white/5 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                  }`}
                />
              </div>
              {formErrors.name && (
                <p className="text-xs text-rose-500 mt-1.5 pl-1.5 flex items-center gap-1">
                  <AlertTriangle size={11} />
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1.5 mb-2 flex items-center gap-1.5">
                <AtSign size={13} className="text-violet-500" />
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address..."
                  className={`w-full px-5 py-3.5 rounded-2xl border bg-gray-50 dark:bg-[#141424] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formErrors.email
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:border-rose-500'
                      : 'border-gray-200 dark:border-white/5 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                  }`}
                />
              </div>
              {formErrors.email && (
                <p className="text-xs text-rose-500 mt-1.5 pl-1.5 flex items-center gap-1">
                  <AlertTriangle size={11} />
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Input Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1.5 mb-2 flex items-center gap-1.5">
                <MessageSquare size={13} className="text-violet-500" />
                Message <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message details..."
                  className={`w-full px-5 py-4 rounded-[20px] border bg-gray-50 dark:bg-[#141424] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-200 ${
                    formErrors.message
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 focus:border-rose-500'
                      : 'border-gray-200 dark:border-white/5 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                  }`}
                />
              </div>
              {formErrors.message && (
                <p className="text-xs text-rose-500 mt-1.5 pl-1.5 flex items-center gap-1">
                  <AlertTriangle size={11} />
                  {formErrors.message}
                </p>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-bold rounded-2xl shadow-[0_6px_20px_-3px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)] disabled:opacity-60 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send via WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
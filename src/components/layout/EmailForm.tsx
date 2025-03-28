"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const aiNeedsOptions = [
  "AI Agent Systems", 
  "Machine Learning", 
  "Natural Language Processing", 
  "Computer Vision", 
  "Predictive Analytics", 
  "AI Integration", 
  "Custom AI Solution"
];

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectDescription: z.string().optional(),
  aiNeeds: z.array(z.string()).min(1, "Please select at least one AI need")
});

type FormData = z.infer<typeof formSchema>;

// Replace this with your actual FormSpree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblgadrl";

const EmailForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch,
    setValue,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectDescription: '',
      aiNeeds: []
    }
  });
  
  // Watch values for validation
  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedAiNeeds = watch('aiNeeds');
  
  const handleCheckboxChange = (need: string) => {
    const currentNeeds = watchedAiNeeds || [];
    const updatedNeeds = currentNeeds.includes(need)
      ? currentNeeds.filter(n => n !== need)
      : [...currentNeeds, need];
    
    setValue('aiNeeds', updatedNeeds, { shouldValidate: true });
  };

  const nextStep = () => {
    if (step === 1 && (!watchedName || !watchedEmail)) {
      // Let react-hook-form handle the validation
      return;
    }
    
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Submit directly to FormSpree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          // Convert the array to a string for easier reading in email
          aiNeeds: data.aiNeeds.join(', ')
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Form submission failed');
      }
      
      // Set success state and reset form
      setIsSuccess(true);
      reset();
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">
              Your inquiry has been successfully submitted. We'll be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i < step ? 'bg-teal-500 text-black' : 
                    i === step ? 'border-2 border-teal-500 text-white' : 
                    'bg-gray-700 text-gray-500'
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Let's get to know you</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                    <input
                      id="name"
                      {...register('name')}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                    <input
                      id="company"
                      {...register('company')}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Project Description */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Tell us about your project</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="projectDescription" className="block text-gray-300 mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="projectDescription"
                      {...register('projectDescription')}
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                      placeholder="Briefly describe your project and what you're hoping to achieve with AI..."
                    />
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: AI Needs */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">What AI needs do you have?</h3>
                  
                  <div className="mb-6 space-y-3">
                    {aiNeedsOptions.map((need, index) => (
                      <label 
                        key={index} 
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={watchedAiNeeds?.includes(need) || false}
                          onChange={() => handleCheckboxChange(need)}
                          className="sr-only"
                        />
                        <div className={`
                          w-5 h-5 mr-3 flex items-center justify-center rounded border
                          ${watchedAiNeeds?.includes(need) 
                            ? 'bg-teal-500 border-teal-500' 
                            : 'border-gray-500 group-hover:border-gray-400'}
                        `}>
                          {watchedAiNeeds?.includes(need) && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {need}
                        </span>
                      </label>
                    ))}
                  </div>
                  
                  {errors.aiNeeds && (
                    <p className="text-red-500 text-sm mb-4">{errors.aiNeeds.message}</p>
                  )}
                  
                  {submitError && (
                    <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm mb-4">
                      {submitError}
                    </div>
                  )}
                </motion.div>
              )}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div> // Empty div to maintain flex layout
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-400 rounded-lg text-black font-medium hover:shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-shadow"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-400 rounded-lg text-black font-medium hover:shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-shadow ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailForm; 
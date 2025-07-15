'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../../config/supabase';

interface NewsletterData {
  name: string;
  email: string;
  interests: string[];
}

const interestOptions = [
  'Liderazgo',
  'Inteligencia Emocional',
  'Coaching',
  'PNL',
  'Empresas',
];

const NewsletterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<NewsletterData>();
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: NewsletterData) => {
    setSubmitError(null);
    const { error } = await supabase.from('newsletter').insert([data]);
    if (error) {
      setSubmitError('Hubo un error al suscribirte. Intenta de nuevo.');
      return false;
    }
    reset();
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-primary-blue mb-1">Nombre *</label>
        <input
          type="text"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="w-full border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-primary-blue mb-1">Email *</label>
        <input
          type="email"
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Email no válido' },
          })}
          className="w-full border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-primary-blue mb-1">Intereses *</label>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center gap-2 text-primary-blue text-sm">
              <input
                type="checkbox"
                value={interest}
                {...register('interests', { required: 'Selecciona al menos un interés' })}
                className="accent-primary-blue"
              />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests && <span className="text-red-500 text-xs block mt-1">{errors.interests.message as string}</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-blue text-snow-white font-poppins font-semibold py-3 rounded-lg hover:bg-primary-blue/90 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Suscribiendo...' : 'Suscribirme'}
      </button>
      {isSubmitSuccessful && !submitError && (
        <div className="text-green-600 text-center font-medium mt-2">¡Te has suscrito correctamente!</div>
      )}
      {submitError && (
        <div className="text-red-600 text-center font-medium mt-2">{submitError}</div>
      )}
    </form>
  );
};

export default NewsletterForm; 
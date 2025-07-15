import React from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../../config/supabase';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

const services = [
  'Coaching Individual',
  'Talleres de Inteligencia Emocional',
  'Programas de Liderazgo',
  'Sesiones de PNL',
  'Consultoría',
];

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset, setError } = useForm<ContactData>();
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: ContactData) => {
    setSubmitError(null);
    const { error } = await supabase.from('contacts').insert([data]);
    if (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Intenta de nuevo.');
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
        <label className="block text-sm font-medium text-primary-blue mb-1">Teléfono</label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-primary-blue mb-1">Servicio de interés</label>
        <select
          {...register('service_interest')}
          className="w-full border border-pearl-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        >
          <option value="">Selecciona una opción</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-primary-blue mb-1">Mensaje *</label>
        <textarea
          {...register('message', { required: 'El mensaje es obligatorio' })}
          className="w-full border border-pearl-gray rounded-lg px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-blue text-snow-white font-poppins font-semibold py-3 rounded-lg hover:bg-primary-blue/90 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {isSubmitSuccessful && !submitError && (
        <div className="text-green-600 text-center font-medium mt-2">¡Mensaje enviado correctamente!</div>
      )}
      {submitError && (
        <div className="text-red-600 text-center font-medium mt-2">{submitError}</div>
      )}
    </form>
  );
};

export default ContactForm; 
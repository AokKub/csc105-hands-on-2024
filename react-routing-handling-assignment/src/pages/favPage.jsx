import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function FavPage() {
  const schema = z.object({
    number: z.number().min(1).max(100),
    q: z.enum(['love', 'like']),
    size: z.enum(['small', 'medium', 'large']),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      number: 1,
      q: 'love',
      size: 'medium',
    },
  });

  const nav = useNavigate();

  const onSubmit = (data) => {
    nav(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border p-10">
        <div>
          <label>Number:</label>
          <input
            type="number"
            {...register('number', { valueAsNumber: true })}
            className="border m-2"
          />
          {errors.number && <p className="text-lg text-red-400">{errors.number.message}</p>}
        </div>
        <label>Q:</label>
        <div>
          <select {...register('q')} className="border m-2">
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
          {errors.q && <p className="text-lg text-red-400">{errors.q.message}</p>}
        </div>
        <label>Size:</label>
        <div>
          <select {...register('size')} className="border m-2">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.size && <p className="text-lg text-red">{errors.size.message}</p>}
        </div>
        <button type="submit" className="p-5 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FavPage;

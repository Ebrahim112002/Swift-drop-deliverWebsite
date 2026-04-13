import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../hook/UseAuth';

const Register = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const { registerUser,}=UseAuth();
  const handleRegistration=(data)=>{
      console.log(data);
      registerUser(data.email,data.password)
      .then(res=>{
        console.log(res.user)
      })
      .catch(error=>{
        console.log(error)
      })

  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box lg:w-xl w-xs border p-4 h-full">
        <legend className="fieldset-legend">Login</legend>
           {/* Email */}
        <label className="label">Email</label>
        <input type="email" {...register('email', {required:true})} className="input w-xl" placeholder="Email" />
        {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}
          {/* Password */}
        <label className="label">Password</label>
        <input type="password" {...register('password',
          {required:true
            ,minLength:6,
          })}
           className="input w-xl" placeholder="Password" />
        {errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>}
        {errors.password?.type==='minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>}

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
      </form>
     
    </div>
  );
};

export default Register;
import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../hook/UseAuth';

const Login = () => {
  const{register,handleSubmit,formState:{errors}}=useForm();
  const {singninUser}=UseAuth();
  const handleLogin=(data)=>{
    
    singninUser(data.email,data.password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(error=>{
      console.log(error)
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {required:true, minLength:6})} className="input" placeholder="Password" />
          {errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type==='minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
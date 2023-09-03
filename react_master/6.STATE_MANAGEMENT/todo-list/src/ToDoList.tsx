import React from 'react';
import {useForm} from "react-hook-form";

interface IFORM {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}
function ToDoList() {
    const {register,handleSubmit,
        formState:{errors}, setError} = useForm<IFORM>(
        {defaultValues: { email: "@naver.com"},});
    const onValid = (data: any) => {
       if(data.password !== data.password1) {
           setError("password1", {message: "password is not same."});
       }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com/,
                        message: "Only naver.com email is allowed.",
                    },
                })} placeholder="Email" />
                <span>{errors?.email?.message?.toString()}</span>
                <input {...register("firstName", {required:"write here."})} placeholder="First Name" />
                <span>{errors?.firstName?.message?.toString()}</span>
                <input {...register("lastName", {required:"write here."})} placeholder="Last Name" />
                <span>{errors?.lastName?.message?.toString()}</span>
                <input {...register("username", {required:"write here.", minLength:10})} placeholder="Username" />
                <span>{errors?.username?.message?.toString()}</span>
                <input {...register("password", {required:"write here.", minLength:5})} placeholder="Password" />
                <span>{errors?.password?.message?.toString()}</span>
                <input {...register("password1", {
                    required:"Password is required.",
                    minLength: {
                      value: 5,
                      message: "Your password is too short.",
                    },
                })} placeholder="Password1" />
                <span>{errors?.password1?.message?.toString()}</span>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
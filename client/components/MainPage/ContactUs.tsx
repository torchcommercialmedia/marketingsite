import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlinePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:devjrl.programmer@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Request a Demo
      </h3> */}

      <div className="flex flex-col w-screen p-4 md:space-y-10">
        <h4 className="text-lg md:text-2xl font-semibold text-center flex flex-row mx-auto">
          <span className="underline decoration-red-500/50 ml-1">
            Request a Demo.
          </span>
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="md:space-x-2 md:flex w-full">
            <input
              required
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full mb-2 md:mb-0"
              type="text"
            />
            <input
              required
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
          </div>
          <input
            required
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            required
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#F7AB0A] py-2 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

import Close from "../../icons/Close";
import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";
import { z } from "zod";
import toast from 'react-hot-toast';

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be under 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),

  walletAddress: z
    .string()
    .min(1, "Wallet address is required"),
});

const initialState = { 
  username: "",
  walletAddress: ""
};

export default function SignUpModal() {
  const { setActiveModal } = useModalContext();
  const [inputs, setInputs] = useState( initialState );
  const [errors, setErrors] = useState({});

  function handleInputs(e) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = formSchema.safeParse( inputs );

    if ( !result.success ) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors( fieldErrors );

      // Show the first validation error as a toast
      const firstError = Object.values( fieldErrors )[0]?.[0];
      toast.error( firstError || "Invalid form input" );
      return;
    }

    toast.success("Form submitted successfully!");
    setErrors({});
    setInputs( initialState );
    setActiveModal("");
  }

  return (
    <section className="grid max-w-3xl grid-cols-2 max-sm:w-96 max-sm:grid-cols-1">
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center max-md:px-6 max-md:py-8 max-sm:hidden">
        <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight">
          Get Started with Meta <span className="text-primary-500">Dice</span>
        </h4>
        <p className="text-primary-100 text-lg/8 max-md:text-base/loose">
          Connect your crypto wallet to play instantly. Make your first deposit and roll the dice to win big!
        </p>
      </div>
      <div className="bg-primary-1400 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 max-md:px-6 max-md:py-8 max-sm:gap-y-16">
        <button
          className="border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
        >
          <Close
            className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties max-md:h-4 max-md:w-4"
            width={2}
          />
        </button>
        <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight max-md:font-normal">
          <label>
            Username
            <input
              name="username"
              type="text"
              className={`bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3 ${errors.username ? 'border-2 border-red-500' : ''}`}
              placeholder="username"
              onChange={handleInputs}
              value={inputs.username}
            />
          </label>
          <label>
            Wallet Address
            <input
              name="walletAddress"
              type="text"
              className={`bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3 ${errors.walletAddress ? 'border-2 border-red-500' : ''}`}
              placeholder="0x3fD7F95F21Faf67b9A129E3EfFb2C60e7F5cD402"
              onChange={handleInputs}
              value={inputs.walletAddress}
            />
          </label>
        </div>
        <div>
          <button
            className="bg-primary-500 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8 max-md:px-6 max-md:py-3 max-md:text-base/loose"
            onClick={handleSubmit}
          >
            Deposit
          </button>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";

export const useForm = <T extends {}>(initial: T) => {
  const [inputs, setInputs] = useState<T>(initial);
  const [error, setError] = useState(false);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value, type } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  return { handleChange, resetForm, inputs, error };
};

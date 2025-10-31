import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { FormListData } from "../types";

import { formDefaultValues, formSchema } from "../constants";

export const useCreateListForm = () => {
  const formMethods = useForm<FormListData>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { control, reset, getValues, handleSubmit } = formMethods;

  return {
    control,
    reset,
    getValues,
    handleSubmit,
  };
};

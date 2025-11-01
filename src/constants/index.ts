import * as z from "zod";

import type { FormListData } from "../types";

export const formDefaultValues: FormListData = {
  title: "",
  subtitle: "",
};

export const formSchema = z.object({
  title: z
    .string()
    .nonempty({ error: "Please enter a title." })
    .max(20, { error: "Title must Not be more than 20 characters." }),
  subtitle: z
    .string()
    .nonempty({ error: "A subtitle is required!" })
    .max(150, { error: "Subtitle must Not be more than 150 characters." }),
}) satisfies z.ZodType<FormListData>;

import * as z from "zod";

// Ref: https://articles.wesionary.team/react-hook-form-schema-validation-using-zod-80d406e22cd8
export const formSearchSchema = z.object({
  input: z.string().min(2).max(50),
});

export type FormSearchFields = z.infer<typeof formSearchSchema>;

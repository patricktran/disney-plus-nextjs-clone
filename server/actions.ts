"use server";
import { redirect } from "next/navigation";

import { getSearchLink } from "@/lib/nav";
import { delay } from "@/lib/utils";

import { FormSearchFields, formSearchSchema } from "../lib/forms";

import { action } from "./safe-action";

/**
 * contrived example of a server action using next-safe-action
 * https://next-safe-action.dev
 * https://github.com/TheEdoRan/next-safe-action/tree/main
 */
export const submitSearchAction = action(formSearchSchema, async (values) => {
  // values be type-safe and validated.
  console.log("Hi, I am a server action", values);
  // Do something with the form values on the server side.
  await delay(500);
  redirect(getSearchLink(values.input));
});

/**
 * contrived example of a server action
 * https://brockherion.dev/blog/posts/using-react-hook-form-with-nextjs-13-server-actions/
 */
/*
export async function submitSearch(values: FormSearchFields) {
  console.log("Hi, I am a server action", values);
  // Do something with the form values on the server side.
  // This will be type-safe and validated.
  redirect(`/search/${values.input}`);
}
*/

"use server";
import { redirect } from "next/navigation";
import { FormSearchFields } from "./forms";

/**
 * contrived example of a server action
 */
export async function submitSearch(values: FormSearchFields) {
  console.log("Hi, I am a server action", values);
  // Do something with the form values on the server side.
  // This will be type-safe and validated.
  redirect(`/search/${values.input}`);
}

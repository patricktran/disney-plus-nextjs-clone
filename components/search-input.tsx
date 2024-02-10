"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, usePathname } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";

import { FormSearchFields, formSearchSchema } from "@/lib/forms";
import { submitSearchAction } from "@/server/actions";

import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

function SearchInput() {
  // const router = useRouter();
  const pathname = usePathname();

  // 1. Define your form.
  const form = useForm<FormSearchFields>({
    resolver: zodResolver(formSearchSchema),
    defaultValues: {
      input: "",
    },
  });

  // reset form on route change?
  useEffect(() => {
    if (!pathname.includes("/search")) form.reset();
  }, [form, pathname]);

  /* If using a client-side submit handler
  // 2. Define a submit handler.
  function onSubmit(values: FormSearchFields) {
    // Do something with the form values.
    // This will be type-safe and validated.
    router.push(`/search/${values.input}`);
    //form.reset();
  }
  */

  const { execute: submitSearch, status } = useAction(submitSearchAction);

  // calling a server action onSubmit
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => submitSearch(data))}
        className="relative"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {status === "executing" && (
          <span className="absolute h-2 w-2 right-3 top-4 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-800 opacity-75"></span>
          </span>
        )}
      </form>
    </Form>
  );
}

export default SearchInput;

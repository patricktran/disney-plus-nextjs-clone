"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { FormSearchFields, formSearchSchema } from "@/lib/forms";
import { submitSearchAction } from "@/server/actions";

function SearchInput() {
  //const router = useRouter();
  const pathname = usePathname();

  // 1. Define your form.
  const form = useForm<FormSearchFields>({
    resolver: zodResolver(formSearchSchema),
    defaultValues: {
      input: "",
    },
  });

  //reset form on route change?
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

  //calling a server action onSubmit
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => submitSearch(data))}
        className="space-y-8"
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
      </form>
    </Form>
  );
}

export default SearchInput;

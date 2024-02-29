"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ActionType, NodeData } from "@/lib/types";

type pageProps = {
  data: NodeData;
  action: ActionType;
};

export function CardForm1({ data, action }: pageProps) {
  const { actionData } = data;
  const { desc, func, name, inputList } = action;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Function name must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {inputList.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.name}</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="flex items-center justify-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
}

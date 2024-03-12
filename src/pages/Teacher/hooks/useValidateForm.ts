import { useEffect, useState } from "react";
import { AnyZodObject, ZodArray, ZodEffects, ZodError } from "zod";

type Props<T> = {
  schema: AnyZodObject | ZodEffects<AnyZodObject> | ZodArray<AnyZodObject>;
  data: T;
};
function useValidateForm<T>({ schema, data }: Props<T>) {
  const [errors, setErrors] = useState<{ [K in keyof T]: K[] }>();

  function validateZodInput({ schema, data }: Props<T>) {
    try {
      schema.parse(data);
      return;
    } catch (e) {
      if (e instanceof ZodError) {
        const n: any = {};
        e.issues.map((e) => {
          let a: string = e.path[0] as string;
          if (Object.keys(n).includes(a)) {
            n[a].push(e.message);
          } else {
            n[a] = [];
            n[a].push(e.message);
          }
        });
        setErrors(n);
      }
    }
  }

  useEffect(() => {
    validateZodInput({ schema, data });
    return () => {
      setErrors(undefined);
    };
  }, [data]);

  return { errors };
}

export { useValidateForm };

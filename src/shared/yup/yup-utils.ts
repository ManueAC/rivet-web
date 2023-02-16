import * as yup from "yup";

type Input = Partial<{ max: number; min: number; required: boolean }>;
/**
 * @param name - Name of the field.
 * @param opt - Options.
 * @param opt.max - Max length of the field.
 * @param opt.min - Min length of the field.
 * @param opt.required - Is the field required.
 * @returns Yup schema.
 */
export function yupStringSchema<T extends Input>(
  name: string,
  opt?: T
): yup.StringSchema<string | undefined, yup.AnyObject, string | undefined> {
  const options = opt || ({} as T);

  let schema = yup.string().label(name).typeError(`${name} must be a string`);

  if (options.max) {
    schema = schema.max(
      options.max,
      `${name} is too long should be less than ${options.max} characters`
    );
  }
  if (options.min) {
    schema = schema.min(
      options.min,
      `${name} is too short should be more than ${options.min} characters`
    );
  }

  return schema;
}

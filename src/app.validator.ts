import { ValidationDecoratorOptions, ValidationError } from "class-validator";

export interface ValidationPipeOptions extends ValidationDecoratorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any;
  }
  
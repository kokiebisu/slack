import { Field, ClassType } from 'type-graphql';
import { MinLength } from 'class-validator';

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
  class PasswordInput extends BaseClass {
    @Field()
    @MinLength(5)
    password: string;
  }

  return PasswordInput;
};

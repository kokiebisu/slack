import { Field } from 'type-graphql';
import { MinLength } from 'class-validator';

export class PasswordInput {
  @Field()
  @MinLength(5)
  password: string;
}

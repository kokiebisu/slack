import { Length, IsEmail } from 'class-validator';
import { InputType, Field } from 'type-graphql';

import { PasswordInput } from '../shared/PasswordInput';

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @Length(1, 15)
  username: string;

  @Field()
  @IsEmail()
  email: string;
}

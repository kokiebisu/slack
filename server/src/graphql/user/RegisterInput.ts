import { Length, IsEmail } from 'class-validator';
import { InputType, Field } from 'type-graphql';

import { PasswordMixin } from '../shared/PasswordInput';

@InputType()
export class RegisterInput extends PasswordMixin(class {}) {
  @Field()
  @Length(1, 15)
  username: string;

  @Field()
  @IsEmail()
  email: string;
}

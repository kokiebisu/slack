import { Length, IsEmail } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 15)
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

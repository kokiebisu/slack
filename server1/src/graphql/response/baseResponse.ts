import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class BaseResponse {
  @Field()
  ok: boolean;

  @Field(() => String, { nullable: true })
  errorlog?: string;
}

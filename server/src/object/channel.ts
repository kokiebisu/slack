import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ChannelWithFullName {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isPublic: boolean;

  @Field(() => String)
  teamId: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  topic: string;

  @Field(() => String)
  fullname: string;
}

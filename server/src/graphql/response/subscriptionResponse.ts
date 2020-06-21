import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class DisplayingMessage {
  @Field()
  id: number;

  @Field()
  fullname: string;

  @Field()
  body: string;

  @Field()
  avatarBackground: string;

  @Field()
  createdAt: string;
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

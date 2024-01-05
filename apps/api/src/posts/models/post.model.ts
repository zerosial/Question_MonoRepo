import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/models/user.model';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class Post extends BaseModel {
  @Field()
  @ApiProperty({ description: 'The title of the post' })
  title: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ description: 'The content of the post', nullable: true })
  content?: string | null;

  @Field(() => Boolean)
  @ApiProperty({ description: 'Whether the post is published or not' })
  published: boolean;

  @Field(() => User, { nullable: true })
  @ApiProperty({
    description: 'The author of the post',
    nullable: true,
    type: () => User,
  })
  author?: User | null;
}

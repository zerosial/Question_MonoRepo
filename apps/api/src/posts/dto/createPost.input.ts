import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreatePostInput {
  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'The content of the post' }) // Swagger 데코레이터
  @IsNotEmpty()
  content: string;

  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'The title of the post' }) // Swagger 데코레이터
  @IsNotEmpty()
  title: string;
}

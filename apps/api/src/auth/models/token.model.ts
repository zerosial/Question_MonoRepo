import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' }) // GraphQL 데코레이터
  @ApiProperty({ description: 'JWT access token' }) // Swagger 데코레이터
  accessToken: string;

  @Field(() => GraphQLJWT, { description: 'JWT refresh token' }) // GraphQL 데코레이터
  @ApiProperty({ description: 'JWT refresh token' }) // Swagger 데코레이터
  refreshToken: string;
}

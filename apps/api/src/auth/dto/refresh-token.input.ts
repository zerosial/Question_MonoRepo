import { ArgsType, Field } from '@nestjs/graphql';
import { IsJWT, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GraphQLJWT } from 'graphql-scalars';

@ArgsType()
export class RefreshTokenInput {
  @IsNotEmpty()
  @IsJWT()
  @Field(() => GraphQLJWT) // GraphQL 데코레이터
  @ApiProperty({ description: 'JWT Refresh Token' }) // Swagger 데코레이터
  token: string;
}

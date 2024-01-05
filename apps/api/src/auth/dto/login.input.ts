import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class LoginInput {
  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'User email' }) // Swagger 데코레이터
  @IsEmail()
  email: string;

  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'User password', minLength: 8 }) // Swagger 데코레이터
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

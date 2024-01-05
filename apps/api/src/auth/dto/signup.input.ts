import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InputType, Field } from '@nestjs/graphql';

@InputType() // GraphQL 데코레이터
export class SignupInput {
  @Field() // GraphQL 데코레이터
  @ApiProperty() // Swagger 데코레이터
  @IsEmail()
  email: string;

  @Field() // GraphQL 데코레이터
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true }) // GraphQL 데코레이터
  @ApiProperty({ required: false }) // Swagger 데코레이터
  firstname?: string;

  @Field({ nullable: true }) // GraphQL 데코레이터
  @ApiProperty({ required: false }) // Swagger 데코레이터
  lastname?: string;
}

import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class ChangePasswordInput {
  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'The current password of the user' }) // Swagger 데코레이터
  @IsNotEmpty()
  @MinLength(8)
  oldPassword: string;

  @Field() // GraphQL 데코레이터
  @ApiProperty({ description: 'The new password for the user' }) // Swagger 데코레이터
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}

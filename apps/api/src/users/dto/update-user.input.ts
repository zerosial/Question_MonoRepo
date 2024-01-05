import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true }) // GraphQL 데코레이터
  @ApiProperty({ description: 'First name of the user', required: false }) // Swagger 데코레이터
  firstname?: string;

  @Field({ nullable: true }) // GraphQL 데코레이터
  @ApiProperty({ description: 'Last name of the user', required: false }) // Swagger 데코레이터
  lastname?: string;
}

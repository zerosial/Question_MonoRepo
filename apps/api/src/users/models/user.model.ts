import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @ApiProperty({ description: 'User email' })
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ description: 'First name of the user', required: false })
  firstname?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ description: 'Last name of the user', required: false })
  lastname?: string;

  @Field(() => Role)
  @ApiProperty({ enum: Role, description: 'User role' })
  role: Role;

  @Field(() => [Post], { nullable: true })
  @ApiProperty({ description: 'User posts', type: [Post], required: false })
  posts?: [Post] | null;

  @HideField()
  password: string; // 비밀번호는 Swagger 문서에 표시되지 않음
}

import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsResolver],
})
export class PostsModule {}

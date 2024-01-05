import { Controller, Get, Post, Body, Param, Query, Req } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostInput } from './dto/createPost.input';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PaginationQueryDto } from './dto/pagenation-query.dto';

@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Req() req, @Body() createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        published: true,
        title: createPostInput.title,
        content: createPostInput.content,
        authorId: req.user.id,
      },
    });
  }

  @Get('published')
  async getPublishedPosts(@Query() paginationQuery: PaginationQueryDto) {
    const page = paginationQuery.page;
    const limit = paginationQuery.limit;
    const query = paginationQuery.query;
    const orderBy = paginationQuery.orderBy;
    const direction = paginationQuery.direction;

    const offset = (page - 1) * limit;
    const posts = await this.prisma.post.findMany({
      skip: offset,
      take: limit,
      where: { published: true, title: { contains: query || '' } },
      orderBy: orderBy ? { [orderBy]: direction } : undefined,
    });

    const total = await this.prisma.post.count({
      where: { published: true, title: { contains: query || '' } },
    });

    return {
      data: posts,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  @Get(':userId/posts')
  async getUserPosts(@Param('userId') userId: string) {
    return this.prisma.user
      .findUnique({ where: { id: userId } })
      .posts({ where: { published: true } });
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    // 게시글과 함께 저자 정보를 가져옵니다
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }
}

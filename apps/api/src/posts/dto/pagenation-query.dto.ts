import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class PaginationQueryDto {
  @Transform(({ value }) => parseInt(value, 10))
  @ApiProperty({ description: '페이지 번호', example: 1, required: false })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @Transform(({ value }) => parseInt(value, 10))
  @ApiProperty({
    description: '페이지당 항목 수',
    example: 10,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @ApiProperty({ description: '검색 쿼리', example: 'NestJS', required: false })
  @IsOptional()
  @IsString()
  query?: string;

  @ApiProperty({
    description: '정렬 기준 필드',
    example: 'createdAt',
    required: false,
  })
  @IsOptional()
  @IsString()
  orderBy?: string;

  @ApiProperty({
    description: '정렬 방향',
    example: 'asc',
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  direction?: 'asc' | 'desc' = 'asc';
}

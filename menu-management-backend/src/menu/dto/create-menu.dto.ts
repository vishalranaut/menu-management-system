import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, Max, IsUUID } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({
    description: 'The name of the menu item.',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The optional parent ID if this menu is a sub-menu.',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsUUID()
  parentId?: string;

  @ApiProperty({
    description: 'The depth of the menu item in the menu hierarchy.',
    type: Number,
    required: false,
    default: 0,
    minimum: 0,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  depth?: number = 0;

  @ApiProperty({
    description: 'The order of the menu item (for sorting purposes).',
    type: Number,
    required: false,
    default: 0,
    minimum: 0,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number = 0;
}

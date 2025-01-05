import {
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsUUID,
  IsInt,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '../interface/menu.interface';

export class MenuEntity implements Menu {
  @ApiProperty({
    description: 'The unique identifier of the menu.',
    type: String,
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The name of the menu item.',
    type: String,
    minLength: 2,
  })
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    description: 'The optional parent menu ID if this menu is a sub-menu.',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsUUID()
  parentId?: string;

  @ApiProperty({
    description: 'The parent menu object, if available (used for sub-menus).',
    type: MenuEntity,
    required: false,
  })
  @IsOptional()
  parent?: Menu;

  @ApiProperty({
    description: 'The children menus of this menu item, if available.',
    type: [MenuEntity],
    required: false,
  })
  @IsOptional()
  children?: Menu[];

  @ApiProperty({
    description: 'The depth of the menu item in the menu hierarchy.',
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsInt()
  @Min(0)
  depth: number;

  @ApiProperty({
    description: 'The order of the menu item (for sorting purposes).',
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsInt()
  @Min(0)
  order: number;
}

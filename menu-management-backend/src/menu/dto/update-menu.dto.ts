import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  @ApiProperty({
    description: 'The name of the menu item (optional for update).',
    type: String,
    required: false,
  })
  name?: string;

  @ApiProperty({
    description:
      'The optional parent ID if this menu is a sub-menu (optional for update).',
    type: String,
    required: false,
  })
  parentId?: string;

  @ApiProperty({
    description:
      'The depth of the menu item in the menu hierarchy (optional for update).',
    type: Number,
    required: false,
    default: 0,
    minimum: 0,
  })
  depth?: number;

  @ApiProperty({
    description: 'The order of the menu item (optional for update).',
    type: Number,
    required: false,
    default: 0,
    minimum: 0,
  })
  order?: number;
}

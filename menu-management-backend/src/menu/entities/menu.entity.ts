import {
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsUUID,
  IsInt,
  Min,
} from 'class-validator';
import { Menu } from '../interface/menu.interface';

export class MenuEntity implements Menu {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsUUID()
  parentId?: string;

  @IsOptional()
  parent?: Menu;

  @IsOptional()
  children?: Menu[];

  @IsInt()
  @Min(0)
  depth: number;

  @IsInt()
  @Min(0)
  order: number;
}

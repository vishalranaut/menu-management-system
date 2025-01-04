import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MenuEntity } from './entities/menu.entity';

@Controller('menu')
@ApiTags('menu')
export class MenuController {
  constructor(private readonly MenuService: MenuService) {}

  @Post('create')
  @ApiCreatedResponse({ type: MenuEntity })
  create(@Body() CreateMenuDto: CreateMenuDto) {
    return this.MenuService.create(CreateMenuDto);
  }

  @Get('list')
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findAll() {
    return this.MenuService.findAll();
  }

  @Get('root')
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findDrafts() {
    return this.MenuService.getRootMenus();
  }

  @Get(':id')
  @ApiOkResponse({ type: MenuEntity })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.MenuService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MenuEntity })
  update(@Param('id', ParseIntPipe) id: string, UpdateMenuDto: UpdateMenuDto) {
    return this.MenuService.update(id, UpdateMenuDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MenuEntity })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.MenuService.remove(id);
  }
}

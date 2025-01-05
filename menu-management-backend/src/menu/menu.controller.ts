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
  constructor(private readonly menuService: MenuService) {}

  @Post('create')
  @ApiCreatedResponse({ type: MenuEntity })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get('list')
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findAll() {
    return this.menuService.findAll();
  }

  @Get('root')
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findDrafts() {
    return this.menuService.getRootMenus();
  }

  @Get(':id')
  @ApiOkResponse({ type: MenuEntity })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.menuService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MenuEntity })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MenuEntity })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.menuService.remove(id);
  }
}

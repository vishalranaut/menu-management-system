import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(CreateMenuDto: CreateMenuDto) {
    return this.prisma.menu.create({ data: CreateMenuDto });
  }

  getRootMenus() {
    return this.prisma.menu.findMany({
      where: { parentId: null },
      orderBy: { order: 'asc' },
    });
  }

  async findAll() {
    try {
      const flatMenus = await this.prisma.menu.findMany({
        orderBy: { order: 'asc' },
      });

      const buildTree = (
        items: Array<{ id: string; name: string; parentId: string | null }>,
        parentId: string | null = null,
      ) =>
        items
          .filter((item) => item.parentId === parentId)
          .map((item) => ({
            id: item.id,
            name: item.name,
            children: buildTree(items, item.id),
          }));

      const hierarchicalMenus = buildTree(flatMenus);
      return hierarchicalMenus;
    } catch (error) {
      throw new Error(`Failed to retrieve menu hierarchy: ${error.message}`);
    }
  }

  findOne(id: string) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  update(id: string, UpdateMenuDto: UpdateMenuDto) {
    return this.prisma.menu.update({
      where: { id },
      data: UpdateMenuDto,
    });
  }

  remove(id: string) {
    return this.prisma.menu.delete({ where: { id } });
  }
}

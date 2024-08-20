import { CreateMedicineDto } from "./dto/create-med.dto";
import { UpdateMedicineDto } from "./dto/update-med.dto";
import { MedicineService } from "./medicine.services.";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/roles.enum';

@Controller('/medicines')
@UseGuards(RolesGuard)
export class MedicineController {
  constructor(private medicineService: MedicineService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicineService.create(createMedicineDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  async findAll() {
    return this.medicineService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.User)
  async findOne(@Param('id') id: number) {
    return this.medicineService.findOne(id);
  }

  @Put(':id')
  @Roles(Role.Admin)
  async update(@Param('id') id: number, @Body() updateMedicineDto: UpdateMedicineDto) {
    return this.medicineService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id') id: number) {
    return this.medicineService.remove(id);
  }
}

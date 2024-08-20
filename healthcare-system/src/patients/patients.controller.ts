import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/roles.enum';
@Controller('patients')
@UseGuards(RolesGuard)
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body() createPatientDto: any) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  async findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.User)
  async findOne(@Param('id') id: number) {
    return this.patientsService.findOne(id);
  }

  @Put(':id')
  @Roles(Role.Admin)
  async update(@Param('id') id: number, @Body() updatePatientDto: any) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id') id: number) {
    return this.patientsService.remove(id);
  }
}

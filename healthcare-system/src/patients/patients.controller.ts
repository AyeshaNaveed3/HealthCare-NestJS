import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Post()
  async create(@Body() createPatientDto: any) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  async findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.patientsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePatientDto: any) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.patientsService.remove(id);
  }
}

import { CreateMedicineDto } from "./dto/create-med.dto";
import { UpdateMedicineDto } from "./dto/update-med.dto";
import { MedicineService } from "./medicine.services.";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/medicines')
export class MedicineController{
constructor(private medicineService:MedicineService){}

@Post()
async create(@Body() CreateMedicineDto:any){
    return this.medicineService.create(CreateMedicineDto)
}

@Get()
  async findAll() {
    return this.medicineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.medicineService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() UpdateMedicineDto: any) {
    return this.medicineService.update(id, UpdateMedicineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.medicineService.remove(id);
  }

  
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Medicine } from './medicine.model';
import { CreateMedicineDto } from './dto/create-med.dto'; // Ensure correct path
import { UpdateMedicineDto } from './dto/update-med.dto'; // Ensure correct path

@Injectable()
export class MedicineService {
  constructor(
    @InjectModel(Medicine)
    private readonly medicineModel: typeof Medicine,
  ) {}

  async create(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
    return this.medicineModel.create(createMedicineDto);
  }

  async findAll(): Promise<Medicine[]> {
    return this.medicineModel.findAll();
  }

  async findOne(id: number): Promise<Medicine> {
    const medicine = await this.medicineModel.findByPk(id);
    if (!medicine) {
      throw new NotFoundException(`Medicine with ID ${id} not found`);
    }
    return medicine;
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto): Promise<Medicine> {
    const medicine = await this.findOne(id);
    return medicine.update(updateMedicineDto);
  }

  async remove(id: number): Promise<void> {
    const medicine = await this.findOne(id);
    await medicine.destroy();
  }
}

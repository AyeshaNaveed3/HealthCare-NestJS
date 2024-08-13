import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from './patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient) 
  private patientModel: typeof Patient) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientModel.create(createPatientDto);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.findAll();
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientModel.findByPk(id);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto): Promise<Patient> {
    const patient = await this.findOne(id);
    return patient.update(updatePatientDto);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.findOne(id);
    await patient.destroy();
  }
}

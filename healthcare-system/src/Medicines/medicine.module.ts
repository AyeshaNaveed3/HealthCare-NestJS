import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicine } from './medicine.model';
import { MedicineService } from './medicine.services.'; // Ensure the file name is correct
import { MedicineController } from './medicine.controller';

@Module({
  imports: [SequelizeModule.forFeature([Medicine])],
  providers: [MedicineService],
  controllers: [MedicineController],
  exports: [MedicineService],
})
export class MedicineModule {}

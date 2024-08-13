import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  expiryDate: Date;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

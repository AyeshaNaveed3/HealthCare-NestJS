import { IsOptional,IsString,IsNumber,IsDate } from "class-validator";

export class UpdateMedicineDto {
   
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsDate()
    expiryDate?: Date;
  
    @IsOptional()
    @IsNumber()
    price?: number;
}
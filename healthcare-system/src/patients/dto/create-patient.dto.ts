import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  dob: Date;

  @IsString()
  gender: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  address: string;
}

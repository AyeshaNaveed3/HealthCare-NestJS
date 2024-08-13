import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from './auth/user.model'; 
import { Patient } from './patients/patient.model'; 
import { Usermodule } from "./auth/user.module";
import { PatientsModule } from "./patients/patients.module";
import { Medicine } from "./Medicines/medicine.model";
import { MedicineModule } from "./Medicines/medicine.module";
@Module({
    imports:[
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'Hospital',
            models: [User, Patient,Medicine], 
            autoLoadModels: true,
            synchronize: true,
        
        }),
        Usermodule,
        PatientsModule,
        MedicineModule
        
    ]
  
})


export class AppModule {}
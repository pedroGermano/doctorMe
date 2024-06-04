import DatabaseService from "@/infra/DatabaseService";

export default class GetPatientByPhoneUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(phone: string) {
    const patient = await this.database.getPatientByPhone(phone);

    if (!patient) {
      throw new Error("No patient found");
    }

    return patient;
  }
}

import { PartialType } from "@nestjs/mapped-types";
import { CreateHealthInsurance } from "./create-health-insurance.dto";

export class UpdateHealthInsurance extends PartialType(CreateHealthInsurance) {}
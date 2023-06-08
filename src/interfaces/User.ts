import { Gender } from "./Gender";
import { EyeColor } from "./EyeColor";
import { Hair } from "./Hair";
import { Address } from "./Address";
import { Bank } from "./Bank";
import { Company } from "./Company";

export interface User {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     Gender;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  Date;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   EyeColor;
    hair:       Hair;
    domain:     string;
    ip:         string;
    address:    Address;
    macAddress: string;
    university: string;
    bank:       Bank;
    company:    Company;
    ein:        string;
    ssn:        string;
    userAgent:  string;
}
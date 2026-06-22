import sequelize from "../../config/connection.js";
import User from "../users/user.model.js";
import Doctor from "./doctor.model.js";

export const createDoctorService = async (data) => {
  const {
    userId,
    specialization,
    qualification,
    experienceYears,
    consultationFee,
    licenseNumber,
    phone,
    gender,
    dateOfBirth,
    address,
    isAvailable,
    availableDays,
    availableTimeStart,
    availableTimeEnd,
    bio,
  } = data;

  // required fields
  if (!userId || !specialization) {
    throw new Error("userId and specialization are required");
  }

  // specialization length
  if (specialization.length < 3 || specialization.length > 100) {
    throw new Error("Specialization must be between 3 and 100 characters");
  }

  // experienceYears
  if (experienceYears !== undefined && (isNaN(experienceYears) || experienceYears < 0 || experienceYears > 60)) {
    throw new Error("Experience years must be between 0 and 60");
  }

  // consultationFee
  if (consultationFee !== undefined && (isNaN(consultationFee) || consultationFee < 0)) {
    throw new Error("Consultation fee must be a positive number");
  }

  // phone validation
  if (phone && !/^\+?[\d\s\-]{7,15}$/.test(phone)) {
    throw new Error("Invalid phone number format");
  }

  // gender validation
  const allowedGenders = ["male", "female", "other"];
  if (gender && !allowedGenders.includes(gender)) {
    throw new Error("Gender must be male, female, or other");
  }

  // dateOfBirth — must be in the past
  if (dateOfBirth) {
    const dob = new Date(dateOfBirth);
    if (isNaN(dob.getTime())) throw new Error("Invalid date of birth");
    if (dob >= new Date()) throw new Error("Date of birth must be in the past");
  }

  // availableDays format — comma separated e.g. "Mon,Wed,Fri"
  const allowedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  if (availableDays) {
    const days = availableDays.split(",").map((d) => d.trim());
    const invalidDays = days.filter((d) => !allowedDays.includes(d));
    if (invalidDays.length > 0) {
      throw new Error(`Invalid days: ${invalidDays.join(", ")}. Use Mon,Tue,Wed,Thu,Fri,Sat,Sun`);
    }
  }

  // time range validation
  if (availableTimeStart && availableTimeEnd) {
    if (availableTimeStart >= availableTimeEnd) {
      throw new Error("availableTimeStart must be before availableTimeEnd");
    }
  }

  // bio length
  if (bio && bio.length > 1000) {
    throw new Error("Bio must not exceed 1000 characters");
  }

  const t = await sequelize.transaction();
  try {
    // check user exists and has doctor role
    const user = await User.findByPk(userId, { transaction: t });
    if (!user) throw new Error("User not found");
    if (user.roles !== "doctor") throw new Error("User is not assigned the doctor role");

    // check doctor profile already exists
    const existing = await Doctor.findOne({ where: { userId }, transaction: t });
    if (existing) throw new Error("Doctor profile already exists for this user");

    // check license number uniqueness
    if (licenseNumber) {
      const licenseExists = await Doctor.findOne({ where: { licenseNumber }, transaction: t });
      if (licenseExists) throw new Error("License number already exists");
    }

    const doctor = await Doctor.create(
      {
        userId,
        specialization,
        qualification,
        experienceYears,
        consultationFee,
        licenseNumber,
        phone,
        gender,
        dateOfBirth,
        address,
        isAvailable,
        availableDays,
        availableTimeStart,
        availableTimeEnd,
        bio,
      },
      { transaction: t }
    );

    await t.commit();
    return { doctor };
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export const getAllDoctorsService = async () => {
  const doctors = await Doctor.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName", "email"],
      },
    ],
  });
  return { doctors };
};

export const getDoctorByIdService = async (id) => {
  if (!id || isNaN(id)) throw new Error("Invalid doctor id");

  const doctor = await Doctor.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName", "email"],
      },
    ],
  });
  if (!doctor) throw new Error("Doctor not found");
  return { doctor };
};

export const updateDoctorService = async (id, data) => {
  if (!id || isNaN(id)) throw new Error("Invalid doctor id");

  // same field validations as create
  if (data.specialization !== undefined) {
    if (data.specialization.length < 3 || data.specialization.length > 100) {
      throw new Error("Specialization must be between 3 and 100 characters");
    }
  }
  if (data.experienceYears !== undefined && (isNaN(data.experienceYears) || data.experienceYears < 0 || data.experienceYears > 60)) {
    throw new Error("Experience years must be between 0 and 60");
  }
  if (data.consultationFee !== undefined && (isNaN(data.consultationFee) || data.consultationFee < 0)) {
    throw new Error("Consultation fee must be a positive number");
  }
  if (data.phone && !/^\+?[\d\s\-]{7,15}$/.test(data.phone)) {
    throw new Error("Invalid phone number format");
  }
  if (data.gender && !["male", "female", "other"].includes(data.gender)) {
    throw new Error("Gender must be male, female, or other");
  }
  if (data.dateOfBirth) {
    const dob = new Date(data.dateOfBirth);
    if (isNaN(dob.getTime())) throw new Error("Invalid date of birth");
    if (dob >= new Date()) throw new Error("Date of birth must be in the past");
  }
  if (data.availableDays) {
    const allowedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const days = data.availableDays.split(",").map((d) => d.trim());
    const invalidDays = days.filter((d) => !allowedDays.includes(d));
    if (invalidDays.length > 0) {
      throw new Error(`Invalid days: ${invalidDays.join(", ")}. Use Mon,Tue,Wed,Thu,Fri,Sat,Sun`);
    }
  }
  if (data.availableTimeStart && data.availableTimeEnd) {
    if (data.availableTimeStart >= data.availableTimeEnd) {
      throw new Error("availableTimeStart must be before availableTimeEnd");
    }
  }
  if (data.bio && data.bio.length > 1000) {
    throw new Error("Bio must not exceed 1000 characters");
  }

  const t = await sequelize.transaction();
  try {
    const doctor = await Doctor.findByPk(id, { transaction: t });
    if (!doctor) throw new Error("Doctor not found");

    // license uniqueness check
    if (data.licenseNumber && data.licenseNumber !== doctor.licenseNumber) {
      const licenseExists = await Doctor.findOne({ where: { licenseNumber: data.licenseNumber }, transaction: t });
      if (licenseExists) throw new Error("License number already exists");
    }

    // prevent userId change
    delete data.userId;

    await doctor.update(data, { transaction: t });
    await t.commit();
    return { doctor };
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export const deleteDoctorService = async (id) => {
  if (!id || isNaN(id)) throw new Error("Invalid doctor id");

  const t = await sequelize.transaction();
  try {
    const doctor = await Doctor.findByPk(id, { transaction: t });
    if (!doctor) throw new Error("Doctor not found");

    await doctor.destroy({ transaction: t }); // soft delete via paranoid
    await t.commit();
    return { message: "Doctor deleted successfully" };
  } catch (error) {
    await t.rollback();
    throw error;
  }
};
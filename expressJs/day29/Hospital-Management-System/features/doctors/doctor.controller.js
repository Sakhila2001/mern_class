import {
  createDoctorService,
  deleteDoctorService,
  getAllDoctorsService,
  getDoctorByIdService,
  updateDoctorService,
} from "./doctor.service.js";

export const createDoctor = async (req, res) => {
  try {
    const { doctor } = await createDoctorService(req.body);
    return res.status(201).json({
      success: true,
      message: "Doctor profile created successfully",
      data: { doctor },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const { doctors } = await getAllDoctorsService();
    return res.status(200).json({
      success: true,
      message: "Doctors fetched successfully",
      data: { doctors },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { doctor } = await getDoctorByIdService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Doctor fetched successfully",
      data: { doctor },
    });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { doctor } = await updateDoctorService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      data: { doctor },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { message } = await deleteDoctorService(req.params.id);
    return res.status(200).json({ success: true, message });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
import { Router } from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "./doctor.controller.js";
import { authMiddleware, authorizeRoles } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/",    authMiddleware, authorizeRoles("admin", "receptionist"), getAllDoctors);
router.get("/:id", authMiddleware, authorizeRoles("admin", "receptionist", "doctor"), getDoctorById);
router.post("/",   authMiddleware, authorizeRoles("admin"), createDoctor);
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateDoctor);
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteDoctor);

export default router;
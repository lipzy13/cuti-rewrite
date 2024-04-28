import Kontrak from "../models/Kontrak.js";
import Cuti from "../models/Cuti.js";

export const createCuti = async (req, res, next) => {
	const newCuti = new Cuti(req.body);
	try {
		const savedCuti = await newCuti.save();
		try {
			await Kontrak.findByIdAndUpdate(req.params.kontrakId, {
				$push: { cuti: savedCuti._id },
				$inc: { sisaCuti: -1 * req.body.tanggal.length },
			});
		} catch (error) {
			next(error);
		}
		res.status(200).json(savedCuti);
	} catch (error) {
		next(error);
	}
};

export const editCuti = async (req, res, next) => {
	try {
		const updatedCuti = await Cuti.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedCuti);
	} catch (error) {
		next(error);
	}
};

export const deleteCuti = async (req, res, next) => {
	const cuti = await Cuti.findById(req.params.cutiId);
	try {
		await Kontrak.findByIdAndUpdate(req.params.kontrakId, {
			$pull: { cuti: cuti._id },
			$inc: { sisaCuti: cuti.tanggal.length },
		});
		await Cuti.findByIdAndDelete(req.params.cutiId);
		res.status(200).json("Cuti Deleted");
	} catch (error) {
		next(error);
	}
};

export const getCuti = async (req, res, next) => {
	try {
		const cuti = await Cuti.findById(req.params.id);
		res.status(200).json(cuti);
	} catch (error) {
		next(error);
	}
};

export const getAllCuti = async (req, res, next) => {
	try {
		const cuti = await Cuti.find();
		res.status(200).json(cuti);
	} catch (error) {
		next(error);
	}
};

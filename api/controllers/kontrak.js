import User from "../models/User.js";
import Kontrak from "../models/Kontrak.js";

export const createKontrak = async (req, res, next) => {
	const newKontrak = new Kontrak(req.body);
	try {
		const savedKontrak = await newKontrak.save();
		try {
			await User.findByIdAndUpdate(req.params.userId, {
				$push: { kontrak: savedKontrak._id },
			});
		} catch (error) {
			next(error);
		}
		res.status(200).json(savedKontrak);
	} catch (error) {
		next(error);
	}
};

export const editKontrak = async (req, res, next) => {
	try {
		const updatedKontrak = await Kontrak.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedKontrak);
	} catch (error) {
		next(error);
	}
};

export const deleteKontrak = async (req, res, next) => {
	try {
		// should create conditional if no kontrak found
		await User.findByIdAndUpdate(req.params.userId, {
			$pull: { kontrak: req.params.kontrakId },
		});
		await Kontrak.findByIdAndDelete(req.params.kontrakId);
		res.status(200).json("Kontrak Deleted");
	} catch (error) {
		next(error);
	}
};

export const getKontrak = async (req, res, next) => {
	try {
		const kontrak = await Kontrak.findById(req.params.id).populate("cuti");
		res.status(200).json(kontrak);
	} catch (error) {
		next(error);
	}
};

export const getCutiByKontrak = async (req, res, next) => {
	try {
		const kontrak = await Kontrak.findById(req.params.kontrakId).populate(
			"cuti"
		);
		res.status(200).json(kontrak);
	} catch (error) {
		next(error);
	}
};

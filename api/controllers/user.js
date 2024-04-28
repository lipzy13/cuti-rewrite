import User from "../models/User.js";

export const createUser = async (req, res, next) => {
	const newUser = new User(req.body);
	try {
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (error) {
		next(error);
	}
};

export const editUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		next(error);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User Deleted");
	} catch (error) {
		next(error);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).populate("kontrak");
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

export const getAllUser = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

export const getUserKontraks = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).populate({
			path: "kontrak",
			populate: { path: "cuti" },
		});
		res.status(200).json(user.kontrak);
	} catch (error) {
		next(error);
	}
};

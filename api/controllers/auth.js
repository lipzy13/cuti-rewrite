import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      nama: req.body.nama,
      nik: req.body.nik,
      jabatan: req.body.jabatan,
      password: hash,
      tanggalMasuk: req.body.tanggalMasuk,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ nik: req.body.nik });
    if (!user) return next(createError(404, "User not found"));

    const ifPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!ifPasswordCorrect) return next(createError(400, "Wrong password"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
    );

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    // Checking user password
    const ifPasswordCorrect = await bcrypt.compare(
      req.body.passwordLama,
      user.password,
    );
    if (!ifPasswordCorrect)
      return next(createError(400, "Password Lama Salah"));
    try {
      const updatedPass = await User.findByIdAndUpdate(
        user._id,
        {
          $set: {
            password: bcrypt.hashSync(req.body.passwordBaru, 10),
          },
        },
        { new: true },
      );
      res.status(200).json("Password Changed");
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

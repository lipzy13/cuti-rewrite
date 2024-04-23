import User from "../models/User.js";
import Kontrak from "../models/Kontrak.js";
import Cuti from "../models/Cuti.js";

export const createKontrak = async (req, res, next) => {
  const newKontrak = new Kontrak(req.body);
  try {
    const savedKontrak = await newKontrak.save();
    try {
      await User.findByIdAndUpdate(req.body.userId, {
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
      { new: true },
    );
    res.status(200).json(updatedKontrak);
  } catch (error) {
    next(error);
  }
};

export const deleteKontrak = async (req, res, next) => {
  try {
    const { userId } = await Kontrak.findById(req.params.id);
    await User.findByIdAndUpdate(userId, {
      $pull: { kontrak: req.params.id },
    });
    await Kontrak.findByIdAndDelete(req.params.id);
    res.status(200).json("Kontrak Deleted");
  } catch (error) {
    next(error);
  }
};

export const getKontrak = async (req, res, next) => {
  try {
    const kontrak = await Kontrak.findById(req.params.id);
    const cutiList = await Promise.all(
      kontrak.cuti.map((cut) => {
        return Cuti.findById(cut);
      }),
    );
    res.status(200).json({ ...kontrak._doc, cutiList });
  } catch (error) {
    next(error);
  }
};

export const getKontrakByUser = async (req, res, next) => {
  try {
    const kontrak = await Kontrak.findOne({
      _id: req.params.kontrakId,
      userId: req.params.userId,
    });
    res.status(200).json(kontrak);
  } catch (error) {
    next(error);
  }
};

export const getKontrakByUserId = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const kontrakList = await Promise.all(
      user.kontrak.map((kont) => {
        return Kontrak.findById(kont);
      }),
    );
    res.status(200).json(kontrakList);
  } catch (error) {
    next(error);
  }
};

export const getCutiByKontrak = async (req, res, next) => {
  try {
    const kontrak = await Kontrak.findById(req.params.kontrakId);
    const cutiList = await Promise.all(
      kontrak.cuti.map((cut) => {
        return Cuti.findById(cut);
      }),
    );
    res.status(200).json(cutiList);
  } catch (error) {
    next(error);
  }
};

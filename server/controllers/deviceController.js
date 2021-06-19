const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {

    //POST elements
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.array.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }


  // GET all elements
  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAll();
      if (brandId && !typeId) {
        devices = await Device.findAll({ where: { brandId } });
      }
      if (!brandId && typeId) {
        devices = await Device.findAll({ where: { typeId } });
      }
      if (brandId && typeId) {
        devices = await Device.findAll({ where: { typeId, brandId } });
      }
      return res.json(devices);
    }
  }


  //GET element by ID
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();

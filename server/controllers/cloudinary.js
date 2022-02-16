const cloudinary = require("cloudinary");

// config
cloudinary.config({
  cloud_name: "tetraeeee",
  api_key: "531516231683695",
  api_secret: "j5X4CqhS7bYOsQQ8N-WHAHI1Yrw",
});

// req.files.file.path
exports.upload = async (req, res) => {
  let result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto", // jpeg, png
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.remove = (req, res) => {
  let image_id = req.body.public_id;

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    res.send("ok");
  });
};

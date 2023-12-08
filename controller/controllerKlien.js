const Klien = require("../models/modelKlien");

class Controller {
  static showKlien(req, res) {
    Klien.showAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render("klien", { data });
      }
    });
  }
  static formKlien(req, res) {
    res.render("addKlien.ejs");
  }
  static addKlien(req, res) {
    const objectKlien = {
      nama: req.body.nama,
      alamat: req.body.alamat,
      email: req.body.email,
      gender: req.body.gender,
      tahun_masuk: req.body.tahun_masuk,
      gaji: req.body.gaji,
    };
    Klien.addKlien(objectKlien, (err, data) => {
      if (err) {
        res.send("err");
      } else {
        res.redirect("/klien");
      }
    });
  }
  static deleteKlien(req, res) {
    const id = req.params.id;
    // console.log(id);
    Klien.deleteData(id, (err, data) => {
      if (err) {
        res.render("err");
      } else {
        res.redirect("/klien");
      }
      // console.log(data, "ini dri controller");
    });
  }
}

module.exports = Controller;

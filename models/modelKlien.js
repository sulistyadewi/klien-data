const fs = require("fs");

class Klien {
  constructor(id, nama, alamat, email, gender, tahun_masuk, gaji) {
    this.id = id;
    this.nama = nama;
    this.alamat = alamat;
    this.email = email;
    this.gender = gender;
    this.tahun_masuk = tahun_masuk;
    this.gaji = gaji;
  }
}

class KlienModel {
  static showAll(cb) {
    fs.readFile("./dataklien.json", "utf-8", (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = JSON.parse(data);
        // console.log(data, "klien model");
        const dataKlien = [];
        for (let i = 0; i < data.length; i++) {
          dataKlien.push(
            new Klien(
              data[i].id,
              data[i].nama,
              data[i].alamat,
              data[i].email,
              data[i].gender,
              data[i].tahun_masuk,
              data[i].gaji
            )
          );
        }
        cb(null, dataKlien);
        // console.log(dataKlien, "ini data");
      }
    });
  }
  static addKlien(objectKlien, cb) {
    KlienModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let id = data[data.length - 1].id + 1;
        objectKlien = new Klien(
          id,
          objectKlien.nama,
          objectKlien.alamat,
          objectKlien.email,
          objectKlien.gender,
          objectKlien.tahun_masuk,
          objectKlien.gaji
        );
        const Salarry = () => {
          let date = new Date();
          let waktuKerja = date - tahun_masuk;
          let basicSalarry = 5000000;
          for (let i = date; i < data.tahun_masuk; i++) {
            if (waktuKerja < 1) {
              basicSalarry;
            } else {
              if (waktuKerja <= 3) {
                basicSalarry * 0.1;
              } else {
                basicSalarry * 1.5;
              }
            }
          }
        };
        data.push(objectKlien);
        KlienModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
  static saveData(data, cb) {
    fs.writeFile("./dataKlien.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, "Has been Added");
      }
    });
  }
  static deleteData(id, cb) {
    KlienModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === Number(id)) {
            console.log(data[i].id);
            data.splice(i, 1);
          }
          // console.log(data);
        }
        KlienModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
}

module.exports = KlienModel;

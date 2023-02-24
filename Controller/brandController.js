import { db } from "../db.js";




const create = (data, callback) => {
    db.query(
      `insert into brand(brand, notes, favourite, status1, rank1, cUser) values (?,?,?,?,?,?)`,
      [
        data.brand,
        data.notes,
        data.favourite,
        data.status1,
        data.rank1,
        data.cUser,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };
  
  const getAllBrands = (data,callback) => {
    
   console.log("data received",data.id)
    db.query(`
    SELECT b.idbrand, b.brand, b.notes, b.favourite, b.status1, b.rank1
    FROM users u
    JOIN brand b ON u.id = b.idbrand
    WHERE u.id = ?;
  `,[data.id] ,(error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
  };
  
  const getBrandById = (data, callback) => {
    db.query(
      `select * from brand where idbrand =?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };
  
  const updateBrand = (data, callback) => {
    console.log(data,"dataaa")
    // db.query(
    //   `update brand set brand=?, notes=?, =?, favourite=?, status1=?, rank1=? cUser=? where idbrand=?`,
    //   [
    //     data.brand,
    //     data.notes,
    //     data.favourite,
    //     data.status1,
    //     data.rank1,
    //     data.cUser,
    //   ],[data.idbrand],
      
    //   (error, results, fields) => {
    //     if (error) {
    //       callback(error);
    //     }
    //     return callback(null, results);
    //   }
    // );
  };
  
  const deleteBrand = (data, callback) => {
    db.query(
      `delete from brand where idbrand=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  };
  
  export const allBrandFunction = (data, callback) => {
    console.log("Action given is", data);
  
    switch (data.action) {
      case "create":
        console.log("Create hit");
        create(data, callback);
        break;
      case "read":
        console.log("Read hit");
        getAllBrands(data,callback);
        break;
      case "readid":
        console.log("Readid hit");
        getBrandById (data, callback);
        break;
      case "update":
        console.log("Update hit");
        updateBrand (data, callback);
        break;
      case "delete":
        console.log("Delete hit");
        deleteBrand(data, callback);
        break;
      default:
        let results = "Provide valid action";
        return callback(null, results);
    }
  };

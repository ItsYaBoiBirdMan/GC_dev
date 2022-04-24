var pool = require('./connection.js')

module.exports.restoreAllCards = async function () {
    try {
      let sql = `UPDATE card SET card_hp = card_hp + 1`;
      let result = await pool.query(sql);
      let restore = result.rows;
      return { status: 200, result: restore };
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }
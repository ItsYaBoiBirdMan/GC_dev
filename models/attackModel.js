var pool = require('./connection.js')

module.exports.attackAllCards = async function () {
    try {
      let sql = `UPDATE card SET card_hp = card_hp - 1`;
      let result = await pool.query(sql);
      let damage = result.rows;
      return { status: 200, result: damage };
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }
var pool = require('./connection.js')

module.exports.getAllCards = async function () {
    try {
      let sql = `Select * from card`;
      let result = await pool.query(sql);
      let cards = result.rows;
      return { status: 200, result: cards };
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }

module.exports.attackCards = async function() {
  try{
    let sql = `UPDATE card SET card_hp = card_hp - 1`
    let result = await pool.query(sql)
    let damage = result.rows
    return { status: 200, result: damage}
  } catch(err){
    console.log(err)
    return { status: 500, result: err}
  }
}

module.exports.resetCards = async function() {
  try{
    let sql = `UPDATE card SET card_hp = card_hp + 1`
    let result = await pool.query(sql)
    let damage = result.rows
    return { status: 200, result: damage}
  } catch(err){
    console.log(err)
    return { status: 500, result: err}
  }
}

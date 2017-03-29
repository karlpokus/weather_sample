module.exports = function(err, req, res, next) {
  console.error(err.message || err);
  
  if (err.message === 'City could not be found') {
    res.status(404).send();
  } else {
    res.status(500).send();
  }
}
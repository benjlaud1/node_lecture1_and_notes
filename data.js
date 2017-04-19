// provide some data
// store our movie data

// available via module.exports
function sendData () {
  return {
    title: 'Tron: Legacy',
    year: 2010
  };
}

module.exports = sendData; // when we require a module we will get this function

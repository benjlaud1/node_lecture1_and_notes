// provide some formatted data

var output = {
  sendTitle: function (movie) {
    // format the movie data
    return movie.title + ' debuted in ' + movie.year + '\n';
  },
  getHeading: function () {
    return '------ MOVIE LIST ------ \n';
  }
};

module.exports = output;

d3.tsv = function(url, callback) {
  d3.text(url, "text/tab-separated-values", function(text) {
    callback(text && d3.tsv.parse(text, "\t"));
  });
};

d3.tsv.version = "0.0.2"

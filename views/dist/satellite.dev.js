"use strict";

$(document).ready(function () {
  $(function () {
    var progressbar = $("#progressbar"),
        progressLabel = $(".progress-label");
    progressbar.progressbar({
      value: false,
      change: function change() {
        progressLabel.text(progressbar.progressbar("value") + "m");
      }
    });

    function progress() {
      var val = progressbar.progressbar("value") || 0;
      progressbar.progressbar("value", val + 2);

      if (val < 28) {
        setTimeout(progress, 80);
      }
    }

    setTimeout(progress, 2000);
  });
});
$(document).ready(function () {
  $(function () {
    var progressbar = $("#progressbar2"),
        progressLabel = $(".progress-label2");
    progressbar.progressbar({
      value: false,
      change: function change() {
        progressLabel.text(progressbar.progressbar("value") + "%");
      },
      complete: function complete() {
        progressLabel.text("Complete spectral region");
      }
    });

    function progress() {
      var val = progressbar.progressbar("value") || 0;
      progressbar.progressbar("value", val + 100);

      if (val < .20) {
        setTimeout(progress, 80);
      }
    }

    setTimeout(progress, 2000);
  });
});
$(document).ready(function () {
  $(function () {
    var progressbar = $("#progressbar3"),
        progressLabel = $(".progress-label3");
    progressbar.progressbar({
      value: false,
      change: function change() {
        progressLabel.text(progressbar.progressbar("value") + "-bits");
      },
      complete: function complete() {
        progressLabel.text("");
      }
    });

    function progress() {
      var val = progressbar.progressbar("value") || 0;
      progressbar.progressbar("value", val + 0.1);

      if (val < .20) {
        setTimeout(progress, 80);
      }
    }

    setTimeout(progress, 2000);
  });
});
$(document).ready(function () {
  $(function () {
    var progressbar = $("#progressbar4"),
        progressLabel = $(".progress-label4");
    progressbar.progressbar({
      value: false,
      change: function change() {
        progressLabel.text(progressbar.progressbar("value") + "Days");
      },
      complete: function complete() {
        progressLabel.text("Complete!");
      }
    });

    function progress() {
      var val = progressbar.progressbar("value") || 0;
      progressbar.progressbar("value", val + 2);

      if (val < 8) {
        setTimeout(progress, 80);
      }
    }

    setTimeout(progress, 2000);
  });
});
$(document).ready(function() {
    $(function() {
        var progressbar = $('#progressbar'),
            progressLabel = $('.progress - label');

        progressbar.progressbar({
            value: false,
            change: function() {
                progressLabel.text(progressbar.progressbar('value') + '%');
            },
            complete: function() {
                progressLabel.text('Complete!');
            }
        });

        function progress() {
            var val = progressbar.progressbar('value') || 0;
            progressbar.progressbar('value', val + 1);
            if (val < 6) {
                setTimeout(progress, 5);
            }
        }
        setTimeout(progress, 2000);
    });
});
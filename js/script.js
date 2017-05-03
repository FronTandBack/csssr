jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 	console.log("Height: " + this.clientHeight);
 	console.log("Height: " + this.offsetHeight);
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
        console.log(el.scrollHeight);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});
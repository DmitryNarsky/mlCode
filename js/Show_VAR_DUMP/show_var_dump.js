var xdebs = $('pre.xdebug-var-dump');
if (xdebs.length > 0)
{
    var inject = $('<div class="vdWrapper"></div>').appendTo('body');
    xdebs.each(function()
    {
        var clone = $(this).clone();
        inject.append(clone);
        $(this).remove();
    });
}

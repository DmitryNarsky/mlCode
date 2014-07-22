/**
 * Created by mitrich on 22.07.14.
 */

$(document).ready(function()
{
    proceedVarDump();
});


function proceedVarDump()
{
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
}
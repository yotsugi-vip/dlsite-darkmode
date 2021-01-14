const className = "dlsite-darkmode";

/** メイン */
const main = () => {
    $(".loader").attr('id', 'loader');
    const el = document.getElementById("loader");
    const ob = new MutationObserver((_mutation) => {

        if ($("#app")[0]) {
            $(".page, .library").find('.page-content').addClass('page-dark');
            $(".slide-menu").find('.page-content').addClass('slide-menu-dark');
            $(".slide-menu")
                .find('.page-content, .pade-bottom')
                .find('svg').each((i, e) => {
                    $(e).find("path").addClass('svg-dark');
                });
            $(".slide-menu")
                .find('.page-content, .pade-bottom')
                .find('span').addClass("word-dark");
        }
    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

/**SVG反転 */

main();


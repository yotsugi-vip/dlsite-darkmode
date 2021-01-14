const className = "dlsite-darkmode";

const main = () => {
    $(".loader").attr('id', 'loader');
    const el = document.getElementById("loader");
    const ob = new MutationObserver((_mutation) => {

        if ($("#app")[0]) {
            $(".page, .library").find('.page-content').addClass('page-dark');
            $(".slide-menu").find('.page-content').addClass('slide-menu-dark');
        }
    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

main();


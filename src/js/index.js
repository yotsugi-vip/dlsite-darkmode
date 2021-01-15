/** メイン */
const main = () => {
    $(".loader").attr('id', 'loader');
    const el = document.getElementById("loader");
    const ob = new MutationObserver((_mutation) => {

        // メインコンテンツが表示された場合
        if ($("#app")[0]) {

            /**共通項目 */
            playCommon();

            switch (location.href) {
                case "https://play.dlsite.com/#/library":
                    playLibrary();
                    break;
                case "https://play.dlsite.com/#/mylist":
                    playMyList();
                    break;
                case "https://play.dlsite.com/#/playlist":
                    playPlayList();
                    break;
                case "https://play.dlsite.com/#/storage":
                    playStrage();
                    break;
                case "https://play.dlsite.com/#/settings":
                    playSetting();
                    break;
                case "https://play.dlsite.com/#/help":
                    playHelp();
                    break;
                default:
                    break;
            }
        }

        // ログアウトポップアップが表示された場合
        if($(".zy-dialog-content")[0]){
            playLogOut();
        }

    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

const playCommon = () => {
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
const playLibrary = () => {
    $(".work").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
    $(".maker-name").addClass("maker-name-dark");
    $(".icons").find(".icon").addClass("icons-dark");

}
const playMyList = () => { 
    $(".list").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
    $(".maker-name").addClass("maker-name-dark");
}

const playPlayList = () => {
    $(".list").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
    $(".maker-name").addClass("maker-name-dark");
 }
const playStrage = () => { 
    $(".used-storage").addClass("work-dark");
    $(".list-work, .setting").find("li").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
    $(".size").addClass("maker-name-dark");
}

const playSetting = () => { 
    $(".page-content .header").addClass("work-dark");
    $(".page-content li").addClass("header-dark");
    $(".work-name").addClass("work-name-dark");
}
const playHelp = () => { 
    $("li").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
}

const playLogOut = () => { }

main();


const app = () => {

    /**共通項目 */
    console.log("common darkmode");
    playCommon();

    switch (location.href) {
        case "https://play.dlsite.com/#/library":
            console.log("library darkmode");
            playLibrary();
            break;
        case "https://play.dlsite.com/#/mylist":
            console.log("mylist darkmode");
            playMyList();
            break;
        case "https://play.dlsite.com/#/playlist":
            console.log("playlist darkmode");
            playPlayList();
            break;
        case "https://play.dlsite.com/#/storage":
            console.log("storage darkmode");
            playStrage();
            break;
        case "https://play.dlsite.com/#/settings":
            console.log("settings darkmode");
            playSetting();
            break;
        case "https://play.dlsite.com/#/help":
            console.log("help darkmode");
            playHelp();
            break;
        default:
            console.log(location.href);
            break;
    }

    // ログアウトポップアップが表示された場合
    if ($(".zy-dialog-content")[0]) {
        playLogOut();
    }
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
    $(".page-content .header").addClass("header-dark");
    $(".page-content li").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
}
const playHelp = () => {
    $("li").addClass("work-dark");
    $(".work-name").addClass("work-name-dark");
}

const playLogOut = () => { 
}

export default app;
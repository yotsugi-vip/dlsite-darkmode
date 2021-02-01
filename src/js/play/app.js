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
            const reg = new RegExp("https:\/\/play.dlsite.com\/#\/work\/*.");
            if (reg.test(location.href)) {
                playWork();
            } else {
                console.log(location.href);
            }
            break;
    }

    // ログアウトポップアップが表示された場合
    if ($('.zy-dialog-wrapper')[0]) {
        playLogOut();
    }

    // ミニプレイヤー表示
    if ($(".mini-player")[0]) {
        MiniPlayer();
    }

    // プレイヤー全面表示
    if ($(".audio")[0]) {
        AudioPlayer();
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
    // ヘッダー
    $(".page-content .header").addClass("header-dark");
    $(".page-content .header").addClass("header-word");

    // リスト
    $(".page-content li").addClass("work-dark");
    $(".page-content li span").addClass("maker-name-dark");
}
const playHelp = () => {
    // ヘッダー
    $(".page-content .header").addClass("header-dark");
    $(".page-content .header").addClass("header-word");

    // リスト
    $(".page-content li").addClass("work-dark");
    $(".page-content li").addClass("maker-name-dark");
    $(".page-content li a").addClass("maker-name-dark");
}

const playLogOut = () => {
    // ヘッダー
    $(".zy-dialog-header").addClass('logout-header-dark');
    $(".zy-dialog-header pre").addClass('logout-header-word-dark');

    // フッター
    $(".zy-dialog-footer").addClass('logout-footer-dark');
    $(".zy-dialog-footer-button-alt").addClass('logout-footer-word-dark');
}

const playWork = () => {

    // common
    $(".work-name").addClass("word-dark");
    $(".maker-name").addClass("maker-name-dark");

    // 作品情報
    // TODO: リンクで色がおかしいものあり
    $(".meta-box .link_cien").addClass("link-dark");
    $(".meta-box .link_cien a").addClass("link-dark");
    $(".workinfo").addClass("work-dark");
    $(".regist-date").addClass("work-dark");
    $(".workinfo .bgimage").addClass("work-dark");
    $(".workinfo .content-box").addClass("work-dark");

    // tree
    $(".location-path").addClass("work-dark");
    $(".tree li").addClass("work-dark");
    $(".tree li").addClass("maker-name-dark");
    $(".tree li div").addClass("maker-name-dark");

    // related products
    $(".related-products ul li").addClass("work-dark");

}

const MiniPlayer = () => {
    $(".mini-player").addClass("work-dark");
    $(".mini-player .play-pause").addClass("work-dark");
    $(".mini-player .title").addClass("word-dark");
    $(".mini-player .album").addClass("word-dark");
}

const AudioPlayer = () => {
    $(".audio-player .pc").addClass("work-dark");
    $(".albumart-wrapper").addClass("work-dark");

    // コントロール
    $(".controls").addClass("work-dark");
    $(".elapsed-time").addClass("word-dark");
    $(".remaining-time").addClass("word-dark");
    $(".title").addClass("word-dark");
    $(".album").addClass("word-dark");
    $('.control-buttons')
        .find('svg').each((i, e) => {
            $(e).find("path").addClass('svg-dark');
        });
}

export default app;
import app from "./app";
import loader from "./loader";
const mode_str_dark = "🌙 ダークモード";
const mode_str_light = "☀ ライトモード";
const storageSetting = "dlsite-darkmode";

const str2bool = (str) => {
    return str == "true" ? true : false;
}

const reload = () => {
    if ($("#app")[0]) {
        const isDark = str2bool(localStorage.getItem(storageSetting));

        if (isDark) {
            // ダークモード有効
            $("#app").addClass("dlsite-darkmode-true");
            $("#app").removeClass("dlsite-darkmode-false");
        } else {
            // ダークモード解除
            $("#app").addClass("dlsite-darkmode-false");
            $("#app").removeClass("dlsite-darkmode-true");
        }
    }

    if ($("#loader")[0]) {
        console.log("loading...");
        loader();
    }
}

const addToggleButton = () => {
    if (!$('.toggle')[0]) {
        let storage = localStorage.getItem(storageSetting);

        if (storage == null) {
            localStorage.setItem(storageSetting, true);
            storage = localStorage.getItem(storageSetting);
        }

        $('header .right').prepend('<div class="toggle button">val</div>');

        $('.toggle.button').text(str2bool(storage) ? mode_str_dark : mode_str_light);

        $('.toggle.button').on("click", () => {
            let _storage = localStorage.getItem(storageSetting);
            localStorage.setItem(storageSetting, !(str2bool(_storage)));
            $('.toggle.button').text(str2bool(_storage) ? mode_str_dark : mode_str_light);
        });
    }
}

/** メイン */
const main = () => {
    // DOM監視処理
    $("body").attr('id', 'dlsite-darkmode');
    const el = document.getElementById("dlsite-darkmode");
    const ob = new MutationObserver((_mutation) => {
        const isDark = localStorage.getItem(storageSetting);

        reload();
        addToggleButton();
    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

main();


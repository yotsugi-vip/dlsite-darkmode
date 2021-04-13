const moon = "🌙";
const sun = "☀";
const mode_str_dark = "🌙";
const mode_str_light = "☀";
const storageSetting = "dlsite-darkmode";

/**
 * LocalStorage Info
 * Key  : dlsite-darkmode
 * val  : true, false
 * type : string
 */

const str2bool = (str) => {
    return str == "true" ? true : false;
}

const addToggleButton = () => {
    if (!$('.toggle')[0]) {
        let storage = localStorage.getItem(storageSetting);

        if (storage == null) {
            localStorage.setItem(storageSetting, true);
            storage = localStorage.getItem(storageSetting);
        }

        $('.headerCore-sub>.globalNav').append(
            `<li class="globalNav-item type-darkmode">\
                <a class="darkmode-btn-val ${storage ? "darkmode-btn-dark" : "darkmode-btn-light"}">\
                <i class="darkmode-btn-text">${storage ? "ダークモード" : "ライトモード"}</i>\
                </a>\
            </li>`
        );

        $('.type-darkmode').on("click", () => {
            let _storage = !str2bool(localStorage.getItem(storageSetting));
            localStorage.setItem(storageSetting, _storage);

            $(".darkmode-btn-val").removeClass('darkmode-btn-dark');
            $(".darkmode-btn-val").removeClass('darkmode-btn-light');

            if (_storage) {
                $(".darkmode-btn-val").addClass('darkmode-btn-val');
                $(".darkmode-btn-val").addClass('darkmode-btn-dark');
                $(".darkmode-btn-text").text("ダークモード");
            }
            else {
                $(".darkmode-btn-val").addClass('darkmode-btn-val');
                $(".darkmode-btn-val").addClass('darkmode-btn-light');
                $(".darkmode-btn-text").text("ライトモード");
            }
        });
    }
}

addToggleButton();
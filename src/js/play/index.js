import app from "./app";
import loader from "./loader";

/** メイン */
const main = () => {
    $("body").wrapInner('<div id="dlsite-darkmode"></div>');
    const el = document.getElementById("dlsite-darkmode");
    const ob = new MutationObserver((_mutation) => {

        if ($("#app")[0]) {
          app();
        }

        if ($("#loader")[0]) {
            console.log("loading...");
            loader();
        }
    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

main();


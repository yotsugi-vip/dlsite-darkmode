const className = "dlsite-darkmode";

const fn = () => {
    $(".loader").attr('id', 'loader');
    const el = document.getElementById("loader");
    const ob = new MutationObserver((mutation) => {
        // 要素が追加されたか?
        mutation.forEach((m)=>{
            console.log(m.target);
            console.log(m.type);
        });

        if ($("#app")[0]) {
            console.log('?')
            // 監視終了
            ob.disconnect();

            $(".page-content").addClass("dlsite-darkmode");
        }
    })

    const config = {
        childList: true,
        subtree: true
    };

    ob.observe(el, config);
}

fn();


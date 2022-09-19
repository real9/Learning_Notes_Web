import html2Canvas from 'html2canvas';

export default {
    install (Vue) {
        Vue.prototype.getPdf = function (_id) {
            html2Canvas(document.querySelector(_id), {
                allowTaint: true,
                // width: window.screen.availWidth,
                // windowWidth: document.body.scrollWidth,
                // windowHeight: document.body.scrollHeight,
                // x: 0,
                // y: window.pageYOffset
            }).then(function (canvas) {
                    // let contentWidth = canvas.width
                    // let contentHeight = canvas.height
                    // let pageHeight = contentWidth / 592.28 * 841.89
                    // let leftHeight = contentHeight
                    // let position = 0
                    // let imgWidth = 595.28
                    // let imgHeight = 592.28 / contentWidth * contentHeight
                    // const event = new MouseEvent('click'); // 创建一个鼠标事件的实例
                    let pageData = canvas.toDataURL('image/jpeg', 1.0)
                    //实现下载
                    const a = document.createElement('a');
                    a.href = pageData;
                    a.setAttribute('download', _id);
                    a.click();
                }
            )
        }
    }
}


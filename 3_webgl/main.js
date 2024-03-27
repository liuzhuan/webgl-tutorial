main()

function main() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('#glcanvas')
    const gl = canvas.getContext('webgl')

    if (gl === null) {
        console.log('当前浏览器不支持 WebGL')
        return
    }

    // 设置颜色值，它会用于清除颜色缓冲区
    gl.clearColor(1.0, 1.0, 0.0, 1.0)
    // 使用指定的颜色清除颜色缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT)
}
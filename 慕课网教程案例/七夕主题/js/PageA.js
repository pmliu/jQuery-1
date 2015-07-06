/**
 * 第一个页面
 * @param  {[type]} argument [description]
 * @return {[type]}          [description]
 */
var PageA = function() {


    //鸟动画
    $('#leftBird').spState(1).sprite({
        fps: 9,
        no_of_frames: 3
    }).scrollTo(450,300)


    $('#rightBird').spState(2).sprite({
        fps: 9,
        no_of_frames: 3
    })

    //执行云动画
    CloudEffect()

    //执行水波浪动画
    new WaveEffect("qx_water_1_1", -10, -1, 9, 1.5, 1.5)
    new WaveEffect("qx_water_1_2", 20, -50, 7, 1.5, 1.2)
    new WaveEffect("qx_water_1_3", 50, 7, 8, 0.8, 1.5)


    return {
        run: function() {

        }
    }
}

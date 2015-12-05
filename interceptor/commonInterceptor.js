/**
 * Created by spider on 15/11/21.
 */

function commonInterceptor(){

}

commonInterceptor.prototype.addServer= function (items) {
    return items.server=process.env.SERVER;
}

module.exports = new commonInterceptor();
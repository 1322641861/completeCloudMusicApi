// 获取wx openId

const crypto = require('crypto')

/**
 * 小程序               开发者后台                                  微信后台
 * wx.login获取code =>  appid+appsecret+code获取getAccessToken =>   ||
 *                                                                 \/
 * 前端最后接受状态      <== 自定义登录状态                           返回session_id + openid
 * ||
 * \/
 * wx.request发起请求=> 查询opendid和session_key =>                  返回业务数据
 * @returns 
 */
module.exports = async (query, request) => {
    console.log(query, request);
    let [appid, secret, grant_type] = ["wxad277c118403377c", "691e85755aa3b9eb697861f6bf099c2d", query.code];
    let data = {};
    let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`;
    let result = await request('GET', url, data, {});
    console.log(result);
  return result
}

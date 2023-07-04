const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5527151141252-0fc6a5065cd9ec0abf673613b2407e7b'
const web = new WebClient(token);

class addUser{
  async add_user(user){
    try {
        const result = await web.conversations.invite({
          channel: "C05E648TJP6",
          users: user
        });
        // console.log(result);
        return result
      }
      catch (error) {
        console.error(error);
        return error
      }
  }
}
module.exports=addUser

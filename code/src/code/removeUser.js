const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5527151141252-0fc6a5065cd9ec0abf673613b2407e7b'
const web = new WebClient(token);

class removeUser{
  async removeUser(user){
  try {
      const result = await web.conversations.kick({
        channel: "C05E648TJP6",
        user: user
      });
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  }
}
module.exports=removeUser
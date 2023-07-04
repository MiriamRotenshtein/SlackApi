const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5466955470851-7d771370546f29ed6354686898c6c3d9'
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
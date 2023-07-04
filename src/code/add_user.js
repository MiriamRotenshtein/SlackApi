const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5466955470851-7d771370546f29ed6354686898c6c3d9'
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

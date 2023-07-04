const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5524594054370-f7f0bdcb0ef8f6db5eab49f8369b7bfd'
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
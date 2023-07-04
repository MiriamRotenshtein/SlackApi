const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5466955470851-7d771370546f29ed6354686898c6c3d9'
const web = new WebClient(token);

class createChannel{
  
  async findConversation(name) {
    try {
    const result = await web.conversations.list({});
    for (const channel of result.channels) {
        if (channel.name === name) {
        return("Found conversation ID")       
        }
    }
    }
    catch (error) {
    console.error(error);
    }
  } 

  async create_channel(channel)  {  
    let result=await this.findConversation(channel)  
    if(result=="Found conversation ID"){
        console.log("this channel exist");
        return "this channel exist"
    }    
    else{
      try{      
          const result = await web.conversations.create({
            name: channel
          })
          console.log(result)
          return "added"
          }
      catch (error) {
        console.error(error)
      }
    }
  }
}

module.exports=createChannel


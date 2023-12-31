const { WebClient } = require('@slack/web-api');
const token = 'xoxp-5460143591990-5466679292707-5527151141252-0fc6a5065cd9ec0abf673613b2407e7b'
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


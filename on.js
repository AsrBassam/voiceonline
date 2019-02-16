const Eris = require("eris");
var kboosh = new Eris("NTQ1NjU4OTMzMzMxNzU1MDA4.D0hVdQ.RKMNteEWkvl3bU6LYTuMipQ90e4");
var kboosh_id = "545974637469630464";
                    var i = "0";
                    var x = "0";
kboosh.on("voiceChannelJoin", (msg) => {
    x++;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});
kboosh.on("voiceChannelLeave", (msg) => {
    x--;
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「" + x + "」"});
});

kboosh.on("messageCreate", (msg) => {
    if(msg.author.id !== "538009904036839425") return kboosh.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "^voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    kboosh.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    kboosh.editChannel(kboosh_id, { name : "Voice ⇏「"+x+"」"});
    messages = [];
}, 1);
    }
});


  

kboosh.connect("NTQ1NjU4OTMzMzMxNzU1MDA4.D0hVdQ.RKMNteEWkvl3bU6LYTuMipQ90e4")
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "owner",
  description: "Bot owner info",
  execute(message, args) {
    const DiscordServer = "https://discord.gg/9Tt9KeVkMv";
    const InstagramLink = "https://www.instagram.com/ig.billo/";
    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle(" 🫅 Owner Info")
      .setDescription(
        `__**About me**__:\n\n <:Wrench:1199404907493609605> *Bot by BilloXD, He is a well know CGI, VFX & 3D artist. He is a manager & Moderator of 10+ Discord Server.  Feel free to contact him!* \n <:dc:1199403812096589925> **Discord Support Server : [BilloXD](${DiscordServer})** \n <:instagram:1199403542847434843> **Instagram : [ig.billo](${InstagramLink})**`,
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};

/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/

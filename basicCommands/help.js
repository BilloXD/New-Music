const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const { ButtonStyle } = require("discord.js");
const db = require("../mongodb");
module.exports = {
  name: "help",
  aliases: ["hlp", "h"],
  description: "Shows a list of available commands",
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor("#2b71ec")
      .setAuthor({
        name: "Im here to Help!",
        iconURL:
          "https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&",
        url: "https://discord.gg/BsdfHF6r2M",
      })

      .setDescription(
        `__**STATS :**__\n\n> **<a:All_connect:1230899360976470160> Bot in servers:** ${serverCount}\n> **<a:ping:1241026820535488614> Bot Ping:** ${botPing}ms\n\n__**COMMANDS :**__ `,
      )
      .addFields(
        {
          name: "<a:enjoying:859462743248994304>  Basic",
          value: "`avatar`, `owner`, `support`, `invite`, `userinfo`",
          inline: true,
        },

        {
          name: "<a:music:1241029884902641778>  Music",
          value:
            "`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`",
          inline: true,
        },

        {
          name: "<a:heheheheh:859462752368459796>  Fun",
          value: " `ascii`, `joke`, `roll`",
          inline: true,
        },

        {
          name: "<:sd_image:1241030600891301909>  Image",
          value: "`cat`, `dog`",
          inline: true,
        },

        {
          name: "<a:Animespin:1241028340949979256>  Anime",
          value: "`<prefix>animecommands for more info`",
          inline: true,
        },

        {
          name: "<a:utility:1241028673797099520>  Utility",
          value: "`kick`, `ban`, `serverinfo`,`userinfo`, `clear`",
          inline: true,
        },
      )
      .setThumbnail(
        botUser.avatarURL({ dynamic: true, format: "png", size: 1024 }),
      )
      .setImage(
        `https://media.discordapp.net/attachments/1149279708924629003/1222700836170502265/standard_1.gif?ex=66489c24&is=66474aa4&hm=a883a9264bdf88ac3c3a40094db3a0b6fd2382e285b464256bc4cf3697a0daae&=&width=550&height=194`,
      );

    const button1 = new ButtonBuilder()
      .setLabel("YouTube")
      .setURL("https://www.youtube.com/channel/UCbOkgPMbbKnYad87C_AYRPw")
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel("Support Server")
      .setURL("https://discord.gg/BsdfHF6r2M")
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel("Invite Link")
      .setURL("https://twitter.com/BilloXd")
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder().addComponents(button1, button2, button3);

    message.reply({ embeds: [embed], components: [row] });
  },
};

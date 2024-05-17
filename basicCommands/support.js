const { EmbedBuilder } = require("discord.js");
const db = require("../mongodb");
module.exports = {
  name: "support",
  description: "support server of this Bot",
  execute(message, args) {
    const supportServerLink = "https://discord.gg/BsdfHF6r2M";
    const githubLink = "https://github.com/GlaceYT";
    const twitterLink = "https://twitter.com/BilloXd";
    const youtubeLink = "https://www.youtube.com/@iambilloxd";
    const embed = new EmbedBuilder()
      .setColor("#b300ff")
      .setAuthor({
        name: "Support Server",
        iconURL:
          "https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&",
        url: "https://discord.gg/xQF9f9yUEM",
      })
      .setDescription(
        `➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- Twiiter - ${twitterLink}\n- YouTube - ${youtubeLink}`,
      )
      .setImage(
        "https://media.discordapp.net/attachments/1149279708924629003/1222700836170502265/standard_1.gif?ex=66489c24&is=66474aa4&hm=a883a9264bdf88ac3c3a40094db3a0b6fd2382e285b464256bc4cf3697a0daae&=&width=550&height=194",
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

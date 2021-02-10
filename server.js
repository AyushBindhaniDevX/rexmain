// Networking Stuff so Uptimerobot has something to check (In theory you might not actually need this)
const http = require("http");
const express = require("express");
const app = express();
var server = require("http").createServer(app);
app.get("-", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Get the Discord librarys and create a client
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Watching Rexy| -help" } });
});

// Our coin flip command.
var commandCommand = function(message) {
  var coinflip = Math.floor(Math.random() * 2); // Outputs a value that's either 0 or 1.
  if (coinflip === 1) {
    // Check if the output was 1.
    message.channel.send(
      "Here are my commands!   | **-kick** | **-ban** | **-commands** | **-invite** | **-help** | **-updates** | **-server** |"
    ); // Send the message to the channel the command was posted in
  } else {
    // Otherwise
    message.channel.send(
      "Here are my commands!   | **-kick** | **-ban** | **-commands** | **-invite** | **-help** | **-updates** | **-server** |"
    ); // Send this message to the channel the command was posted in
  }
};

// Message function
client.on("message", message => {
  var commandMessage = message.toString(); // Converts the message into a string (as the message is an object techincally)
  if (commandMessage.startsWith("-")) {
    // Does the message start with the prefix?
    commandMessage = commandMessage.slice(1); // Take out the prefix
    console.log(commandMessage); // Output the current message into the logs

    if (commandMessage.startsWith("commands")) {
      // Does the command given equal this one?
      commandCommand(message); // Do the function above.
    }
  }
  if (message.content.startsWith("-ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Please mention someone");
      else {
        member.ban().then(mem => {
          message.channel.send(`Banned ${mem.user.username}!`);
        });
      }
    } else {
      message.reply("You don't have permission to do that");
    }
  }
  if (message.content.startsWith("-kick")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Please mention someone");
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`);
        });
      }
    } else {
      message.reply("You don't have permission to do that");
    }
  }
});
var inviteCommand = function(message) {
  var news = Math.floor(Math.random() * 1); // Outputs a value that's either 0 or 1.
  if (news === 1) {
    // Check if the output was 1.
    message.channel.send(
      "https://discord.gg/zbZM8u6zps"
    ); // Send the message to the channel the command was posted in
  } else {
    // Otherwise
    message.channel.send(
      "https://discord.gg/zbZM8u6zps"
    ); // Send this message to the channel the command was posted in
  }
};

// Message function
client.on("message", message => {
  var commandMessage = message.toString(); // Converts the message into a string (as the message is an object techincally)
  if (commandMessage.startsWith("-")) {
    // Does the message start with the prefix?
    commandMessage = commandMessage.slice(1); // Take out the prefix
    console.log(commandMessage); // Output the current message into the logs

    if (commandMessage.startsWith("invite")) {
      // Does the command given equal this one?
      inviteCommand(message); // Do the function above.
    }
  }
});
var helpCommand = function(message) {
  var news = Math.floor(Math.random() * 1); // Outputs a value that's either 0 or 1.
  if (news === 1) {
    // Check if the output was 1.
    message.channel.send(
      "Hey im Mod Bot! Im your moderation bot with the following moderation commands: kick, ban. If you want to know all my commands to -commands. If you need other help dm the moderators or owner in this server. Thanks and have a great day!"
    ); // Send the message to the channel the command was posted in
  } else {
    // Otherwise
    message.channel.send(
      "Hey im Mod Bot! Im your moderation bot with the following moderation commands: kick, ban. If you want to know all my commands to -commands. If you need other help dm the moderators or owner in this server. Thanks and have a great day!"
    ); // Send this message to the channel the command was posted in
  }
};

// Message function
client.on("message", message => {
  var commandMessage = message.toString(); // Converts the message into a string (as the message is an object techincally)
  if (commandMessage.startsWith("-")) {
    // Does the message start with the prefix?
    commandMessage = commandMessage.slice(1); // Take out the prefix
    console.log(commandMessage); // Output the current message into the logs

    if (commandMessage.startsWith("help")) {
      // Does the command given equal this one?
      helpCommand(message); // Do the function above.
    }
  }
});
var updatesCommand = function(message) {
  var news = Math.floor(Math.random() * 1); // Outputs a value that's either 0 or 1.
  if (news === 1) {
    // Check if the output was 1.
    message.channel.send("No new updates."); // Send the message to the channel the command was posted in
  } else {
    // Otherwise
    message.channel.send("No new updates."); // Send this message to the channel the command was posted in
  }
};

// Message function
client.on("message", message => {
  var commandMessage = message.toString(); // Converts the message into a string (as the message is an object techincally)
  if (commandMessage.startsWith("-")) {
    // Does the message start with the prefix?
    commandMessage = commandMessage.slice(1); // Take out the prefix
    console.log(commandMessage); // Output the current message into the logs

    if (commandMessage.startsWith("updates")) {
      // Does the command given equal this one?
      updatesCommand(message); // Do the function above.
    }
  }
});
client.on("guildMemberAdd", member => {
  if (member.guild.id === "808486474076651530") {
    client.channels.cache.get("808487712910082108").send(`Welcome ${member}!`);
  }
});
var serverCommand = function(message) {
  var news = Math.floor(Math.random() * 1); // Outputs a value that's either 0 or 1.
  if (news === 1) {
    // Check if the output was 1.
    message.channel.send("https://discord.gg/zbZM8u6zps"); // Send the message to the channel the command was posted in
  } else {
    // Otherwise
    message.channel.send("https://discord.gg/zbZM8u6zps"); // Send this message to the channel the command was posted in
  }
};

// Message function
client.on("message", message => {
  var commandMessage = message.toString(); // Converts the message into a string (as the message is an object techincally)
  if (commandMessage.startsWith("-")) {
    // Does the message start with the prefix?
    commandMessage = commandMessage.slice(1); // Take out the prefix
    console.log(commandMessage); // Output the current message into the logs

    if (commandMessage.startsWith("server")) {
      // Does the command given equal this one?
      serverCommand(message); // Do the function above.
    }
  }
});
// Ready function
client.on("ready", () => {
  console.log("Bot was logged in"); // Output a message to the logs.
});
client.login(process.env.TOKEN); // Login your discord bot, if you don't use glitch, you can replace process.env.TOKEN with a token from a data file or something. NEVER SHARE YOUR TOKEN WITH ANYONE OR THEY CAN ACCESS YOUR BOT.

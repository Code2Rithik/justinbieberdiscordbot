const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();

const prefix = "jb!";

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Justin Bieber Songs',
            type: 'LISTENING',
            url: 'https://discord.com'
        }
    });
 });

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "youtube") {
    message.channel.send(
      "Heyo! Watch My YouTube Videos at https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ :thumbsup:"
    );
  }

  if (command === "spotify") {
    message.channel.send(
      "Heyo! Listen to My Songs at https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s :thumbsup:"
    );
  }

  if (command === "facebook") {
    message.channel.send(
      "Heyo! See my FaceBook posts at https://www.facebook.com/JustinBieber :thumbsup:"
    );
  }

  if (command === "instagram") {
    message.channel.send(
      "Heyo! See my Instagram posts at https://www.instagram.com/justinbieber :thumbsup:"
    );
  }

  if (command === "twitter") {
    message.channel.send(
      "Heyo! See my Twitter posts at https://twitter.com/justinbieber :thumbsup:"
    );
  }

  if (command === "applemusic") {
    message.channel.send(
      "Heyo! Listen to My Songs at https://music.apple.com/us/artist/justin-bieber/320569549 :thumbsup:"
    );
  }

  if (command === "website") {
    message.channel.send(
      "Heyo! Visit my website at https://www.justinbiebermusic.com/ :thumbsup:"
    );
  }

  if (command === "pfp") {
    message.channel.send(
      "https://lh3.googleusercontent.com/pW7Jv2o8g0bkXFi11hrumm_N0e7KAf5pc5bawoSdD44uTLAYQi-Eeh1t1HileeiMx-9pXN6hQROW-OBEzWQWcEs2"
    );
  }

  if (command === "ping") {
    message.channel.send("PONG!");
  }

  if (message.content === `${prefix}server`) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  }

  if (command === "mypfp") {
    message.reply(message.author.displayAvatarURL());
  }

  if (command === "hello") {
    message.channel.send(
      "Hey There! I am Justin Bieber and I am a worldwide Popular Singer!"
    );
  }

  if (command === "2much") {
    message.channel.send(
      "https://open.spotify.com/track/0oaY19dUwZimIgzn3ZZLZO?si=02c9ebb8f27e43c6"
    );
  }

  if (command === "allaroundtheworld") {
    message.channel.send(
      "https://open.spotify.com/track/1Mg8vLBYwizu7AuhYQO64V?si=5d23a9f2d5614818"
    );
  }

  if (command === "allbad") {
    message.channel.send(
      "https://open.spotify.com/track/3JNEXPTnSxqlxNqhTW61D2?si=1e5cc31c86ab4da1"
    );
  }

  if (command === "alliwantisyou") {
    message.channel.send(
      "https://open.spotify.com/track/0E4rAAAzRPE8I7tYzNq99p?si=ab83456f33534351"
    );
  }

  if (command === "allinit") {
    message.channel.send(
      "https://open.spotify.com/track/4kP50JQmyFrl9pLSmnFPZr?si=d8f0ca2fcb18418b"
    );
  }

  if (command === "allthatmatters") {
    message.channel.send(
      "https://open.spotify.com/track/6CLVh9sekZ1p2G8Tfhhj8h?si=f740c39fa6ca4805"
    );
  }

  if (command === "anyone") {
    message.channel.send(
      "https://open.spotify.com/track/2WnAKZefdRHxtBEkRjFOHC?si=8a9d6d7ed0684052"
    );
  }

  if (command === "asiam") {
    message.channel.send(
      "https://open.spotify.com/track/4MmMxyew8yq1OEyJOMaX6M?si=e3042a728132461c"
    );
  }

  if (command === "aslongasyouloveme") {
    message.channel.send(
      "https://open.spotify.com/track/0pwYLVXVknPSGUQb39cePC?si=6cb437de59394bfe"
    );
  }

  if (command === "available") {
    message.channel.send(
      "https://open.spotify.com/track/1b6tPXXCV2fSNtR3SKWUQA?si=26868c4734d64f4a"
    );
  }

  if (command === "badday") {
    message.channel.send(
      "https://open.spotify.com/track/4VAngYbLewVFpcLR9FpYfR?si=d6eb6a519f6a4ddf"
    );
  }

  if (command === "baby") {
    message.channel.send(
      "https://open.spotify.com/track/7ITmF7cmnFeUbNDVXnUfdl?si=5735e75ca59d420b"
    );
  }

  if (command === "bealright") {
    message.channel.send(
      "https://open.spotify.com/track/0nxvFG50rGXkiGQqOO2MHr?si=db0b0a23a7374fa4"
    );
  }

  if (command === "beautyandabeat") {
    message.channel.send(
      "https://open.spotify.com/track/190jyVPHYjAqEaOGmMzdyk?si=2420d62fede24f2c"
    );
  }

  if (command === "believe") {
    message.channel.send(
      "https://open.spotify.com/track/6ImYcmDP7WamwVBbZeHUTy?si=7e5a1606cad944ef"
    );
  }

  if (command === "boyfriend") {
    message.channel.send(
      "https://open.spotify.com/track/3UGIZ8qcrMTwzLbx6Kttqt?si=d81387df335646c1"
    );
  }

  if (command === "catchingfeelings") {
    message.channel.send(
      "https://open.spotify.com/track/5uDuOnjJ0MrfJxvEHPpJap?si=d8cfac59961246c6"
    );
  }

  if (command === "changeme") {
    message.channel.send(
      "https://open.spotify.com/track/5cn4RhNZPPjt0onhqUMEfa?si=f3a5723aebfd4d4a"
    );
  }

  if (command === "changes") {
    message.channel.send(
      "https://open.spotify.com/track/521Os1SMlxmsoevsqyjNmJ?si=8358756aee714156"
    );
  }

  if (command === "children") {
    message.channel.send(
      "https://open.spotify.com/track/7sK3nu6yk8urQ44ouEB7Au?si=a83db99306734a89"
    );
  }

  if (command === "christmaseve") {
    message.channel.send(
      "https://open.spotify.com/track/6Zztw1ERHqXAngHE8PfO6N?si=5fd68233ccc34483"
    );
  }

  if (command === "comearoundme") {
    message.channel.send(
      "https://open.spotify.com/track/2o9LAypwGH4ctV0i9boo6d?si=e0953949173f4e4f"
    );
  }

  if (command === "company") {
    message.channel.send(
      "https://open.spotify.com/track/61uyGDPJ06MkxJtHgPmuyO?si=8534b529f99b40ce"
    );
  }

  if (command === "confident") {
    message.channel.send(
      "https://open.spotify.com/track/3JsydWaf2Ev4ehaLUjj3SY?si=18e9d5e61d954d6b"
    );
  }

  if (command === "dieinyourarms") {
    message.channel.send(
      "https://open.spotify.com/track/2eHs8Swb16qSKatrLKnWKP?si=6c6dfa7fb65a409d"
    );
  }

  if (command === "downtoearth") {
    message.channel.send(
      "https://open.spotify.com/track/1q9pBaYcydq7LyYwD8SEBs?si=26ca33e6fdfe4e7e"
    );
  }

  if (command === "falala") {
    message.channel.send(
      "https://open.spotify.com/track/5Ea0FNlMDWkraQDlfOPrDv?si=5b2c91d34a60416c"
    );
  }

  if (command === "fall") {
    message.channel.send(
      "https://open.spotify.com/track/7zMMgJ8cSCg4iPuoxWtTyL?si=b179775d248643bb"
    );
  }

  if (command === "forever") {
    message.channel.send(
      "https://open.spotify.com/track/2ZlCGeK30BLRNSPC832pNZ?si=95b77eddc1e84bed"
    );
  }

  if (command === "freedom") {
    message.channel.send(
      "https://open.spotify.com/track/63HbQY6pMHcBlE9LIyIuOG?si=bac33cc717964f85"
    );
  }

  if (command === "friends") {
    message.channel.send(
      "https://open.spotify.com/track/7iNIg7XDEaYECfWD5dJ9Va?si=eaa3dc1b03874166"
    );
  }

  if (command === "getme") {
    message.channel.send(
      "https://open.spotify.com/track/5VwwpU7KsLhgfbMEecedhJ?si=8b9ea033d5c943e1"
    );
  }

  if (command === "ghost") {
    message.channel.send(
      "https://open.spotify.com/track/6I3mqTwhRpn34SLVafSH7G?si=18629e5ff6cb4add"
    );
  }

  if (command === "habitual") {
    message.channel.send(
      "https://open.spotify.com/track/40qyPyljksBEqlNw5sW37T?si=9550b0dbab3d48a2"
    );
  }

  if (command === "getme") {
    message.channel.send(
      "https://open.spotify.com/track/5VwwpU7KsLhgfbMEecedhJ?si=8b9ea033d5c943e1"
    );
  }

});

client.login(process.env.DISCORD_TOKEN);
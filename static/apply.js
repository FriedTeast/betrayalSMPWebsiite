async function sendApplication(ev) {
    ev.preventDefault();

    const McUsername = document
        .getElementById('inputUsername').value;
    const DiscordName = document
        .getElementById('inputDiscord').value;
    const YoutubeChannel = document
        .getElementById('inputChannel').value;
    const TwitterPage = document
        .getElementById('inputChannel2').value;
    const IntroVideo = document
        .getElementById('inputIntro').value;

    const webhookBody = {
      embeds: [{
        title: 'Contact Form Submitted',
        fields: [
          { name: 'Minecraft Username', value: McUsername },
          { name: 'Discord Username', value: DiscordName },
          { name: 'Youtube Channel', value: YoutubeChannel },
          { name: 'Twitter Page', value: TwitterPage },
          { name: 'Intro Video', value: IntroVideo }
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1170788955118125156/peW3OZyCQ-YDlI6e8GUHnGMjLSDIZc53cvu9JYxguBF9O08k1IKdRTfl2sdIc7FwUUWc';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('I have received your application!');
    } else {
      alert('There was an error! Try again later!');
    }
  }
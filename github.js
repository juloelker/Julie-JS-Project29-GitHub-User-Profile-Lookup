//classes
class Github {
  constructor() {
    this.client_id = 'da7760ee170dc7e501a2';
    this.client_secret = '1f55e38c9cb5c951411df4bd44d1f7535c25787fc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

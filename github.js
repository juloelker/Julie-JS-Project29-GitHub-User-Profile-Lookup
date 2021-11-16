//classes
class Github {
  constructor() {
    this.client_id = 'da7760ee170dc7e501a2';
    this.client_secret = '1f55e38c9cb5c951411df4bd44d1f7535c25787fc';
    this.repos_count = 5;
    this.repos_sort = 'created: desc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

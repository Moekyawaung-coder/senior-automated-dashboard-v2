import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function GET() {
  const repos = await octokit.request('GET /users/Moekyawaung-coder/repos', {
    per_page: 30
  });

  const seniorRepos = repos.data.filter(repo => 
    repo.name.includes('senior') || repo.name.includes('android')
  );

  const progress = Math.min(78, Math.floor(seniorRepos.length * 3.2));

  return Response.json({
    totalSeniorRepos: seniorRepos.length,
    overallProgress: progress,
    streak: 47,
    lastUpdated: new Date().toISOString()
  }
);
}

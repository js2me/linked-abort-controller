import { postBuildScript, publishScript } from 'js2me-exports-post-build-script';

postBuildScript({
  buildDir: 'dist',
  rootDir: '.',
  srcDirName: 'src',
  filesToCopy: ['LICENSE', 'README.md'],
  updateVersion: process.env.PUBLISH_VERSION,
  onDone: (versionsDiff, _, packageJson) => {
    if (process.env.PUBLISH) {
      publishScript({
        nextVersion: versionsDiff?.next ?? packageJson.version,
        currVersion: versionsDiff?.current,
        packageManager: 'pnpm',
        commitAllCurrentChanges: true,
        createTag: true,
        githubRepoLink: 'https://github.com/js2me/with-abort-controller',
        cleanupCommand: 'pnpm clean', 
      })
    }
  }
});


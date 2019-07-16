import carderator from 'biz-carderator';
import path from 'path';
import readPkg from 'read-pkg';

(async (): Promise<void> => {
  const packageJson = await readPkg({
    cwd: path.join(__dirname, '..'),
  });

  const info = {
    name: 'Mitchell Simoens',
    github: 'mitchellsimoens',
    gitlab: 'mitchellsimoens',
    handle: 'mitchellsimoens',
    linkedin: 'mitchellsimoens',
    npm: 'mitchellsimoens',
    packageName: packageJson.name,
    twitter: 'LikelyMitch',
    website: 'https://mitchellsimoens.com',
    work: {
      company: 'Modus Create',
      title: 'Senior Fullstack Engineer',
    },
  };

  carderator(info);
})();

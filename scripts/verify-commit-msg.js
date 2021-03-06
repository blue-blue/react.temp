const chalk = require('react-dev-utils/chalk');
const msgPath = process.env.PWD + '/.git/COMMIT_EDITMSG';
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|docs|UI|refactor|β‘perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`,
    )}\n\n${chalk.red(
      `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
    )}
    ${chalk.green(`π₯ feat(compiler): add 'comments' option`)}
    ${chalk.green(`π fix(compiler): fix some bug`)}
    ${chalk.green(`π docs(compiler): add some docs`)}
    ${chalk.green(`π· UI(compiler): better styles`)}
    ${chalk.green(`π° chore(compiler): Made some changes to the scaffolding`)}
    ${chalk.green(
      `π locale(compiler): Made a small contribution to internationalization`,
    )}\n
    ${chalk.red(`See .github/commit-convention.md for more details.\n`)}`,
  );
  process.exit(1);
}

module.exports = () => {};

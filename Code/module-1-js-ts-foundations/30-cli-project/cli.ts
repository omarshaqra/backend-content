/**
 * Video 30: Small CLI Project with TypeScript
 *
 * - Parse process.argv, support --name and --greet
 * - Can extend with commander, yargs, or inquirer later
 *
 * Run: npx ts-node cli.ts --name Ali --greet
 * Or:  npm run build && node dist/cli.js --name Ali --greet
 */

function parseArgs(args: string[]): { name: string; greet: boolean } {
  const nameIndex = args.indexOf('--name');
  const name = nameIndex !== -1 && args[nameIndex + 1] ? args[nameIndex + 1] : 'Guest';
  const greet = args.includes('--greet');
  return { name, greet };
}

function main(): void {
  const args = process.argv.slice(2);
  const { name, greet } = parseArgs(args);

  if (greet) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Usage: node cli.js --name <name> --greet');
    console.log('Example: node cli.js --name Ali --greet');
  }
}

main();

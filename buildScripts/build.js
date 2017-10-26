import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console*/

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This may take a while ...'));

webpack(config).run((err, stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();
    if(jsonStats.hasError){
return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
if(jsonStats.hasWarning){
console.log(chalk.yellow('webpack generate the following warning:'));
jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}
console.log(`webpack stats ${stats}`);

console.log(chalk.green('your app has been build for production'));
    return 0;
});

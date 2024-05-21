#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease(){
        this.fuel -= 25;
    }
    fuelIncrease(){
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease(){
        this.fuel -= 25;
    }
}

(function displayBanner() {
    console.clear();
    console.log(chalk.bold.green(figlet.textSync('Adventure Game', { font: 'Big'})));
})();

let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name:"
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["Skeleton💀", "Assassin👤", "Zombie🧟‍♂️"]
})

let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do {
    if(opponent.select == "Skeleton💀"){
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Choose your weapon",
            choices: ["Attack⚔️", "Drink Portion🍺", "Run for Your Life🏃‍♂️💨"]
        });
        if(ask.option == "Attack⚔️"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                console.log(`${chalk.bold.green(o1.name)} attacked ${chalk.bold.red(p1.name)}`);
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0 ){
                    console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
                    process.exit();
                }
            }
            else{
                console.log(`${chalk.bold.green(p1.name)} attacked ${chalk.bold.red(o1.name)}`);
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0 ){
                    console.log("Skeleton encountered: 💀");
                    console.log(chalk.bold.italic.green("You Win!🎉🏆"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink Portion🍺"){
          p1.fuelIncrease();  
          console.log(chalk.bold.italic.green(`You Drink Health Portion, your fuel is ${p1.fuel}`));
        }
        if(ask.option == "Run for Your Life🏃‍♂️💨"){
            console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
            process.exit();
        }
    }

    if(opponent.select == "Assassin👤"){
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Choose your weapon",
            choices: ["Attack⚔️", "Drink Portion🍺", "Run for Your Life🏃‍♂️💨"]
        });
        if(ask.option == "Attack⚔️"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                console.log(`${chalk.bold.green(o1.name)} attacked ${chalk.bold.red(p1.name)}`);
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0 ){
                    console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
                    process.exit();
                }
            }
            else{
                console.log(`${chalk.bold.green(p1.name)} attacked ${chalk.bold.red(o1.name)}`);
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0 ){
                    console.log(chalk.bold.italic.green("You Win!🎉🏆"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink Portion🍺"){
          p1.fuelIncrease();  
          console.log(chalk.bold.italic.green(`You Drink Health Portion, your fuel is ${p1.fuel}`));
        }
        if(ask.option == "Run for Your Life🏃‍♂️💨"){
            console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
            process.exit();
        }
    }

    if(opponent.select == "Zombie🧟‍♂️"){
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Choose your weapon",
            choices: ["Attack⚔️", "Drink Portion🍺", "Run for Your Life🏃‍♂️💨"]
        });
        if(ask.option == "Attack⚔️"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                console.log(`${chalk.bold.green(o1.name)} attacked ${chalk.bold.red(p1.name)}`);
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0 ){
                    console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
                    process.exit();
                }
            }
            else{
                console.log(`${chalk.bold.green(p1.name)} attacked ${chalk.bold.red(o1.name)}`);
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0 ){
                    console.log(chalk.bold.italic.green("You Win!🎉🏆"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink Portion🍺"){
          p1.fuelIncrease();  
          console.log(chalk.bold.italic.green(`You Drink Health Portion, your fuel is ${p1.fuel}`));
        }
        if(ask.option == "Run for Your Life🏃‍♂️💨"){
            console.log(chalk.bold.italic.red("You Lose! Better Luck next Time😔👎"));
            process.exit();
        }
    }
} while (true);


/**
 * @name fullreport
 * @param {object} message - Message object
 */
export function fullreport(message) {
    // validate that required params are defined
    if (!message) return console.warn(`${new Date()} | ` + "Error: ${message} isnt defined. Did you forget to pass it? (./commands/utility/fullreport.js:13)");
    
    message.cancel = true;

    let player = message.sender;
    
    // make sure the user has permissions to run the command
    if(!player.hasTag("op")) 
        return player.runCommand(`tellraw @s {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"text":"You need to be Scythe-Opped to use this command."}]}`);

    return player.runCommand(`execute @a ~~~ function tools/stats`);
}
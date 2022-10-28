import {ArgsLib} from './lib/args.lib';
import {MacService} from "./services/mac.service";
import {outputType} from "./interfaces/mac.service.interface";

const mac = ArgsLib.getArg('mac') as string;
const output = ArgsLib.getArg('output') as outputType;
const fullResponse = ArgsLib.getArg('full', true);

console.log(`Searching for the mac address: ${mac}\noutput ${output} \nfull response: ${!!fullResponse}\n\n`);
console.log('result:');
MacService.search(mac, MacService.sanitizeOutputType(output) , !!fullResponse);


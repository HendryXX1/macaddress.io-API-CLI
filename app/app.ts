import {ArgsLib} from './lib/args.lib';
import {MacService} from "./services/mac.service";
import {outputType} from "./interfaces/mac.service.interface";

const mac = ArgsLib.getArg('mac');
let output = ArgsLib.getArg('output') as outputType;
const fullResponse = ArgsLib.getArg('--full', true);

switch (output){
  case 'json':case 'xml':case 'csv':case 'vendor':
    break;
  default:
    output = 'json';
}
console.log('here we go again...');
console.log(`Searching for the mac address: ${mac}\noutput ${output} \nfull response: ${!!fullResponse}`);

MacService.search('44:38:39:ff:ef:57', output, !!fullResponse);


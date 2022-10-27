import {argv} from 'node:process';

export class ArgsLib{

  static getArg(argName: string, flag = false): string | false{
      const arg: string | undefined = argv.find(el => flag ? el === argName : el.match(`${argName}=`)) as string;
      return flag ? arg : arg ? arg.split('=')[1] : false;
  }

  static configEnvironment(){

  }

}
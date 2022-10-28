import {config} from "dotenv"; config();
import https, {RequestOptions} from 'https';
import {outputType, MacApiResponseInterface} from "../interfaces/mac.service.interface";
import {IncomingMessage} from "http";

export class MacService {

  static apiHost: string = 'api.macaddress.io'
  static apiKey: string = process.env.API_KEY as string;

  static validateMac(macAddress: string): boolean{
      return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(macAddress);
  }

  static sanitizeOutputType(outputType: string): outputType{
    switch (outputType){
      case 'json':case 'xml':case 'csv':case 'vendor':
        return outputType;
      default:
        return 'json';
    }
  }

  static search(searchTerm: string, output: outputType = 'json', full: boolean = false){
    if(!MacService.validateMac(searchTerm)) {
      console.log({
        status: false,
        code: 'INVALID_MAC_ADDRESS',
      });
      return false;
    }
    const options: RequestOptions = {
      host: MacService.apiHost,
      path: `/v1?apiKey=${MacService.apiKey}&output=${output}&search=${searchTerm}`,
      method: 'GET',
    };
    const request = https.request(options, (response: IncomingMessage) => {
      let string = ''
      response.on('data', function (chunk) {
        string += chunk;
      });
      response.on('end', function () {
        if(output !== 'json'){ console.log(string); return;}
        const macAddressData: MacApiResponseInterface = JSON.parse(string);
        console.log({
          status: true,
          code: response.statusCode,
          data:  full ? macAddressData : {companyName: macAddressData.vendorDetails.companyName === '' ? 'NOT_FOUND' : macAddressData.vendorDetails.companyName}
        });
        return;
      });
    });

    request.on('error', function(err) {
      console.error(`Unexpected Error:\n${err}`);
    });

    request.end();
  }

}


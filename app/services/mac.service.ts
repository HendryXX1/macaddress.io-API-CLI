import {config} from "dotenv"; config();
import https, {RequestOptions} from 'https';
import {outputType, MacApiResponseInterface} from "../interfaces/mac.service.interface";

export class MacService {

  static apiHost: string = 'api.macaddress.io'
  static apiKey: string = process.env.API_KEY as string;

  static search(searchTerm: string, output: outputType = 'json', full: boolean = false){
    const options: RequestOptions = {
      host: MacService.apiHost,
      path: `/v1?apiKey=${MacService.apiKey}&output=${output}&search=${searchTerm}`,
      method: 'GET',
    };
    const request = https.request(options, (response) => {
      let string = ''
      response.on('data', function (chunk) {
        string += chunk;
      });
      response.on('end', function () {
        if(output !== 'json'){ console.log(string); return;}
        const finalObject: MacApiResponseInterface = JSON.parse(string);
        console.log(full ? finalObject : `The Company Name is: ${finalObject.vendorDetails.companyName}`);
      });
    });

    request.on('error', function(e) {
      console.error(`Unexpected Error here: ${e}`);
    });

    request.end();
  }

}



export interface MacApiResponseInterface{
  vendorDetails: VendorDetailsInterface;
  macAddressDetails: MacAddressDetailsInterface;
  blockDetails: BlockDetailsInterface;
}

export interface VendorDetailsInterface{
  oui: string;
  isPrivate: boolean;
  companyName: string;
  companyAddress: string;
  countryCode: string;
}

export interface BlockDetailsInterface{
  blockFound: boolean;
  borderLeft: string;
  borderRight: string;
  blockSize: number;
  assignmentBlockSize: 'MA-L' | 'MA-M' | 'MA-S' | 'IAB';
  dateCreated: string | Date;
  dateUpdated: string | Date;
}

export interface MacAddressDetailsInterface{
  searchTerm: string;
  isValid: boolean;
  virtualMachine: 'Not detected' | string;
  applications: string[];
  transmissionType: 'multicast' | 'unicast' | 'broadcast';
  administrationType: 'UAA' | 'LAA';
  wiresharkNotes: string;
  comment: string;
}

export type outputType = 'json' | 'xml' | 'csv' | 'vendor';

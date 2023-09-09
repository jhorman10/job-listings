export interface Card {
  id:        number;
  company:   string;
  logo:      string;
  new:       boolean;
  featured:  boolean;
  position:  string;
  role:      string;
  level:     Level;
  postedAt:  string;
  contract:  Contract;
  location:  string;
  languages: string[];
  tools:     string[];
}

export enum Contract {
  Contract = "Contract",
  FullTime = "Full Time",
  PartTime = "Part Time",
}

export enum Level {
  Junior = "Junior",
  Midweight = "Midweight",
  Senior = "Senior",
}

export interface OurClients {
  category: string;
  clients: string[];
}

export const ourClients: OurClients[] = [
  {
    category: "Business Entities",
    clients: [
      "Companies incorporated under the Companies Act",
      "Partnership Firms, including Limited Liability Partnerships (LLPs",
      "Government Companies",
      "Sole Proprietorships",
    ],
  },
  {
    category: "Public Sector",
    clients: ["Government Organizations"],
  },
  {
    category: "Non-Profit Organizations",
    clients: ["Charitable Institutions"],
  },
  {
    category: "Educational Institutions",
    clients: ["Schools", "Colleges", "Universities"],
  },
  {
    category: "International Trade",
    clients: ["Export-Import Companies"],
  },
  {
    category: "Financial Institutions",
    clients: ["Banking Companies (Private, Nationalized, and Co-operatives)"],
  },
];

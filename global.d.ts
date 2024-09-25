export { }
declare global {
  interface Window {
    schedule: {
      title: string;
      subtitle?: string;
      speakers?: string;
      type: ItemType;
      tab: number;  
    }[];
    sponsors: {
      name: string;
      href: string;
      logo: string;
      logoStyles: string;
      description: string;
    }[];
    sponsorsJobSearch: {
      name: string;
      apply: string;
      description: string;
      logo: string;  
    }[];
    university: {
      name: string;
      href: string;
      logo: string;
    }[];
    env: {
      baseUrl: string;
    }
  }
}
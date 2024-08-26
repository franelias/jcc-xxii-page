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
      description: JSX.Element;
    }[];
    sponsorsJobSearch: {
      name: string;
      apply: string;
      description: JSX.Element;
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
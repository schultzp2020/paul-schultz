export type Role = {
  company: string;
  title: string;
  logo: string;
  start: number;
  end: { label?: string; dateTime: number };
};

export const resume: Role[] = [
  {
    company: "Red Hat",
    title: "Software Engineer",
    logo: "/images/logos/red-hat.svg",
    start: 2022,
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Red Hat",
    title: "Associate Software Engineer",
    logo: "/images/logos/red-hat.svg",
    start: 2022,
    end: {
      dateTime: 2022,
    },
  },
  {
    company: "Red Hat",
    title: "Software Engineer Intern",
    logo: "/images/logos/red-hat.svg",
    start: 2021,
    end: {
      dateTime: 2022,
    },
  },
  {
    company: "Menards",
    title: "Information Systems Security Intern",
    logo: "/images/logos/menards.png",
    start: 2020,
    end: {
      dateTime: 2021,
    },
  },
];

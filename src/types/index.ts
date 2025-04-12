export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tech {
  name: string;
  logo: string;
} 
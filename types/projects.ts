export interface ProjectsEvent {
	date: Date | string;
	title: string;
	description?: string;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
}

export type Projects = Array<ProjectsEvent>;

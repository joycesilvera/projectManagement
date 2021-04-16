

export class Project
{
    projectID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: number;
    active: boolean;
    status: string;

    constructor()
    {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
    }
}

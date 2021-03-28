import { Injectable } from '@angular/core';

@Injectable()
// ({   //since we want to use service only on dashboard component
//   providedIn: 'root'
// })
export class DashboardService {
    getTeamMembersSummary(): any[] {
        var TeamMembersSummary = [
          {
            Region: 'East',
            TeamMembersCount: 20,
            TemporarilyUnavailableMembers: 4,
          },
          {
            Region: 'West',
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 8,
          },
          {
            Region: 'South',
            TeamMembersCount: 17,
            TemporarilyUnavailableMembers: 1,
          },
          {
            Region: 'North',
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 6,
          },
        ];
        return TeamMembersSummary;
      }
 
}
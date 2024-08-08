package model

type DeleteTeamMemberResponse struct {
	TeamMemberID int `json:"teamMemberID"`
}

func NewDeleteTeamMemberResponse(TeamMember *TeamMember) *DeleteTeamMemberResponse {
	return &DeleteTeamMemberResponse{
		TeamMemberID: TeamMember.TeamID,
	}
}

func (resp *DeleteTeamMemberResponse) ExportForFeedback() interface{} {
	return resp
}

package model

type TeamMemberIDResponse struct {
	TeamMemberIDs []int `json:"teamMemberIDs"`
}

func NewTeamMemberIdsResponse(TeamMemberIds []int) *TeamMemberIDResponse {
	return &TeamMemberIDResponse{
		TeamMemberIDs: TeamMemberIds,
	}
}

func (resp *TeamMemberIDResponse) ExportForFeedback() interface{} {
	return resp
}

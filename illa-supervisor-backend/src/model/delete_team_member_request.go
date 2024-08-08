package model

type DeleteTeamMemberRequest struct {
	TeamMemberId int `json:"TeamMemberId" validate:"required"`
}

func NewDeleteTeamMemberRequest() *DeleteTeamMemberRequest {
	return &DeleteTeamMemberRequest{}
}

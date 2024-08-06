package model

type CreateTeamMemberRequest struct {
	IdTeam   int `json:"idTeam" validate:"required"`
	UserId   int `json:"UserId" validate:"required"`
	RoleTeam int `json:"roleTeam" validate:"required"`
}

func NewTeamMemberRequest() *CreateTeamMemberRequest {
	return &CreateTeamMemberRequest{}
}

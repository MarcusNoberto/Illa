package model

type CreateTeamRequest struct {
	Name string `json:"name" validate:"required"`
}

func NewTeamRequest() *CreateTeamRequest {
	return &CreateTeamRequest{}
}

package model

type CreateTeamRequest struct {
	Name       string `json:"name" validate:"required"`
	Identifier string `json:"identifier" validate:"required"`
}

func NewTeamRequest() *CreateTeamRequest {
	return &CreateTeamRequest{}
}

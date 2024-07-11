package model

type SignupRequest struct {
	Nickname string `json:"nickname" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	Role     int    `json:"role" validate:"required"`
}

func NewSignupRequest() *SignupRequest {
	return &SignupRequest{}
}
